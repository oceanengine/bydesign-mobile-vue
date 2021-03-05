"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 代码高亮处理函数
 */
var highlight_js_1 = __importDefault(require("highlight.js"));
var const_1 = require("./const");
function wrapLang(str, lang) {
    return "<pre class=\"" + const_1.PREFIX + "-" + lang + "\"><code>" + str + "</code></pre>";
}
var customLangRegExp = /(topic|desc)?$/;
function wrapCustom(str, lang) {
    return "<pre class=\"" + const_1.PREFIX + "-" + lang + "\">" + str + "</pre>";
}
function highlight(str, lang) {
    if (lang) {
        if (highlight_js_1.default.getLanguage(lang)) {
            return wrapLang(highlight_js_1.default.highlight(lang, str, true).value, lang);
        }
        if (customLangRegExp.test(lang)) {
            return wrapCustom(str, lang);
        }
        return str;
    }
    return str;
}
exports.default = highlight;
