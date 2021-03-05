"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file ghost 幽灵
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('ghost', function (h, props) {
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
  }, [h("path", {
    "attrs": {
      "d": "M8,44 L12,40 L16,44 L20,38 L24,44 L28,38 L32,44 L36,40 L40,44 L40,20 C40,11.163444 32.836556,4 24,4 C15.163444,4 8,11.163444 8,20 L8,44 Z",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "fill": props.outFillColor,
      "fill-rule": "nonzero"
    }
  }), h("path", {
    "attrs": {
      "d": "M19,20 L21,20",
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap
    }
  }), h("path", {
    "attrs": {
      "d": "M31,20 L33,20",
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap
    }
  })])]);
});

exports.default = _default;