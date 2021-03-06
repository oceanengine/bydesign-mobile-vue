"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file sun 太阳
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('sun', function (h, props) {
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
      "transform": "translate(3.000000, 3.000000)",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M21,0 L21,3.15 M35.8492424,6.1507576 L33.621856,8.37814396 M42,21 L38.85,21 M35.8492424,35.8492424 L33.621856,33.621856 M21,42 L21,38.85 M6.1507576,35.8492424 L8.37814396,33.621856 M-9.64409354e-17,21 L3.15,21 M6.1507576,6.1507576 L8.37814396,8.37814396",
      "stroke-linecap": props.strokeLinecap
    }
  }), h("circle", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "21",
      "cy": "21",
      "r": "12"
    }
  })])])]);
});

exports.default = _default;