"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file branch 分支
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('branch', function (h, props) {
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
      "transform": "translate(5.000000, 4.000000)",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth
    }
  }, [h("circle", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "35",
      "cy": "20",
      "r": "4"
    }
  }), h("circle", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "4",
      "cy": "4",
      "r": "4"
    }
  }), h("circle", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "4",
      "cy": "36",
      "r": "4"
    }
  }), h("polyline", {
    "attrs": {
      "stroke-linecap": props.strokeLinecap,
      "points": "4 8 4 32 4 20.0083363 31 20.0083363"
    }
  })])])]);
});

exports.default = _default;