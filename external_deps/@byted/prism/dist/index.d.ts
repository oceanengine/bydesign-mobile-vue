import { RGBColor, HSLColor, LabColor, HCLColor } from 'd3';
import { HSVColor } from 'd3-hsv';

/**
拟合方程式：Y = a + b·X + c·X2 + d·X3 + e·X4 + f·X5

参数：

a = 2.80556391490106

b = -1.01491279589738

c = 0.911218467059328

d = -0.260999395859336

e = 0.0352810380607801

f = -0.00172187283785092

相关系数 R2：0.999925212773858
 */
declare function curveAdobeSpectrum(X: number, amount: number): number;
/**
拟合方程式：Y = a + b·X + c·X2 + d·X3 + e·X4 + f·X5

参数：

a = 1.17160555554771

b = 0.136104149565393

c = -0.205232536343237

d = 0.162261403029564

e = -0.0232492322213921

f = 0.000989281211891432

相关系数 R2：0.996870860430168
 */
declare function curveGoogleMaterial(X: number, amount: number): number;
/**
拟合方程式：Y = a + b·X + c·X2 + d·X3 + e·X4 + f·X5

参数：

a = 1.42077117276554

b = 1.97245501432833

c = -0.98082272198693

d = 0.281191542127172

e = 0.00366469599865697

f = -0.00322141824437273

相关系数 R2：1
 */
declare function curveFirefoxPhoton(X: number, amount: number): number;
/**
拟合方程式：Y = a + b·X + c·X2 + d·X3 + e·X4 + f·X5

参数：

a = 1.46564604642846

b = -0.928203887106309

c = 0.741369599412513

d = -0.205177932922759

e = 0.0254591071464198

f = -0.00101578314785047

相关系数 R2：0.999832084747266
 */
declare function curveAntD(X: number, amount: number): number;
/**
拟合方程式：Y = a + b·X + c·X2 + d·X3 + e·X4 + f·X5

参数：

a = 1.43066442413396

b = -0.183303227490002

c = -0.297894090795745

d = 0.20894616649874

e = -0.0339616146116733

f = 0.00177454663520377

相关系数 R2：0.997157115094652
 */
declare function curveMicrosoftFluent(X: number, amount: number): number;
/**
拟合方程式：Y = a + b·X + c·X2 + d·X3 + e·X4 + f·X5

参数：

a = 1.4566227721917

b = -0.750523514967315

c = 0.525147359851746

d = -0.112197666983703

e = 0.0110033631737628

f = -0.000329609883693566

相关系数 R2：0.999958565808073
 */
declare function curveByDesign(X: number, amount: number): number;
declare const curveFunctionMap: Record<string, (x: number, amount: number) => number>;
declare const curveNormalizeMap: Record<string, number>;
declare function getClosestIndex(list: number[], value: number): number;
declare function getYSeries(curve: string, amount: number, primaryY?: number): number[];
//# sourceMappingURL=curve.d.ts.map

declare const RGB_MIN: number;
declare const RGB_MAX: number;
declare function getSrgbFromNumber(value: number): RGBColor;
declare function createColorTranslator<T>(translator: (color: RGBColor) => T): (value: number) => T;
declare function standardToLinear(value: number): number;
declare function relatedLuminance(sRGB: RGBColor): number;
declare function grayScale(sRGB: RGBColor): number;
declare const CONTRAST_RATIO_MIN = 1;
declare const CONTRAST_RATIO_MAX = 21;
declare function contrastRatio(a: RGBColor, b: RGBColor): number;
//# sourceMappingURL=translate.d.ts.map

declare function asyncQueue<T>(tasks: (() => Promise<T>)[], parallel: number): Promise<T[]>;
//# sourceMappingURL=async.d.ts.map

declare type InitResult = "Succeed" | "Failed";
interface DataMap {
    hsl: HSLColor;
    lab: LabColor;
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
    lch: HCLColor;
    hsv: HSVColor;
    hsluv: {
        l: number;
        u: number;
        v: number;
    };
}
declare type DataKey = keyof DataMap;
declare const translatorMap: {
    [K in DataKey]: (rgb: RGBColor) => DataMap[K];
};
/**
 * Init the data map for incoming querying.
 * @param key The relatedLuminance or color spaces.
 */
declare function init<K extends DataKey>(key: K): Promise<InitResult>;
declare type NumberPartial<T> = {
    [K in keyof T]?: T[K] extends string | boolean ? never : T[K];
};
declare function queryClosest<K extends DataKey>(key: K, params: NumberPartial<DataMap[K]>, luminance: number): Promise<string>;
declare function querySeries<K extends DataKey>(key: K, params: NumberPartial<DataMap[K]>, luminances: number[]): Promise<string[]>;
interface ColorToolkit {
    name: string;
    translator: (rgb: RGBColor) => any;
    interpolator: (a: any, b: any) => (value: number) => string;
}
declare type ColorSpace = "RGB" | "HSL" | "HSV" | "Lab" | "CAM02";
declare const toolkitMap: Record<ColorSpace, ColorToolkit>;
interface QueryOptions<K extends ColorSpace> {
    /**
     * The color space
     */
    space: K;
    backgroundColor: string;
    seedColors: Record<string, string>;
    contrastRatioList: number[];
}
declare function query<K extends ColorSpace>(options: QueryOptions<K>, postProcess?: (result: Record<string, [string, number][]>) => Record<string, [string, number][]>): Record<string, [string, number][]>;
declare function getRelatedLuminanceByContrastRatio(backgroundRelatedLuminance: number, contrastRatio: number): number;
declare function querySequence(space: ColorSpace, backgroundColor: string, keyColors: string[], contrastRatioList: number[]): [string, number][];
//# sourceMappingURL=query.d.ts.map

declare const MESSAGE_TYPE_HANDLER_MAP: {
    readonly init: typeof init;
};
declare type MessageTypeHandlerMap = typeof MESSAGE_TYPE_HANDLER_MAP;
declare type MessageType = keyof MessageTypeHandlerMap;
declare type MessageTypeParamsMap<T extends MessageType> = {
    type: T;
    params: Parameters<MessageTypeHandlerMap[T]>;
};
declare type PromiseValueType<T> = T extends Promise<infer TValue> ? TValue : T;
declare type MessageTypeResultMap<T extends MessageType> = {
    type: T;
    result: PromiseValueType<ReturnType<MessageTypeHandlerMap[T]>>;
};
//# sourceMappingURL=handlers.d.ts.map

export { CONTRAST_RATIO_MAX, CONTRAST_RATIO_MIN, ColorSpace, ColorToolkit, DataKey, DataMap, InitResult, MESSAGE_TYPE_HANDLER_MAP, MessageType, MessageTypeHandlerMap, MessageTypeParamsMap, MessageTypeResultMap, NumberPartial, PromiseValueType, QueryOptions, RGB_MAX, RGB_MIN, asyncQueue, contrastRatio, createColorTranslator, curveAdobeSpectrum, curveAntD, curveByDesign, curveFirefoxPhoton, curveFunctionMap, curveGoogleMaterial, curveMicrosoftFluent, curveNormalizeMap, getClosestIndex, getRelatedLuminanceByContrastRatio, getSrgbFromNumber, getYSeries, grayScale, init, query, queryClosest, querySequence, querySeries, relatedLuminance, standardToLinear, toolkitMap, translatorMap };
