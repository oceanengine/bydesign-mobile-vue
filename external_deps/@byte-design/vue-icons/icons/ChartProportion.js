"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file chart-proportion 占比图
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('chart-proportion', function (h, props) {
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
      "d": "M16.3446 5.51746C13.9 6.53111 11.7001 8.01562 9.85786 9.85785C6.23858 13.4771 4 18.4771 4 24C4 35.0457 12.9543 44 24 44V44C29.5228 44 34.5228 41.7614 38.1421 38.1421C39.9844 36.2999 41.4689 34.0999 42.4825 31.6554",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M24 24H44C44 12.9543 35.0457 4 24 4C24 4 24 24 24 24Z",
      "fill": props.outFillColor,
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;