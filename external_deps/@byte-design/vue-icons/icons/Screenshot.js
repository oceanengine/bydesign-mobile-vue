"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file screenshot 截屏
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('screenshot', function (h, props) {
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
  }, [h("g", {
    "attrs": {
      "transform": "translate(0.000000, -0.000000)"
    }
  }, [h("circle", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "stroke-linejoin": props.strokeLinejoin,
      "cx": "10",
      "cy": "36",
      "r": "6"
    }
  }), h("path", {
    "attrs": {
      "d": "M40.0614849,8 C24,28.4331467 15.8047379,38.6805435 14.2426407,40.2426407 C11.8994949,42.5857864 8.10050506,42.5857864 5.75735931,40.2426407",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("circle", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "stroke-linejoin": props.strokeLinejoin,
      "cx": "38",
      "cy": "36",
      "r": "6"
    }
  }), h("path", {
    "attrs": {
      "d": "M42.2426407,40.2426407 C39.8994949,42.5857864 36.1005051,42.5857864 33.7573593,40.2426407 C32.1952621,38.6805435 24,28.4459921 8.00071241,8",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })])])]);
});

exports.default = _default;