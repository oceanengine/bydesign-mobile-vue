"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file road-cone 路锥
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('road-cone', function (h, props) {
  return h("svg", {
    "attrs": {
      "width": props.size,
      "height": props.size,
      "viewBox": "0 0 48 48",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [h("path", {
    "attrs": {
      "d": "M21 6H27L29.5 15L32 24L34.5 33L37 42H11L13.5 33L16 24L18.5 15L21 6Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M37 42H11M37 42H6H11M37 42H42M37 42L34.5 33M11 42L13.5 33M32 24H16M32 24L34.5 33M32 24L29.5 15M16 24L13.5 33M16 24L18.5 15M13.5 33H34.5M29.5 15L27 6H21L18.5 15M29.5 15H18.5",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;