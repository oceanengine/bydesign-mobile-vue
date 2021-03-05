"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file stereo-perspective 立体透视
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('stereo-perspective', function (h, props) {
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
      "d": "M4 14H34V44H4V14Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M14 4H44V34H14V4Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M4 14H34M4 14V44M4 14L14 4M34 14V44M34 14L44 4M34 44H4M34 44L44 34M4 44L14 34M14 4H44M14 4V34M44 4V34M44 34H14",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;