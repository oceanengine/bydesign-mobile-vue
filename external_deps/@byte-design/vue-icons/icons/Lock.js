"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file lock 锁定
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('lock', function (h, props) {
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
  }, [h("g", [h("g", {
    "attrs": {
      "transform": "translate(6.000000, 4.000000)",
      "stroke": props.outStrokeColor,
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("rect", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "x": "0",
      "y": "18",
      "width": "36",
      "height": "22"
    }
  }), h("path", {
    "attrs": {
      "d": "M8,18 L8,10 C8,4.4771525 12.4771525,8.8817842e-16 18,8.8817842e-16 C23.5228475,8.8817842e-16 28,4.4771525 28,10 L28,18",
      "stroke-linecap": props.strokeLinecap
    }
  })]), h("path", {
    "attrs": {
      "d": "M24,30 L24,36",
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })])])]);
});

exports.default = _default;