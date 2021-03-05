"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file goblet-cracking 高脚杯裂开
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('goblet-cracking', function (h, props) {
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
      "d": "M35 16C35 22.5 29.6274 28 23 28C16.3726 28 11 22.6274 11 16C11 9.5 15 4 15 4H23H31C31 4 35 9.5 35 16Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M23 28C29.6274 28 35 22.5 35 16C35 9.5 31 4 31 4H23M23 28C16.3726 28 11 22.6274 11 16C11 9.5 15 4 15 4H23M23 28V44M23 44H33M23 44H13M23 4L21 10L25 11L23 17",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;