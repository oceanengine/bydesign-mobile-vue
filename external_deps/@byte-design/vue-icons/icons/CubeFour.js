"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file cube-four 魔方
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('cube-four', function (h, props) {
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
      "d": "M24.0002 4L32.6605 9L41.3207 14V24V34L32.6605 39L24.0002 44L15.3399 39L6.67969 34V24V14L15.3399 9L24.0002 4Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M24.0002 24V11M24.0002 24L34.3925 30M24.0002 24L13.6079 30M24.0002 4L15.3399 9L6.67969 14V24V34L15.3399 39L24.0002 44L32.6605 39L41.3207 34V24V14L32.6605 9L24.0002 4Z",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M32.4438 15.875L35.2584 17.5V20.75M26.8146 35.375L24 37L21.1854 35.375M12.7417 20.75V17.5L15.5563 15.875",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;