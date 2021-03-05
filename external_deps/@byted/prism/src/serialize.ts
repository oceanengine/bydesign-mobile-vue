import fs from "fs";
import pth from "path";
import lineReader from "line-reader";

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSL {
  h: number;
  s: number;
  l: number;
}

export interface HSB {
  h: number;
  s: number;
  b: number;
}

export interface Luv {
  l: number;
  u: number;
  v: number;
}

export interface Lab {
  l: number;
  a: number;
  b: number;
}

export interface Lch {
  l: number;
  c: number;
  h: number;
}

export interface CAM02Jab {
  j: number;
  a: number;
  b: number;
}

export interface CAM02JCh {
  j: number;
  c: number;
  h: number;
}

export interface CompositedColor {
  rgb: RGB;
  hsl: HSL;
  hsb: HSB;
  luv: Luv;
  lab: Lab;
  lch: Lch;
  jab: CAM02Jab;
  jch: CAM02JCh;

  // extra
  hex: string;
  gray: string;
  relatedLuminance: number;
}

const FILE_PATH = pth.resolve(__dirname, "colors.data");

export const COLOR_NAMES: (keyof CompositedColor)[] = [
  "rgb",
  "hsl",
  "hsb",
  "luv",
  "lab",
  "lch",
  "jab",
  "jch",
];

export const EXTRA_KEYS: (keyof CompositedColor)[] = [
  "hex",
  "gray",
  "relatedLuminance",
];

export async function initSerialize(): Promise<void> {}

export async function finishSerialize(): Promise<void> {}

export async function serialize(
  data: CompositedColor[],
  id: string | number
): Promise<void> {
  const path = FILE_PATH.replace(/\.data$/, id.toString() + ".data");
  const ws = fs.createWriteStream(path);
  if (fs.existsSync(path)) {
    fs.rmSync(path);
  }

  const write = async (c: string) =>
    new Promise<void>((resolve, reject) => {
      ws.write(c, (e) => (e ? reject(e) : resolve()));
    });

  for (let i = 0; i < data.length; i++) {
    const array: string[] = [];
    const compositedColor = data[i];

    for (let j = 0; j < COLOR_NAMES.length; j++) {
      const name = COLOR_NAMES[j];
      const color: any = compositedColor[name];
      name.split("").forEach((p) => {
        array.push(color[p].toString());
      });
    }

    for (let j = 0; j < EXTRA_KEYS.length; j++) {
      const key = EXTRA_KEYS[j];
      const value = compositedColor[key];
      array.push(value.toString());
    }

    const content = array.join(",") + "\n";
    await write(content);
  }

  console.log(path);
}

export async function deserialize(
  id: string | number
): Promise<CompositedColor[]> {
  return new Promise<CompositedColor[]>((resolve, reject) => {
    const data: CompositedColor[] = [];

    lineReader.eachLine(
      FILE_PATH.replace(/\.data$/, id.toString()) + ".data",
      (content, last) => {
        const compositedColor: any = {};
        const array = content.split(",");
        let i = 0;

        for (let j = 0; j < COLOR_NAMES.length; j++) {
          const name = COLOR_NAMES[j];
          const color: any = {};
          name.split("").forEach((p) => {
            color[p] = Number.parseFloat(array[i]);
            i++;
          });
          compositedColor[name] = color;
        }

        for (let j = 0; j < EXTRA_KEYS.length; j++) {
          const key = EXTRA_KEYS[j];
          const raw = array[i];
          i++;
          const value = /^\d+(.\d+)?$/.test(raw) ? Number.parseFloat(raw) : raw;
          compositedColor[key] = value;
        }

        data.push(compositedColor);

        if (last) {
          resolve(data);
        }
      }
    );
  });
}
