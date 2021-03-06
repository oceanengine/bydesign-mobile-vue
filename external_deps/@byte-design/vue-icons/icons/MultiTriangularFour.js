"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file multi-triangular-four 多三角
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('multi-triangular-four', function (h, props) {
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
      "d": "M24 6L34 23.5L44 41H24H4L14 23.5L24 6Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M24 6L34 23.5M24 6L14 23.5M24 6V41M44 41L34 23.5M44 41H24M44 41L14 23.5M4 41H24M4 41L14 23.5M4 41L34 23.5",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;