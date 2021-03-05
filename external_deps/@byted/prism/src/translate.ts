import * as d3 from "d3";

export const RGB_MIN: number = 0x000000;
export const RGB_MAX: number = 0xffffff;

export function getSrgbFromNumber(value: number): d3.RGBColor {
  const valueInt = Math.abs(Math.floor(value));
  const r = valueInt >> 16;
  const g = (valueInt ^ (r << 16)) >> 8;
  const b = valueInt ^ (r << 16) ^ (g << 8);
  return d3.rgb(r, g, b);
}

export function createColorTranslator<T>(
  translator: (color: d3.RGBColor) => T
): (value: number) => T {
  return (value) => translator(getSrgbFromNumber(value));
}

export function standardToLinear(value: number): number {
  const u = value / 255;
  if (u <= 0.03928) {
    return u / 12.92;
  }
  // return Math.pow(((u + 0.055) / 1.055), 2.4);
  return ((u + 0.055) / 1.055) ** 2.4;
}

export function relatedLuminance(sRGB: d3.RGBColor): number {
  const { r, g, b } = sRGB;
  const [rLinear, gLinear, bLinear] = [r, g, b].map((v) => standardToLinear(v));
  const luminance = 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
  return luminance;
}

export function grayScale(sRGB: d3.RGBColor): number {
  const { r, g, b } = sRGB;
  return standardToLinear(0.2126 * r + 0.7152 * g + 0.0722 * b);
}

export const CONTRAST_RATIO_MIN = 1;
export const CONTRAST_RATIO_MAX = 21;

export function contrastRatio(a: d3.RGBColor, b: d3.RGBColor): number {
  const lA = grayScale(a);
  const lB = grayScale(b);
  const [l1, l2] = lA > lB ? [lA, lB] : [lB, lA];
  return (l1 + 0.05) / (l2 + 0.05);
}
