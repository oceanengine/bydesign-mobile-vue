"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file undo 撤销
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('undo', function (h, props) {
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
      "fill-rule": "evenodd"
    }
  }, [h("g", [h("path", {
    "attrs": {
      "d": "M11.2720779,36.7279221 C14.5294373,39.9852814 19.0294373,42 24,42 C33.9411255,42 42,33.9411255 42,24 C42,14.0588745 33.9411255,6 24,6 C19.0294373,6 14.5294373,8.01471863 11.2720779,11.2720779 C10.1667415,12.3774144 8.4093822,14.2867217 6,17",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("polyline", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin,
      "points": "6 9 6 17 14 17"
    }
  })])])]);
});

exports.default = _default;