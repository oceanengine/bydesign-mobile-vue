"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file gift 礼物
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('gift', function (h, props) {
  return h("svg", {
    "attrs": {
      "width": props.size,
      "height": props.size,
      "viewBox": "0 0 48 48",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [h("g", [h("g", [h("rect", {
    "attrs": {
      "x": "4",
      "y": "12",
      "width": "40",
      "height": "8",
      "fill": props.outFillColor,
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("g", [h("path", {
    "attrs": {
      "d": "M7 20H24H41V44H24H7V20Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M24 44H41V20H24M24 44H7V20H24M24 44V20",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]), h("path", {
    "attrs": {
      "d": "M16 4L24 12L32 4",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })])])]);
});

exports.default = _default;