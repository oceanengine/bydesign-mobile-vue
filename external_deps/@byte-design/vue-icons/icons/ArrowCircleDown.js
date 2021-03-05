"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file arrow-circle-down 下-箭头
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('arrow-circle-down', function (h, props) {
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
  }, [h("g", [h("circle", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "stroke-linejoin": props.strokeLinejoin,
      "cx": "24",
      "cy": "24",
      "r": "20"
    }
  }), h("g", {
    "attrs": {
      "transform": "translate(24.000000, 24.000000) rotate(90.000000) translate(-24.000000, -24.000000) translate(15.000000, 15.000000)",
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M0,9 L18,9"
    }
  }), h("polyline", {
    "attrs": {
      "points": "9 -4.54747351e-13 18 9 9 18"
    }
  })])])])]);
});

exports.default = _default;