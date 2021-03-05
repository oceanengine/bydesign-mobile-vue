"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 处理特殊文件中特殊标记
 */
var const_1 = require("./const");
// mark
var markReg = new RegExp(/`/g);
function transform(content) {
    var num = 0;
    var domStr = '';
    while (markReg.test(content)) {
        domStr = (num % 2 === 0) ? "<code class=\"" + const_1.PREFIX + "-mark\">" : '</code>';
        num++;
        content = content.replace('`', domStr);
    }
    return content;
}
exports.default = transform;
