"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getValue(config, value) {
    var data = config.data;
    if (data.length === 1 && data[0].value === value) {
        return "var(--" + data[0].key + ")";
    }
    var arr = value.split(' ');
    data.forEach(function (config) {
        arr[config.index] = arr[config.index].replace(config.value, "var(--" + config.key + ")");
    });
    return arr.join(' ');
}
exports.default = getValue;
