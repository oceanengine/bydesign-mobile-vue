"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file folder-plus 文件夹-添加
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('folder-plus', function (h, props) {
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
  }, [h("g", [h("path", {
    "attrs": {
      "d": "M6,8 L19,8 L24,14 L42,14 C43.1045695,14 44,14.8954305 44,16 L44,40 C44,41.1045695 43.1045695,42 42,42 L6,42 C4.8954305,42 4,41.1045695 4,40 L4,10 C4,8.8954305 4.8954305,8 6,8 Z",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M19.7071068,24.2573593 L28.1923882,32.7426407",
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin,
      "transform": "translate(23.949747, 28.500000) rotate(45.000000) translate(-23.949747, -28.500000) "
    }
  }), h("path", {
    "attrs": {
      "d": "M28.1923882,24.2573593 L19.7071068,32.7426407",
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin,
      "transform": "translate(23.949747, 28.500000) rotate(-135.000000) translate(-23.949747, -28.500000) "
    }
  })])])]);
});

exports.default = _default;