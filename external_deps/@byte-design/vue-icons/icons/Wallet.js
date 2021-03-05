"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file wallet 钱包
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('wallet', function (h, props) {
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
  }, [h("g", [h("polygon", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin,
      "transform": "translate(27.189532, 11.978915) rotate(60.000000) translate(-27.189532, -11.978915) ",
      "points": "22.5771281 19.9478259 22.5771281 4.01000373 31.8019367 4.01000373"
    }
  }), h("path", {
    "attrs": {
      "d": "M6,12 L42,12 C43.1045695,12 44,12.8954305 44,14 L44,42 C44,43.1045695 43.1045695,44 42,44 L6,44 C4.8954305,44 4,43.1045695 4,42 L4,14 C4,12.8954305 4.8954305,12 6,12 Z",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M35.25,33 L44,33 L44,23 L35.25,23 C32.3505051,23 30,25.2385763 30,28 C30,30.7614237 32.3505051,33 35.25,33 Z",
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "fill": props.innerFillColor,
      "fill-rule": "nonzero",
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M32,28.5 L56,28.5",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "transform": "translate(44.000000, 28.500000) rotate(90.000000) translate(-44.000000, -28.500000) "
    }
  })])])]);
});

exports.default = _default;