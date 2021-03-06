"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file clothes-hoodie 卫衣
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('clothes-hoodie', function (h, props) {
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
      "d": "M37 44H11V37H4V22C4 19 6 15.5 9 13L7 8.5L9 4H39L41 8.5L39 13C42 15.5 44 19 44 22V37H37V44Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M37 22V37M11 37V44H37V37M11 37H4V22C4 19 6 15.5 9 13M11 37V22M37 37H44V22C44 19 42 15.5 39 13M9 13C12 10.5 16 10 16 10L24 18M9 13L7 8.5L9 4H39L41 8.5L39 13M39 13C36 10.5 32 10 32 10L24 18M24 18V27",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;