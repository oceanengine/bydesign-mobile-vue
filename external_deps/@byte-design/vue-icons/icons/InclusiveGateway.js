"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file inclusive-gateway 包容网关
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('inclusive-gateway', function (h, props) {
  return h("svg", {
    "attrs": {
      "width": props.size,
      "height": props.size,
      "viewBox": "0 0 48 48",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [h("g", {
    "attrs": {
      "clip-path": "url(#clip0)"
    }
  }, [h("path", {
    "attrs": {
      "d": "M45.2132 23.9998L24 2.78662L2.7868 23.9998L24 45.213L45.2132 23.9998Z",
      "fill": props.outFillColor,
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z",
      "fill": props.innerFillColor,
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  })])]);
});

exports.default = _default;