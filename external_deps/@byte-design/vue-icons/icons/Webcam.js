"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file webcam 网络摄像头
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('webcam', function (h, props) {
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
  }, [h("g", [h("g", {
    "attrs": {
      "transform": "translate(2.000000, 4.000000)",
      "fill-rule": "nonzero",
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M5.825071,25.765534 C9.46166403,30.75644 15.352045,34 22,34 C28.647955,34 34.538336,30.75644 38.174929,25.765534 C41.7910586,29.5076746 44,34.5076 44,40 L0,40 C0,34.5076 2.20894143,29.5076746 5.825071,25.765534 Z",
      "stroke": props.outStrokeColor,
      "fill": props.outFillColor
    }
  }), h("circle", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "fill": props.outFillColor,
      "cx": "22",
      "cy": "13",
      "r": "13"
    }
  }), h("circle", {
    "attrs": {
      "stroke": props.innerStrokeColor,
      "fill": props.innerFillColor,
      "cx": "22",
      "cy": "13",
      "r": "5"
    }
  })])])])]);
});

exports.default = _default;