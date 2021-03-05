"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file headset-one 耳机
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('headset-one', function (h, props) {
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
      "transform": "translate(4.000000, 4.000000)",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M32,28 L32,28 C36.418278,28 40,24.418278 40,20 C40,15.581722 36.418278,12 32,12",
      "fill": props.outFillColor,
      "fill-rule": "nonzero"
    }
  }), h("path", {
    "attrs": {
      "d": "M8,12 C3.581722,12 0,15.581722 0,20 C0,24.418278 3.581722,28 8,28 L8,28",
      "fill": props.outFillColor,
      "fill-rule": "nonzero"
    }
  }), h("path", {
    "attrs": {
      "d": "M8,28 L8,27.5 L8,25 L8,20 L8,12 C8,5.372583 13.372583,0 20,0 C26.627417,0 32,5.372583 32,12 L32,28 C32,34.627417 26.627417,40 20,40",
      "stroke-linecap": props.strokeLinecap
    }
  })])])]);
});

exports.default = _default;