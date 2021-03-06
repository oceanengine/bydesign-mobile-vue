"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file align-text-bottom-one 文字底对齐1
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('align-text-bottom-one', function (h, props) {
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
      "fill-rule": "evenodd",
      "stroke-linejoin": props.strokeLinejoin
    }
  }, [h("g", {
    "attrs": {
      "transform": "translate(6.000000, 6.000000)",
      "stroke-width": props.strokeWidth
    }
  }, [h("rect", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "x": "0",
      "y": "0",
      "width": "36",
      "height": "36",
      "rx": "3"
    }
  }), h("path", {
    "attrs": {
      "d": "M28,21 L8,21",
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap
    }
  }), h("path", {
    "attrs": {
      "d": "M21,28 L8,28",
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap
    }
  })])])]);
});

exports.default = _default;