"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file nested-arrows 嵌套箭头
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('nested-arrows', function (h, props) {
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
      "d": "M17 17H30H43V43H17V30V17Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M17 30V17H30V4H4V30H17Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M33 30L28 25M33 30L28 35M33 30H17M30 17H17V30M30 17H43V43H17V30M30 17V4H4V30H17",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;