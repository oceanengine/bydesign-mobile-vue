import { Icon, ISvgIconProps } from './types';
import { CreateElement, VNode } from 'vue';
export declare function IconWrapper(type: string, render: (h: CreateElement, props: ISvgIconProps) => VNode): Icon;
