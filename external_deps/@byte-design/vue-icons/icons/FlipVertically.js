"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file flip-vertically 垂直翻转
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('flip-vertically', function (h, props) {
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
  }, [h("g", [h("g", {
    "attrs": {
      "transform": "translate(24.000000, 24.000000) rotate(90.000000) translate(-24.000000, -24.000000) translate(4.000000, 6.000000)",
      "stroke": props.outStrokeColor,
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M20,0 L20,36",
      "stroke-linecap": props.strokeLinecap
    }
  }), h("polygon", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "points": "0 28 12 6 12 28"
    }
  }), h("polygon", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "points": "40 28 28 28 28 6"
    }
  })])])])]);
});

exports.default = _default;