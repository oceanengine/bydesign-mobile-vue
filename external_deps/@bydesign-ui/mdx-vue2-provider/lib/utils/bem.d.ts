declare type Mod = string | {
    [key: string]: any;
};
export default function createBEM(name: string): (el?: string | {
    [key: string]: any;
} | Mod[] | undefined, mods?: string | {
    [key: string]: any;
} | Mod[] | undefined) => string;
export {};
