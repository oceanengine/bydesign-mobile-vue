"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file config 配置
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('config', function (h, props) {
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
      "transform": "translate(4.000000, 4.000000)",
      "fill-rule": "nonzero",
      "stroke-width": props.strokeWidth
    }
  }, [h("polygon", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "fill": props.outFillColor,
      "points": "20 1.74860126e-15 14 6 6 6 6 14 1.74860126e-15 20 6 26 6 34 14 34 20 40 26 34 34 34 34 26 40 20 34 14 34 6 26 6"
    }
  }), h("circle", {
    "attrs": {
      "stroke": props.innerStrokeColor,
      "fill": props.innerFillColor,
      "cx": "20",
      "cy": "20",
      "r": "6"
    }
  })])])]);
});

exports.default = _default;