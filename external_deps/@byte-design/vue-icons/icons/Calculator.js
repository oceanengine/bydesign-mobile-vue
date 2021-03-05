"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file calculator 计算器
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('calculator', function (h, props) {
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
  }, [h("g", [h("rect", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "stroke-linejoin": props.strokeLinejoin,
      "x": "6",
      "y": "4",
      "width": "36",
      "height": "40",
      "rx": "2"
    }
  }), h("rect", {
    "attrs": {
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "fill": props.innerFillColor,
      "fill-rule": "nonzero",
      "stroke-linejoin": props.strokeLinejoin,
      "x": "12",
      "y": "10",
      "width": "24",
      "height": "9"
    }
  }), h("g", {
    "attrs": {
      "transform": "translate(11.000000, 27.000000)",
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M-0.449747468,4.5 L9.44974747,4.5",
      "transform": "translate(4.500000, 4.500000) rotate(45.000000) translate(-4.500000, -4.500000) "
    }
  }), h("path", {
    "attrs": {
      "d": "M-0.449747468,4.5 L9.44974747,4.5",
      "transform": "translate(4.500000, 4.500000) scale(-1, 1) rotate(45.000000) translate(-4.500000, -4.500000) "
    }
  })]), h("path", {
    "attrs": {
      "d": "M28,35 L36,35",
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M28,29 L36,29",
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })])])]);
});

exports.default = _default;