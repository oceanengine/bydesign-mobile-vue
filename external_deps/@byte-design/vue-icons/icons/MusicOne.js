"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file music-one 音乐
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('music-one', function (h, props) {
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
  }, [h("g", {
    "attrs": {
      "transform": "translate(10.000000, 5.000000)",
      "stroke": props.outStrokeColor,
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M14,1 L14,30",
      "stroke-linecap": props.strokeLinecap
    }
  }), h("path", {
    "attrs": {
      "d": "M5.04,26 L14,26 L14,31.96 C14,34.7435151 11.7435151,37 8.96,37 L5.04,37 C2.25648486,37 1.22906071e-15,34.7435151 0,31.96 L0,31.04 C5.47296129e-16,28.2564849 2.25648486,26 5.04,26 Z",
      "fill": props.outFillColor,
      "fill-rule": "nonzero"
    }
  }), h("polygon", {
    "attrs": {
      "stroke-linecap": props.strokeLinecap,
      "transform": "translate(20.441717, 6.560749) scale(1, -1) translate(-20.441717, -6.560749) ",
      "points": "14 4.05510283 26.8834341 1 26.8834341 9.10811112 14 12.1214978"
    }
  })])])]);
});

exports.default = _default;