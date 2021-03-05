"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file edit-two 编辑2
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('edit-two', function (h, props) {
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
      "transform": "translate(6.000000, 6.000000)",
      "stroke": props.outStrokeColor,
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M36,20 L36,34 C36,35.1045695 35.1045695,36 34,36 L2,36 C0.8954305,36 1.3527075e-16,35.1045695 0,34 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 L16,0",
      "stroke-linecap": props.strokeLinecap
    }
  }), h("polygon", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "points": "8 20.7198497 8 28 15.3171881 28 36 7.30814278 28.6950519 0"
    }
  })])])])]);
});

exports.default = _default;