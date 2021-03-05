import * as d3 from "d3";
import * as d3hsv from "d3-hsv";
import * as d3cam02 from "d3-cam02";
import * as d3hsluv from "d3-hsluv";
import { getClosestIndex, getYSeries } from "../curve";
import {
  RGB_MAX,
  RGB_MIN,
  getSrgbFromNumber,
  relatedLuminance,
  CONTRAST_RATIO_MAX,
  contrastRatio,
} from "../translate";

export type InitResult = "Succeed" | "Failed";

export interface DataMap {
  hsl: d3.HSLColor;
  lab: d3.LabColor;
  jab: { J: number; a: number; b: number };
  jch: { J: number; C: number; h: number };
  lch: d3.HCLColor;
  hsv: d3hsv.HSVColor;
  hsluv: { l: number; u: number; v: number };
}

export type DataKey = keyof DataMap;

export const translatorMap: {
  [K in DataKey]: (rgb: d3.RGBColor) => DataMap[K];
} = {
  hsl: d3.hsl,
  lab: d3.lab,
  jab: d3cam02.jab,
  jch: d3cam02.jch,
  lch: d3.hcl,
  hsv: d3hsv.hsv,
  hsluv: d3hsluv.hsluv,
};

let baseInitialed = false;
const relatedLuminanceData: number[] = Array(RGB_MAX);

const dataMap: { [K in DataKey]?: DataMap[K][] } = {};

function initBase(): void {
  if (baseInitialed) {
    return;
  }
  baseInitialed = true;
  for (let i = RGB_MIN; i < RGB_MAX; i++) {
    relatedLuminanceData[i] = relatedLuminance(getSrgbFromNumber(i));
  }
}

function initInternal<K extends DataKey>(key: K): void {
  (Object.keys(dataMap) as DataKey[]).forEach((k) => delete dataMap[k]);
  const data: DataMap[K][] = Array(RGB_MAX);
  const translator = translatorMap[key] as (rgb: d3.RGBColor) => DataMap[K];

  for (let i = RGB_MIN; i <= RGB_MAX; i++) {
    data[i] = translator(getSrgbFromNumber(i));
  }

  (dataMap[key] as DataMap[K][]) = data;
}

/**
 * Init the data map for incoming querying.
 * @param key The relatedLuminance or color spaces.
 */
export async function init<K extends DataKey>(key: K): Promise<InitResult> {
  initBase();
  try {
    initInternal(key);
  } catch (error) {
    console.error(error);
    return "Failed";
  }
  return "Succeed";
}

export type NumberPartial<T> = {
  [K in keyof T]?: T[K] extends string | boolean ? never : T[K];
};

export async function queryClosest<K extends DataKey>(
  key: K,
  params: NumberPartial<DataMap[K]>,
  luminance: number
): Promise<string> {
  const data = dataMap[key];
  if (!data) {
    throw Error("Error: data no found, must invoke init() before query().");
  }

  const keyValuePairs = Object.entries(params) as [keyof DataMap[K], number][];

  let minDeltaBasic = Math.sqrt(
    keyValuePairs.reduce((agg, [k, v]) => agg + v ** 2, 0)
  );
  let minDeltaWithLuminance = CONTRAST_RATIO_MAX;
  let minIndex = 0;

  for (let i = RGB_MIN; i < RGB_MAX; i++) {
    const color = data[i] as DataMap[K];
    let quadraticSum = 0;
    for (let j = 0; j < keyValuePairs.length; j++) {
      const [k, v] = keyValuePairs[j];
      quadraticSum += (((color[k] as unknown) as number) - v) ** 2;
    }
    const deltaBasic = Math.sqrt(quadraticSum);
    const deltaLuminance = Math.sqrt(
      (relatedLuminanceData[i] - luminance) ** 2
    );
    const deltaWithLuminance = Math.sqrt(
      quadraticSum + (relatedLuminanceData[i] - luminance) ** 2
    );

    if (
      deltaWithLuminance < minDeltaWithLuminance
      // && deltaBasic <= minDeltaBasic
    ) {
      minDeltaBasic = deltaBasic;
      minDeltaWithLuminance = deltaWithLuminance;
      minIndex = i;
    }
  }

  return `#${minIndex.toString(16).padStart(6, "0")}`;
}

export async function querySeries<K extends DataKey>(
  key: K,
  params: NumberPartial<DataMap[K]>,
  luminances: number[]
): Promise<string[]> {
  return Promise.all(luminances.map((l) => queryClosest(key, params, l)));
}

// ================================================================

export interface ColorToolkit {
  name: string;
  translator: (rgb: d3.RGBColor) => any;
  interpolator: (a: any, b: any) => (value: number) => string;
}

export type ColorSpace = "RGB" | "HSL" | "HSV" | "Lab" | "CAM02";

