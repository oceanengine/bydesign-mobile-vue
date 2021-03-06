"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file clothes-pants-short 短裤
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('clothes-pants-short', function (h, props) {
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
      "d": "M31 12H24H17H8.00001L6 36H21.1579L24 25L26.8421 36H42L40 12H31Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M24 12L20 19.5M24 12H31H40L42 36H26.8421L24 25L21.1579 36H6L8.00001 12H17H24ZM24 12L27 19",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;