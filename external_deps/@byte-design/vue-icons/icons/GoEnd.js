"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file go-end 下一曲
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('go-end', function (h, props) {
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
      "transform": "translate(14.000000, 12.000000)",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth
    }
  }, [h("polyline", {
    "attrs": {
      "points": "0 0 12 12 0 24"
    }
  }), h("path", {
    "attrs": {
      "d": "M20,0 L20,24"
    }
  })])])]);
});

exports.default = _default;