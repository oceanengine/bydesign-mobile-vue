"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file folder-download 文件夹-下载
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('folder-download', function (h, props) {
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
  }, [h("g", [h("g", [h("path", {
    "attrs": {
      "d": "M6,7 L19,7 L24,13 L42,13 C43.1045695,13 44,13.8954305 44,15 L44,39 C44,40.1045695 43.1045695,41 42,41 L6,41 C4.8954305,41 4,40.1045695 4,39 L4,9 C4,7.8954305 4.8954305,7 6,7 Z",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "stroke-linejoin": props.strokeLinejoin
    }
  })]), h("g", {
    "attrs": {
      "transform": "translate(16.000000, 20.000000)",
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("polyline", {
    "attrs": {
      "transform": "translate(8.007820, 10.486169) rotate(90.000000) translate(-8.007820, -10.486169) ",
      "points": "4.49398915 3.46632702 11.5216513 10.4939892 4.5096296 17.5060108"
    }
  }), h("path", {
    "attrs": {
      "d": "M1.25,6.75 L14.75,6.75",
      "transform": "translate(8.000000, 6.750000) rotate(90.000000) translate(-8.000000, -6.750000) "
    }
  })])])])]);
});

exports.default = _default;