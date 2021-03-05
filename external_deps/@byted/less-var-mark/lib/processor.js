"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Processor
 */
require("less");
var RegExpCalc = /\s(\+|\-|\*|\/)\s/;
var RegExpValue = new RegExp(':.*(?=;)');
var Processor = /** @class */ (function () {
    function Processor(options, map) {
        this.gather = [];
        this.options = options;
        this.map = map;
        this.keys = options ? Object.keys(options) : [];
        this.mapKeys = options ? Object.keys(map) : [];
    }
    Processor.prototype.check = function (line) {
        /**
         * 检验字符是否需要处理
         */
        line = line.trim();
        if (line[0] === '/') {
            return false;
        }
        if (line.indexOf('@') <= 0) {
            return false;
        }
        if (!RegExpValue.test(line)) {
            return false;
        }
        return true;
    };
    Processor.prototype.isOperator = function (str) {
        /**
         * 运算符号断定
         */
        return str === '+' || str === '-' || str === '*' || str === '/';
    };
    Processor.prototype.addCalc = function (line) {
        var _this = this;
        /**
         * 增加计算属性运算符号calc()
         * 例如 `padding: 0 calc(width - 2px) height * 2 0;`
         * 转成 `padding: 0 calc(width - 2px) calc(height * 2) 0;`
         */
        if (!RegExpCalc.test(line)) {
            return line;
        }
        var value = line.match(RegExpValue);
        if (value === null) {
            return line;
        }
        var valueStr = value[0].substring(1, value[0].length);
        var next = '';
        var start = -1;
        var arr = valueStr.split(' ');
        arr.forEach(function (item, index) {
            next = arr[index + 1];
            if (!_this.isOperator(item) && next &&
                _this.isOperator(next) && start === -1) {
                start = index;
            }
            if (arr[start] !== undefined &&
                (next === undefined ||
                    (!_this.isOperator(item) && !_this.isOperator(next)))) {
                if (arr[start][0] === '@') {
                    arr[start] = "calc(" + arr[start];
                    arr[index] = arr[index] + ")";
                }
                start = -1;
            }
        });
        return line.replace(valueStr, arr.join(' '));
    };
    Processor.prototype.getRgbValue = function (key) {
        return this.options[key] ? "@" + key : "var(--" + key + ")";
    };
    Processor.prototype.addRgba = function (line) {
        var _this = this;
        /**
         * rgba颜色变量转r g b
         * 例如 `rgba(color, 0.1)`
         * 转成 `rgba(color-r, color-g, colot-b, 0.1)`
         */
        if (line.indexOf('rgb') <= 0) {
            return line;
        }
        var arr = line.split(' ');
        arr.forEach(function (item, index) {
            if (item.match('rgb')) {
                _this.keys.forEach(function (key) {
                    if (item.match("@" + key)) {
                        arr[index] = item.replace("@" + key, _this.getRgbValue(key + "-r") + ", " + _this.getRgbValue(key + "-g") + ", " + _this.getRgbValue(key + "-b"));
                    }
                });
            }
        });
        return arr.join(' ');
    };
    Processor.prototype.getRemark = function (line) {
        var _this = this;
        /**
         * 备注设置
         */
        line = line.trim();
        var value = line.match(RegExpValue);
        if (value === null) {
            return '';
        }
        this.gather = [];
        var arr = value[0].substring(1, value[0].length).trim().split(' ');
        this.keys.forEach(function (key) {
            arr.forEach(function (item, index) {
                if (item[item.length - 1] === ',') {
                    item = item.substring(0, item.length - 1);
                }
                if (item.indexOf(key) > -1 &&
                    item.indexOf(key) + key.length === item.length) {
                    _this.gather.push({
                        key: key, value: _this.options[key].toString(), index: index,
                    });
                }
            });
        });
        this.mapKeys.forEach(function (key) {
            arr.forEach(function (item, index) {
                if (item[item.length - 1] === ',') {
                    item = item.substring(0, item.length - 1);
                }
                if (item.indexOf(key) > -1 &&
                    item.indexOf(key) + key.length === item.length) {
                    _this.gather.push({
                        key: _this.map[key],
                        value: _this.options[_this.map[key]].toString(),
                        index: index,
                    });
                }
            });
        });
        if (this.gather.length) {
            return JSON.stringify({
                data: this.gather
            });
        }
        return '';
    };
    Processor.prototype.process = function (str) {
        var _this = this;
        // skip if keys is empty
        if (!this.keys.length) {
            return str;
        }
        var lines = str.split('\n');
        var remark = '';
        lines.forEach(function (line, index) {
            if (_this.check(line)) {
                line = _this.addCalc(line);
                line = _this.addRgba(line);
                remark = _this.getRemark(line);
                if (remark) {
                    lines[index] = line.replace(';', ";/* " + Processor.markBefore + ": " + remark + " */");
                }
            }
        });
        return lines.join('\n');
    };
    Processor.markBefore = 'ByDesignVarMarkJson';
    return Processor;
}());
exports.default = Processor;
