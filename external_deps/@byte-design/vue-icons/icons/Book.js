"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file book 书籍
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('book', function (h, props) {
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
      "transform": "translate(8.000000, 4.000000)",
      "stroke": props.outStrokeColor,
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M-5.1159077e-13,36 C-5.1159077e-13,33.3333333 -5.1159077e-13,23.3333333 -5.1159077e-13,6 C-5.1159077e-13,2.6862915 2.8653776,0 6.4,0 L32,0 L32,32 C18.6543018,32 10.1209685,32 6.4,32 C1.36225433,32 -5.1159077e-13,32.6841949 -5.1159077e-13,36 Z",
      "fill": props.outFillColor,
      "fill-rule": "nonzero"
    }
  }), h("path", {
    "attrs": {
      "d": "M4,40 L32,40 L32,32 L4,32 C1.790861,32 0,33.790861 0,36 C0,38.209139 1.790861,40 4,40 Z",
      "stroke-linecap": props.strokeLinecap
    }
  })])])])]);
});

exports.default = _default;