"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file pills 药丸
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('pills', function (h, props) {
  return h("svg", {
    "attrs": {
      "width": props.size,
      "height": props.size,
      "viewBox": "0 0 48 48",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [h("path", {
    "attrs": {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M9.97328 22.0623L17.2507 15.9558L24.5281 9.84929C28.9704 6.12177 35.5933 6.7012 39.3209 11.1435C43.0484 15.5858 42.4689 22.2087 38.0267 25.9362L30.7492 32.0427L23.4718 38.1492C19.0295 41.8767 12.4066 41.2973 8.67908 36.855C4.95156 32.4127 5.53099 25.7898 9.97328 22.0623Z",
      "fill": props.outFillColor,
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth
    }
  }), h("path", {
    "attrs": {
      "d": "M19.6889 21.8613L25.4266 28.6992",
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;