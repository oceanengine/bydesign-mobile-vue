/**
 * Processor
 */
import 'less';
import { Options, MapType } from './types';
export default class Processor {
    static markBefore: string;
    private options;
    private keys;
    private map;
    private mapKeys;
    constructor(options: Options, map: MapType);
    check(line: string): boolean;
    isOperator(str: string): boolean;
    addCalc(line: string): string;
    getRgbValue(key: string): string;
    addRgba(line: string): string;
    private gather;
    getRemark(line: string): string;
    process(str: string): string;
}
