"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * loader entry
 */
var markdown_1 = __importDefault(require("./markdown"));
var transform_1 = __importDefault(require("./transform"));
function loader(content) {
    return "\n    const content = " + JSON.stringify(transform_1.default(markdown_1.default.render(content))) + "\n    export default content\n  ";
}
exports.default = loader;
