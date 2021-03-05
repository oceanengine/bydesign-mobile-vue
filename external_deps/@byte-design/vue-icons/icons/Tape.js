"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file tape 磁带
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('tape', function (h, props) {
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
      "transform": "translate(4.000000, 9.000000)",
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M2,1 L6,1 L34,1 L38,1 C39.1045695,1 40,1.8954305 40,3 L40,27 C40,28.1045695 39.1045695,29 38,29 L2,29 C0.8954305,29 1.3527075e-16,28.1045695 0,27 L0,3 C-1.3527075e-16,1.8954305 0.8954305,1 2,1 Z",
      "stroke": props.outStrokeColor,
      "fill": props.outFillColor,
      "fill-rule": "nonzero"
    }
  }), h("polygon", {
    "attrs": {
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap,
      "points": "6 1 11 7 20 7 29 7 34 1"
    }
  }), h("polyline", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "stroke-linecap": props.strokeLinecap,
      "points": "2 1 2 1 6 1 34 1 38 1"
    }
  }), h("circle", {
    "attrs": {
      "stroke": props.innerStrokeColor,
      "fill": props.innerFillColor,
      "fill-rule": "nonzero",
      "cx": "29",
      "cy": "18",
      "r": "4"
    }
  }), h("circle", {
    "attrs": {
      "stroke": props.innerStrokeColor,
      "fill": props.innerFillColor,
      "fill-rule": "nonzero",
      "cx": "11",
      "cy": "18",
      "r": "4"
    }
  })])])]);
});

exports.default = _default;