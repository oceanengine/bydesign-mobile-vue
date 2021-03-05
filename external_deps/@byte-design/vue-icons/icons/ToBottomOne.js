"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file to-bottom-one 去底部1
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('to-bottom-one', function (h, props) {
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
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  }, [h("g", {
    "attrs": {
      "transform": "translate(12.000000, 14.000000)",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth
    }
  }, [h("polyline", {
    "attrs": {
      "transform": "translate(12.000000, 6.000000) rotate(90.000000) translate(-12.000000, -6.000000) ",
      "points": "6 -6 18 6 6 18"
    }
  }), h("path", {
    "attrs": {
      "d": "M0,20 L24,20"
    }
  })])])]);
});

exports.default = _default;