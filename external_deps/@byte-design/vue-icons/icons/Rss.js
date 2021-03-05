"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file rss 订阅
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('rss', function (h, props) {
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
      "d": "M8,44 L8,6 C8,4.8954305 8.8954305,4 10,4 L38,4 C39.1045695,4 40,4.8954305 40,6 L40,44 L24,35.7272727 L8,44 Z",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("g", {
    "attrs": {
      "transform": "translate(17.707107, 13.707107)",
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M2,2 L10.4852814,10.4852814",
      "transform": "translate(6.242641, 6.242641) rotate(45.000000) translate(-6.242641, -6.242641) "
    }
  }), h("path", {
    "attrs": {
      "d": "M10.4852814,2 L2,10.4852814",
      "transform": "translate(6.242641, 6.242641) rotate(-135.000000) translate(-6.242641, -6.242641) "
    }
  })])])])]);
});

exports.default = _default;