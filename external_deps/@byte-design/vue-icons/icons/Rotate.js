"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file rotate 旋转
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('rotate', function (h, props) {
  return h("svg", {
    "attrs": {
      "width": props.size,
      "height": props.size,
      "viewBox": "0 0 48 48",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [h("g", {
    "attrs": {
      "stroke": "none",
      "stroke-width": props.strokeWidth,
      "fill": "none",
      "fill-rule": "evenodd"
    }
  }, [h("g", [h("polygon", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "stroke-linejoin": props.strokeLinejoin,
      "points": "12 24 42 24 42 42 12 42"
    }
  }), h("g", {
    "attrs": {
      "transform": "translate(6.000000, 7.864012)",
      "stroke": props.outStrokeColor,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("polyline", {
    "attrs": {
      "points": "0 0.135987835 0 9.13598783 9 9.13598783"
    }
  })]), h("path", {
    "attrs": {
      "d": "M38.4747483,13.2984546 C35.1956257,8.87049495 29.9330329,6 24,6 C18.1787623,6 13.0029367,8.76333758 9.71271957,13.0498164 L6,17",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })])])]);
});

exports.default = _default;