"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
require("less");
var processor_1 = __importDefault(require("./processor"));
var RegExpValue = new RegExp(':.*(?=;)');
var RegExpKey = new RegExp('@.*(?=:)');
var LessPluginVarMark = /** @class */ (function () {
    function LessPluginVarMark(options, map) {
        this.minVersion = [3, 0, 0];
        this.options = options;
        this.map = map ? map : {};
    }
    LessPluginVarMark.prototype.install = function (less, pluginManager) {
        pluginManager.addPreProcessor(new processor_1.default(this.options, this.map));
    };
    LessPluginVarMark.prototype.setOptions = function (options) {
        this.options = options;
    };
    LessPluginVarMark.prototype.printUsage = function () {
        console.log('make less var marks');
    };
    LessPluginVarMark.prototype.variables2Json = function (less) {
        /**
         * less的变量文件转变成json格式
         */
        var json = {};
        var lines = less.split('\n');
        lines.forEach(function (line) {
            line = line.trim();
            if (line[0] === '@') {
                var key = line.match(RegExpKey);
                var value = line.match(RegExpValue);
                if (key !== null && value !== null) {
                    var k = key[0].substring(1, key[0].length).trim();
                    var v = value[0].substring(1, value[0].length).trim();
                    json[k] = v;
                }
            }
        });
        return json;
    };
    LessPluginVarMark.prototype.getVariablesMap = function (options, source) {
        var map = {};
        Object.keys(source).forEach(function (key) {
            var value = source[key];
            if (typeof value === 'string' && value[0] === '@') {
                value = value.replace('@', '');
                if (options[value] && !options[key]) {
                    map[key] = value;
                }
            }
        });
        return map;
    };
    return LessPluginVarMark;
}());
module.exports = LessPluginVarMark;
