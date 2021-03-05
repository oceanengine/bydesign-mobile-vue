"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file three-triangles 三个三角
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('three-triangles', function (h, props) {
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
      "d": "M17.0001 7L24.0001 19.1244L29.9905 29.5H4.00977L17.0001 7Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M31.0001 7L43.9905 29.5H18.0098L24.0001 19.1244L31.0001 7Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M11.0098 41.5H36.9905L29.9905 29.5H18.0098L11.0098 41.5Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M18.0098 29.5L11.0098 41.5H36.9905L29.9905 29.5M18.0098 29.5H43.9905L31.0001 7L24.0001 19.1244M18.0098 29.5L24.0001 19.1244M18.0098 29.5H29.9905M29.9905 29.5H4.00977L17.0001 7L24.0001 19.1244M29.9905 29.5L24.0001 19.1244",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;