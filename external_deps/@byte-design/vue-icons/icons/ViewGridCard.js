"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file view-grid-card 卡片查看模式
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('view-grid-card', function (h, props) {
  return h("svg", {
    "attrs": {
      "width": props.size,
      "height": props.size,
      "viewBox": "0 0 48 48",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [h("g", [h("g", [h("rect", {
    "attrs": {
      "x": "4",
      "y": "4",
      "width": "40",
      "height": "40",
      "rx": "3.63636",
      "fill": props.outFillColor,
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("rect", {
    "attrs": {
      "x": "12",
      "y": "12",
      "width": "8",
      "height": "8",
      "fill": props.innerFillColor,
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("rect", {
    "attrs": {
      "x": "28",
      "y": "12",
      "width": "8",
      "height": "8",
      "fill": props.innerFillColor,
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("rect", {
    "attrs": {
      "x": "12",
      "y": "28",
      "width": "8",
      "height": "8",
      "fill": props.innerFillColor,
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("rect", {
    "attrs": {
      "x": "28",
      "y": "28",
      "width": "8",
      "height": "8",
      "fill": props.innerFillColor,
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  })])])]);
});

exports.default = _default;