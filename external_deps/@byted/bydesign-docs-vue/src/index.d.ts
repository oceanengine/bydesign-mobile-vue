/**
 * vue
 */
import Vue from 'vue';

export interface AnchorItem {
  id: string;
  label: string;
}

export interface NavsItem {
    label: string;
    path?: string;
    activeIcon?: string;
    defaultIcon?: string;
    list?: NavsItem[];
    anchors?: AnchorItem[];
}
export interface ByDocsConfig {
    logo?: string;
    navs?: NavsItem[];
}
export declare type Config = ByDocsConfig;

export class ByDocs {
    static name: string;
    static install(vue: typeof Vue): void;
}

export default ByDocs;
