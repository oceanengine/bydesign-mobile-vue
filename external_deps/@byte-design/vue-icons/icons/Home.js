"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file home 首页
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('home', function (h, props) {
  return h("svg", {
    "attrs": {
      "width": props.size,
      "height": props.size,
      "viewBox": "0 0 48 48",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [h("g", [h("g", [h("path", {
    "attrs": {
      "d": "M24 6L4 22L9 18V42H19H29H39V18L44 22L24 6Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M19 42H9V18L4 22L24 6L44 22L39 18V42H29M19 42V29H29V42M19 42H29",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  })])])]);
});

exports.default = _default;