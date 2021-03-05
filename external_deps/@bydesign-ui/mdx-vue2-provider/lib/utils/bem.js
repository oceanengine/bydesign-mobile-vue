"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * bem helper
 * bem()                     // 'button'
 * bem('text')               // 'button__text'
 * bem('text', 'color')      // 'button__text button__text--color'
 * bem({ disabled })         // 'button button--disabled'
 * bem('text', { disabled }) // 'button__text button__text--disabled'
 * bem(['primary', 'large']) // 'button button--primary button--large'
 */
var const_1 = require("../const");
var ELEMENT = '__';
var MODS = '--';
function join(name, el, symbol) {
    return el ? name + symbol + el : name;
}
function prefix(name, mods) {
    if (typeof mods === 'string') {
        return join(name, mods, MODS);
    }
    if (Array.isArray(mods)) {
        return mods.map(function (item) { return prefix(name, item); }).join(' ');
    }
    var ret = [];
    if (mods) {
        Object.keys(mods).forEach(function (key) {
            if (mods[key]) {
                ret.push(name + MODS + key);
            }
        });
    }
    return ret.join(' ');
}
function createBEM(name) {
    name = const_1.PREFIX + "-" + name;
    return function (el, mods) {
        if (el && typeof el !== 'string') {
            mods = el;
            el = '';
        }
        el = join(name, el, ELEMENT);
        if (mods) {
            return (el + " " + prefix(el, mods)).trim();
        }
        else {
            return el;
        }
    };
}
exports.default = createBEM;
