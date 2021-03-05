"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file poker 扑克
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('poker', function (h, props) {
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
      "stroke-width": props.strokeWidth
    }
  }, [h("rect", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "x": "8",
      "y": "0",
      "width": "30",
      "height": "40"
    }
  }), h("polygon", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "stroke-linecap": props.strokeLinecap,
      "points": "0 7.78947368 8 6 8 40"
    }
  }), h("polygon", {
    "attrs": {
      "stroke": props.innerStrokeColor,
      "fill": props.innerFillColor,
      "fill-rule": "nonzero",
      "points": "23 14 18 20 23 26 28 20"
    }
  }), h("path", {
    "attrs": {
      "d": "M14,6 L14,10",
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap
    }
  }), h("path", {
    "attrs": {
      "d": "M32,30 L32,34",
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap
    }
  })])])]);
});

exports.default = _default;