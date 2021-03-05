import * as d3 from "d3";
import * as d3hsv from "d3-hsv";
export declare type InitResult = "Succeed" | "Failed";
export interface DataMap {
    hsl: d3.HSLColor;
    lab: d3.LabColor;
    jab: {
        J: number;
        a: number;
        b: number;
    };
    jch: {
        J: number;
        C: number;
        h: number;
    };
    lch: d3.HCLColor;
    hsv: d3hsv.HSVColor;
    hsluv: {
        l: number;
        u: number;
        v: number;
    };
}
export declare type DataKey = keyof DataMap;
export declare const translatorMap: {
    [K in DataKey]: (rgb: d3.RGBColor) => DataMap[K];
};
/**
 * Init the data map for incoming querying.
 * @param key The relatedLuminance or color spaces.
 */
export declare function init<K extends DataKey>(key: K): Promise<InitResult>;
export declare type NumberPartial<T> = {
    [K in keyof T]?: T[K] extends string | boolean ? never : T[K];
};
export declare function queryClosest<K extends DataKey>(key: K, params: NumberPartial<DataMap[K]>, luminance: number): Promise<string>;
export declare function querySeries<K extends DataKey>(key: K, params: NumberPartial<DataMap[K]>, luminances: number[]): Promise<string[]>;
export interface ColorToolkit {
    name: string;
    translator: (rgb: d3.RGBColor) => any;
    interpolator: (a: any, b: any) => (value: number) => string;
}
export declare type ColorSpace = "RGB" | "HSL" | "HSV" | "Lab" | "CAM02";
export declare const toolkitMap: Record<ColorSpace, ColorToolkit>;
export interface QueryOptions<K extends ColorSpace> {
    /**
     * The color space
     */
    space: K;
    backgroundColor: string;
    seedColors: Record<string, string>;
    contrastRatioList: number[];
}
export declare function query<K extends ColorSpace>(options: QueryOptions<K>, postProcess?: (result: Record<string, [string, number][]>) => Record<string, [string, number][]>): Record<string, [string, number][]>;
export declare function getRelatedLuminanceByContrastRatio(backgroundRelatedLuminance: number, contrastRatio: number): number;
export declare function querySequence(space: ColorSpace, backgroundColor: string, keyColors: string[], contrastRatioList: number[]): [string, number][];
//# sourceMappingURL=query.d.ts.map