"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BytedIcon = void 0;

var _map = require("./map");

var options = {
  name: 'byted-icon',
  props: ['type', 'theme', 'size', 'spin', 'fill', 'strokeLinecap', 'strokeLinejoin', 'strokeWidth'],
  inheritAttrs: true,
  render: function render(h) {
    var type = this.type,
        theme = this.theme,
        size = this.size,
        fill = this.fill,
        strokeLinecap = this.strokeLinecap,
        strokeLinejoin = this.strokeLinejoin,
        strokeWidth = this.strokeWidth,
        spin = this.spin;

    if (!(type in _map.IconMap)) {
      throw new Error("".concat(type, " is not a valid icon type name"));
    }

    return h(_map.IconMap[type], {
      props: {
        theme: theme,
        size: size,
        fill: fill,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        strokeWidth: strokeWidth,
        spin: spin
      }
    });
  }
};
var BytedIcon = options;
exports.BytedIcon = BytedIcon;