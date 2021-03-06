"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file balance-two 天平
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('balance-two', function (h, props) {
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
      "d": "M10 28C13.3137 28 16 25.3137 16 22H4C4 25.3137 6.68629 28 10 28Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M16 22C16 25.3137 13.3137 28 10 28C6.68629 28 4 25.3137 4 22M16 22L10 12L4 22M16 22H4",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M38 28C41.3137 28 44 25.3137 44 22H32C32 25.3137 34.6863 28 38 28Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M44 22C44 25.3137 41.3137 28 38 28C34.6863 28 32 25.3137 32 22M44 22L38 12L32 22M44 22H32",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M10 12H24M38 12H24M24 12V6M24 12V42M24 42H38M24 42H10",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;