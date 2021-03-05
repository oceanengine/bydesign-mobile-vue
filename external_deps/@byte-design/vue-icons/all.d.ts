import { IconMap } from './map';
import { IIcon } from './runtime';
import { VueConstructor } from 'vue';
export declare type IconType = keyof typeof IconMap;
export interface IBytedIcon extends IIcon {
    type: IconType;
}
export declare const BytedIcon: VueConstructor<IBytedIcon>;
