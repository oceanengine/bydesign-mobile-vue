"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file hexagonal 六边立体
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('hexagonal', function (h, props) {
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
      "d": "M24.0002 4L41.3207 14V34L24.0002 44L6.67969 34V14L24.0002 4Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M24.0002 4L41.3207 14M24.0002 4L6.67969 14M24.0002 4L41.3207 34M24.0002 4L6.67969 34M41.3207 14V34M41.3207 14H6.67969M41.3207 14L24.0002 44M41.3207 34L24.0002 44M41.3207 34H6.67969M24.0002 44L6.67969 34M24.0002 44L6.67969 14M6.67969 34V14",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;