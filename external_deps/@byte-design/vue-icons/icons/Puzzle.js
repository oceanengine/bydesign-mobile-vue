"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file puzzle 拼图
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('puzzle', function (h, props) {
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
      "fill-rule": "evenodd",
      "stroke-linejoin": props.strokeLinejoin
    }
  }, [h("g", {
    "attrs": {
      "transform": "translate(4.000000, 4.000000)",
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M0,20 L0,8 L9,8 L9,6 C9,2.6862915 11.6862915,0 15,0 C18.3137085,0 21,2.6862915 21,6 L21,8 L30,8 L30,20 L34,20 C37.3137085,20 40,22.6862915 40,26 C40,29.3137085 37.3137085,32 34,32 L30,32 L30,40 L0,40 L0,32 L4,32 C7.3137085,32 10,29.3137085 10,26 C10,22.6862915 7.3137085,20 4,20 L0,20 Z"
    }
  })])])]);
});

exports.default = _default;