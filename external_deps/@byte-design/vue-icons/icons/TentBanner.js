"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file tent-banner 帐篷旗帜
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('tent-banner', function (h, props) {
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
      "d": "M23 17L27.9231 25L39 43H7L18.0769 25L23 17Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M23 17V12M23 17L18.0769 25M23 17L27.9231 25M23 12V4H35L32 8L35 12H23ZM18.0769 25L7 43H39L27.9231 25M18.0769 25L23 28L27.9231 25",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;