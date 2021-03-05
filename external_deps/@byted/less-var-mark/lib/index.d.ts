import 'less';
import { Options, MapType } from './types';
declare class LessPluginVarMark {
    private minVersion;
    private options;
    private map;
    constructor(options: Options, map?: MapType);
    install(less: LessStatic, pluginManager: Less.PluginManager): void;
    setOptions(options: Options): void;
    printUsage(): void;
    variables2Json(less: string): Options;
    getVariablesMap(options: Options, source: Options): MapType;
}
export = LessPluginVarMark;
