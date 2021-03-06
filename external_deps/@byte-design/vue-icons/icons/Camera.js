"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file camera 相机
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('camera', function (h, props) {
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
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "stroke-linejoin": props.strokeLinejoin,
      "points": "15 12 18 6 30 6 33 12"
    }
  }), h("rect", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "stroke-linejoin": props.strokeLinejoin,
      "x": "4",
      "y": "12",
      "width": "40",
      "height": "30",
      "rx": "4"
    }
  }), h("circle", {
    "attrs": {
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "fill": props.innerFillColor,
      "fill-rule": "nonzero",
      "stroke-linejoin": props.strokeLinejoin,
      "cx": "24",
      "cy": "27",
      "r": "8"
    }
  })])])]);
});

exports.default = _default;