export const toolkitMap: Record<ColorSpace, ColorToolkit> = {
  RGB: {
    name: "rgb",
    translator: d3.rgb,
    interpolator: d3.interpolateRgb,
  },
  HSL: {
    name: "hsl",
    translator: d3.hsl,
    interpolator: d3.interpolateHsl,
  },
  HSV: {
    name: "hsv",
    translator: d3hsv.hsv,
    interpolator: d3hsv.interpolateHsv,
  },
  Lab: {
    name: "lab",
    translator: d3.lab,
    interpolator: d3.interpolateLab,
  },
  CAM02: {
    name: "jab",
    translator: d3cam02.jab,
    interpolator: d3cam02.interpolateJab,
  },
};

export interface QueryOptions<K extends ColorSpace> {
  /**
   * The color space
   */
  space: K;
  backgroundColor: string;
  seedColors: Record<string, string>;
  contrastRatioList: number[];
}

export function query<K extends ColorSpace>(
  options: QueryOptions<K>,
  postProcess?: (
    result: Record<string, [string, number][]>
  ) => Record<string, [string, number][]>
): Record<string, [string, number][]> {
  const { space, backgroundColor, seedColors, contrastRatioList } = options;

  const result: Record<string, [string, number][]> = {};

  Object.entries(seedColors).forEach(([name, hex]) => {
    const sequence: [string, number][] = querySequence(
      space,
      backgroundColor,
      [hex],
      contrastRatioList
    );
    result[name] = sequence;
  });

  return (postProcess && postProcess(result)) || result;
}

export function getRelatedLuminanceByContrastRatio(
  backgroundRelatedLuminance: number,
  contrastRatio: number
): number {
  const result =
    backgroundRelatedLuminance < 0.5
      ? contrastRatio * (backgroundRelatedLuminance + 0.05) - 0.05
      : (backgroundRelatedLuminance + 0.05) / contrastRatio - 0.05;
  return result < 0 ? 0 : result > 1 ? 1 : result;
}

const fragments = 30000;
export function querySequence(
  space: ColorSpace,
  backgroundColor: string,
  keyColors: string[],
  contrastRatioList: number[]
): [string, number][] {
  const toolkit = toolkitMap[space];
  const { translator, interpolator } = toolkit;

  const backgroundRgb = d3.rgb(backgroundColor);
  const dark = relatedLuminance(backgroundRgb) < 0.5;

  const finalKeyColors = [
    ...[...keyColors].sort((a, b) => {
      const [A, B] = [a, b].map((v) => contrastRatio(d3.rgb(v), backgroundRgb));
      return A - B;
    }),
  ];

  {
    // end color
    const endColor = dark ? "#ffffff" : "#000000";
    finalKeyColors.push(endColor);
    // start color
    const interpolate = interpolator(
      translator(d3.rgb(dark ? "#000000" : "#ffffff")),
      finalKeyColors[0]
    );
    const sequenceHex: string[] = [];
    const sequenceRatio: number[] = [];
    Array(fragments)
      .fill(0)
      .forEach((_, progress) => {
        const color = interpolate((progress + 1) / fragments);
        const rgb = d3.rgb(color);
        const ratio = contrastRatio(d3.rgb(color), backgroundRgb);
        sequenceHex.push(rgb.formatHex());
        sequenceRatio.push(ratio);
      });
    sequenceHex.reverse();
    sequenceRatio.reverse();
    const closestIndex = getClosestIndex(sequenceRatio, 1);
    const startColor = sequenceHex[closestIndex];
    finalKeyColors.unshift(startColor);
  }

  const { length } = finalKeyColors;
  const last = length - 1;

  const keyRgbs = finalKeyColors.map((hex) => d3.rgb(hex));
  const keyRatios = keyRgbs.map((rgb) => contrastRatio(backgroundRgb, rgb));
  const keyValues = keyRgbs.map((rgb) => translator(rgb));
  const interpolates = keyValues.map((value, i) => {
    if (i === 0) {
      return (t: number) => finalKeyColors[0];
    }
    return interpolator(keyValues[i - 1], value);
  });

  const sequenceHex: string[] = [];
  const sequenceRatio: number[] = [];
  interpolates.forEach((interpolate, i) => {
    if (i === 0) {
      return;
    }
    Array(fragments)
      .fill(0)
      .forEach((_, progress) => {
        const color = interpolate((progress + 1) / fragments);
        const rgb = d3.rgb(color);
        const ratio = contrastRatio(d3.rgb(color), backgroundRgb);
        sequenceHex.push(rgb.formatHex());
        sequenceRatio.push(ratio);
      });
  });

  return contrastRatioList.map((c): [string, number] => {
    {
      const keyIndex = keyRatios.indexOf(c);
      if (keyIndex > 0) {
        return [finalKeyColors[keyIndex], c];
      }
    }
    {
      if (c > keyRatios[last]) {
        return [finalKeyColors[last], keyRatios[last]];
      }
    }
    {
      const closestIndex = getClosestIndex(sequenceRatio, c);
      const hex = sequenceHex[closestIndex];
      const ratio = sequenceRatio[closestIndex];
      return [hex, ratio];
    }
  });
}
