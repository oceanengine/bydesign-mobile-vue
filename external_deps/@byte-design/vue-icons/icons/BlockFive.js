"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file block-five 俄罗斯方块
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('block-five', function (h, props) {
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
      "d": "M6 30H18V42H6V30Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M18 18H30V30H18V18Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M30 6H42V18H30V6Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M18 30H6V42H18V30ZM18 30H30V18M18 30V18H30M30 18H42V6H30V18Z",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;