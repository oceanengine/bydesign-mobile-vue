export interface MatchDemo {
    path: string;
    name: string;
    code: string;
}
export interface MatchDemos {
    [key: string]: MatchDemo;
}
export default function (this: any, content: string): Promise<string>;
