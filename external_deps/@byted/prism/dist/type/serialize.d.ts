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
    hex: string;
    gray: string;
    relatedLuminance: number;
}
export declare const COLOR_NAMES: (keyof CompositedColor)[];
export declare const EXTRA_KEYS: (keyof CompositedColor)[];
export declare function initSerialize(): Promise<void>;
export declare function finishSerialize(): Promise<void>;
export declare function serialize(data: CompositedColor[], id: string | number): Promise<void>;
export declare function deserialize(id: string | number): Promise<CompositedColor[]>;
//# sourceMappingURL=serialize.d.ts.map