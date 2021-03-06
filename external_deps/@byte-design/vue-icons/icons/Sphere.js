"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file sphere 圆球
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('sphere', function (h, props) {
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
      "d": "M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M32 24C32 35.0457 28.4183 44 24 44C19.5817 44 16 35.0457 16 24C16 12.9543 19.5817 4 24 4C28.4183 4 32 12.9543 32 24Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M44 24C44 28.4183 35.0457 32 24 32C12.9543 32 4 28.4183 4 24C4 19.5817 12.9543 16 24 16C35.0457 16 44 19.5817 44 24Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M44 24C44 35.0457 35.0457 44 24 44M44 24C44 12.9543 35.0457 4 24 4M44 24C44 28.4183 35.0457 32 24 32C12.9543 32 4 28.4183 4 24M44 24C44 19.5817 35.0457 16 24 16C12.9543 16 4 19.5817 4 24M24 44C12.9543 44 4 35.0457 4 24M24 44C28.4183 44 32 35.0457 32 24C32 12.9543 28.4183 4 24 4M24 44C19.5817 44 16 35.0457 16 24C16 12.9543 19.5817 4 24 4M4 24C4 12.9543 12.9543 4 24 4",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;