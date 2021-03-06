"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file tips 提示
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('tips', function (h, props) {
  return h("svg", {
    "attrs": {
      "width": props.size,
      "height": props.size,
      "viewBox": "0 0 48 48",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [h("g", [h("g", [h("path", {
    "attrs": {
      "d": "M40 20C40 26.8077 35.7484 32.6224 29.7555 34.9336H24H18.2445C12.2516 32.6224 8 26.8077 8 20C8 11.1634 15.1634 4 24 4C32.8366 4 40 11.1634 40 20Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M29.7555 34.9336L29.0764 43.083C29.0332 43.6013 28.6 44 28.0799 44H19.9201C19.4 44 18.9668 43.6013 18.9236 43.083L18.2445 34.9336M29.7555 34.9336C35.7484 32.6224 40 26.8077 40 20C40 11.1634 32.8366 4 24 4C15.1634 4 8 11.1634 8 20C8 26.8077 12.2516 32.6224 18.2445 34.9336M29.7555 34.9336H24H18.2445",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]), h("path", {
    "attrs": {
      "d": "M18 17V23L24 20L30 23V17",
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })])]);
});

exports.default = _default;