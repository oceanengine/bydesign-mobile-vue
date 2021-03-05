"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file birthday-cake 生日蛋糕
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('birthday-cake', function (h, props) {
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
      "d": "M8 24H16H24H32H40V34V40H8V34V24Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M40 40H8M40 40H4H8M40 40H44M40 40V34M8 40V34M40 34V24H32M40 34L36 32L32 34L28 32L24 34L20 32L16 34L12 32L8 34M8 34V24H16M24 24V15M24 24H32M24 24H16M32 24V15M16 24V15M16 10V8M24 10V8M32 10V8",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;