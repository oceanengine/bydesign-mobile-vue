"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file cube-five 魔方
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('cube-five', function (h, props) {
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
      "d": "M24.0002 4L41.3207 14M24.0002 4L6.67969 14M24.0002 4V17M41.3207 14V34M41.3207 14L30 27M41.3207 14L24.0002 17M41.3207 34L24.0002 44M41.3207 34L30 27M24.0002 44L6.67969 34M24.0002 44L18 27M24.0002 44L30 27M6.67969 34V14M6.67969 34L18 27M6.67969 14L18 27M6.67969 14L24.0002 17M24.0002 17L18 27M24.0002 17L30 27M18 27H30",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;