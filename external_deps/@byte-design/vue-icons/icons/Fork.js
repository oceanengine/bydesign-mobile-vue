"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file fork 分叉
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('fork', function (h, props) {
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
      "transform": "translate(7.000000, 4.000000)",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth
    }
  }, [h("circle", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "30",
      "cy": "4",
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
      "cx": "17",
      "cy": "36",
      "r": "4"
    }
  }), h("path", {
    "attrs": {
      "d": "M4,8 L4,11 C4,18 17,21 17,28 L17,32 L17,28 C17,21 30,18 30,11 L30,8",
      "stroke-linecap": props.strokeLinecap
    }
  })])])]);
});

exports.default = _default;