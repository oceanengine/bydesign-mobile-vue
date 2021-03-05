import Vue, { ComponentOptions, VueConstructor, VNode } from 'vue';
import { DefaultComputed, DefaultData, DefaultMethods, ArrayPropsDefinition } from 'vue/types/options';
import * as CSS from 'csstype';
export declare type StrokeLinecap = 'butt' | 'round' | 'square';
export declare type StrokeLinejoin = 'miter' | 'round' | 'bevel';
export declare type Theme = 'outline' | 'filled' | 'two-tone' | 'multi-color' | string;
export interface ISvgIconProps {
    size: number | string;
    strokeWidth: number;
    strokeLinecap: StrokeLinecap;
    strokeLinejoin: StrokeLinejoin;
    outFillColor: string;
    outStrokeColor: string;
    innerFillColor: string;
    innerStrokeColor: string;
}
export interface IIconConfig {
    prefix: string;
    strokeWidth: number;
    strokeLinecap: StrokeLinecap;
    strokeLinejoin: StrokeLinejoin;
    theme: Theme;
    outline: {
        color: string;
        backgroundColor: string;
    };
    filled: {
        color: string;
        backgroundColor: string;
    };
    twoTone: {
        color: string;
        backgroundColor: string;
    };
    multiColor: {
        color: string;
        backgroundColor: string;
        innerColor: string;
        innerBackgroundColor: string;
    };
}
export interface IIconProps {
    theme?: Theme;
    size?: number | string;
    spin?: boolean;
    fill?: string | string[];
    strokeLinecap?: StrokeLinecap;
    strokeLinejoin?: StrokeLinejoin;
    strokeWidth?: number;
}
export interface IIcon extends Vue, IIconProps {
    wrapperClass: string;
}
export declare type IconOptions = ComponentOptions<IIcon, DefaultData<{
    wrapperClass: string;
}>, DefaultMethods<never>, DefaultComputed, ArrayPropsDefinition<IIcon>, IIconProps>;
export interface IIcon extends Vue, IIconProps {
    wrapperClass: string;
    $tsx_hooks_props: IIconProps & {
        ref?: string;
        key?: string;
        slot?: string;
        on?: {
            [key: string]: Function;
        };
        nativeOn?: {
            [key: string]: Function;
        };
        attrs?: {
            [key: string]: any;
        };
        style?: string | CSS.Properties<string | number>;
        class?: any;
        scopedSlots?: {
            [key: string]: (...args: any[]) => VNode | VNode[];
        };
    };
}
export declare type Icon = VueConstructor<IIcon>;
