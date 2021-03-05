"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var postcss_1 = __importDefault(require("postcss"));
var getConfig_1 = __importDefault(require("./getConfig"));
var getValue_1 = __importDefault(require("./getValue"));
var initializer = function (options) {
    var config = {};
    var hasConfig = options !== undefined;
    if (hasConfig) {
        for (var key in options) {
            config[options[key]] = key;
        }
    }
    return function (css) {
        options = options || {};
        css.walk(function (node, index) {
            if (node.type === 'comment') {
                var config_1 = getConfig_1.default(node.text);
                if (config_1 !== null) {
                    var parent_1 = node.parent;
                    var brothers = parent_1.nodes;
                    if (brothers) {
                        var target = brothers[index - 1];
                        if (target.type === 'decl') {
                            target.value = getValue_1.default(config_1, target.value);
                        }
                        parent_1.removeChild(node);
                    }
                }
            }
        });
    };
};
module.exports = postcss_1.default.plugin('postcss-var', initializer);
