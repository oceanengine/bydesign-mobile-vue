"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file christmas-tree 圣诞树
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('christmas-tree', function (h, props) {
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
      "d": "M20 14L16 12L24 4L32 12L28 14L36 22L30 24L39 34H27L28 44H20L21 34H9L17 24L12 22L20 14Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M21 34H9L17 24L12 22L20 14L16 12L24 4L32 12L28 14L36 22L30 24L39 34H27M21 34L20 44M21 34H27M20 44H17M20 44H28M31 44H28M27 34L28 44",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;