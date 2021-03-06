"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file three-hexagons 三个菱形
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('three-hexagons', function (h, props) {
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
      "d": "M14 9L24 3L34 9V21L24 27L14 21V9Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M4 27L14 21L24 27V39L14 45L4 39V27Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M24 27L34 21L44 27V39L34 45L24 39V27Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M14 21V9L24 3L34 9V21M14 21L24 27M14 21L4 27V39L14 45L24 39M24 27L34 21M24 27V39M34 21L44 27V39L34 45L24 39",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;