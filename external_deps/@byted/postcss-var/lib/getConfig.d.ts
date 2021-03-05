export interface GatherItem {
    key: string;
    value: string;
    index: number;
}
export interface ConfigType {
    data: GatherItem[];
    statement: string;
}
export default function getConfig(text: string): null | ConfigType;
