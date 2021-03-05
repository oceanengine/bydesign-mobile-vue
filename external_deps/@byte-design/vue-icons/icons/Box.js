"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file box 盒子
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('box', function (h, props) {
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
      "transform": "translate(6.000000, 5.000000)",
      "stroke-width": props.strokeWidth
    }
  }, [h("rect", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "x": "0",
      "y": "7",
      "width": "36",
      "height": "30",
      "rx": "2"
    }
  }), h("path", {
    "attrs": {
      "d": "M22.1923882,14.7656956 L13.7071068,23.250977",
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap,
      "transform": "translate(17.949747, 19.008336) rotate(-135.000000) translate(-17.949747, -19.008336) "
    }
  }), h("polyline", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "stroke-linecap": props.strokeLinecap,
      "points": "1.24344979e-14 8 7 5.86197757e-14 29 5.86197757e-14 36 8"
    }
  })])])]);
});

exports.default = _default;