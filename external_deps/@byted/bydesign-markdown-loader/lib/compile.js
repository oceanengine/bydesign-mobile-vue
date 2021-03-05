"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var unified_1 = __importDefault(require("unified"));
var remark_parse_1 = __importDefault(require("remark-parse"));
/**
 * 编译 Processor
 */
function createCompiler() {
    return unified_1.default().use(remark_parse_1.default);
}
/**
 * 编译 function
 */
function compile(mdx, options) {
    if (options === void 0) { options = {}; }
    var compiler = createCompiler();
    var config = {
        contents: mdx
    };
    if (options.path) {
        config.path = options.path;
    }
    console.log(compiler);
    var contents = compiler.processSync(config).contents;
    console.log(contents);
    return '';
}
exports.default = compile;
