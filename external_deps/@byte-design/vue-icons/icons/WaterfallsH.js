"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file waterfalls-h 瀑布流横向
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('waterfalls-h', function (h, props) {
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
      "transform": "translate(6.000000, 6.000000)",
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth
    }
  }, [h("rect", {
    "attrs": {
      "x": "0",
      "y": "0",
      "width": "14",
      "height": "11"
    }
  }), h("rect", {
    "attrs": {
      "x": "22",
      "y": "25",
      "width": "14",
      "height": "11"
    }
  }), h("rect", {
    "attrs": {
      "x": "22",
      "y": "0",
      "width": "14",
      "height": "17"
    }
  }), h("rect", {
    "attrs": {
      "x": "0",
      "y": "19",
      "width": "14",
      "height": "17"
    }
  })])])]);
});

exports.default = _default;