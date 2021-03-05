"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file file-word 文件-word
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('file-word', function (h, props) {
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
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M2,0 L22,0 L32,10 L32,38 C32,39.1045695 31.1045695,40 30,40 L2,40 C0.8954305,40 -5.67081481e-14,39.1045695 -5.68434189e-14,38 L-5.68434189e-14,2 C-5.69786896e-14,0.8954305 0.8954305,2.02906125e-16 2,0 Z",
      "stroke": props.outStrokeColor,
      "fill": props.outFillColor,
      "fill-rule": "nonzero"
    }
  }), h("polyline", {
    "attrs": {
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap,
      "points": "8.00833333 16 11.0083333 30 16.0083333 20 21.0083333 30 24.0083333 16"
    }
  })])])])]);
});

exports.default = _default;