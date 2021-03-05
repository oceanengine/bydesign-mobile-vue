"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file bottle 奶瓶
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('bottle', function (h, props) {
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
      "d": "M34 18H14C12.8954 18 12 18.8954 12 20V42C12 43.1046 12.8954 44 14 44H34C35.1046 44 36 43.1046 36 42V20C36 18.8954 35.1046 18 34 18Z",
      "fill": props.outFillColor,
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M19.8943 11H28.1057C29.8329 11 31.365 12.1086 31.9051 13.7492L33.3045 18H14.6953L16.0949 13.7491C16.635 12.1086 18.1671 11 19.8943 11Z",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M21 11V7C21 5.34315 22.3431 4 24 4C25.6569 4 27 5.34315 27 7V11",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth
    }
  }), h("path", {
    "attrs": {
      "d": "M18.5 26V36",
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap
    }
  })]);
});

exports.default = _default;