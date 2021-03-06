"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file ring-one 圆环
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('ring-one', function (h, props) {
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
      "transform": "translate(1.000000, 1.000000)",
      "stroke": props.outStrokeColor,
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("circle", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "23",
      "cy": "6.63636364",
      "r": "3.63636364"
    }
  }), h("circle", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "23",
      "cy": "39.3636364",
      "r": "3.63636364"
    }
  }), h("circle", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "6.63636364",
      "cy": "23",
      "r": "3.63636364"
    }
  }), h("circle", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "39.3636364",
      "cy": "23",
      "r": "3.63636364"
    }
  }), h("path", {
    "attrs": {
      "d": "M31.7339848,9.15964782 C33.7916707,10.460881 35.539119,12.2083293 36.8403522,14.2660152 M36.8403522,31.7339848 C35.539119,33.7916707 33.7916707,35.539119 31.7339848,36.8403522 M14.2660152,36.8403522 C12.2083293,35.539119 10.460881,33.7916707 9.15964782,31.7339848 M9.15964782,14.2660152 C10.460881,12.2083293 12.2083293,10.460881 14.2660152,9.15964782",
      "stroke-linecap": props.strokeLinecap
    }
  })])])])]);
});

exports.default = _default;