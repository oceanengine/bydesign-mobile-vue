"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file paper-money 钞票
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('paper-money', function (h, props) {
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
      "transform": "translate(4.000000, 7.000000)",
      "stroke-width": props.strokeWidth
    }
  }, [h("rect", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "x": "0",
      "y": "0",
      "width": "40",
      "height": "34",
      "rx": "5"
    }
  }), h("g", {
    "attrs": {
      "transform": "translate(13.000000, 8.000000)",
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap
    }
  }, [h("polyline", {
    "attrs": {
      "points": "1 0 7 6 13 0"
    }
  }), h("path", {
    "attrs": {
      "d": "M0,8 L14,8"
    }
  }), h("path", {
    "attrs": {
      "d": "M0,14 L14,14"
    }
  }), h("path", {
    "attrs": {
      "d": "M7,8 L7,19"
    }
  })])])])]);
});

exports.default = _default;