import * as d3 from "d3";
export declare const RGB_MIN: number;
export declare const RGB_MAX: number;
export declare function getSrgbFromNumber(value: number): d3.RGBColor;
export declare function createColorTranslator<T>(translator: (color: d3.RGBColor) => T): (value: number) => T;
export declare function standardToLinear(value: number): number;
export declare function relatedLuminance(sRGB: d3.RGBColor): number;
export declare function grayScale(sRGB: d3.RGBColor): number;
export declare const CONTRAST_RATIO_MIN = 1;
export declare const CONTRAST_RATIO_MAX = 21;
export declare function contrastRatio(a: d3.RGBColor, b: d3.RGBColor): number;
//# sourceMappingURL=translate.d.ts.map