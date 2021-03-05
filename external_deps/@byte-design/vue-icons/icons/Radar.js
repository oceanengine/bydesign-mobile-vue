"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file radar 雷达
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('radar', function (h, props) {
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
      "stroke-linecap": props.strokeLinecap
    }
  }, [h("g", {
    "attrs": {
      "transform": "translate(4.000000, 4.000000)",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth
    }
  }, [h("circle", {
    "attrs": {
      "stroke-linejoin": props.strokeLinejoin,
      "cx": "20",
      "cy": "20",
      "r": "20"
    }
  }), h("circle", {
    "attrs": {
      "stroke-linejoin": props.strokeLinejoin,
      "cx": "20",
      "cy": "20",
      "r": "10"
    }
  }), h("path", {
    "attrs": {
      "d": "M20,0 L20,40",
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M7.00416814,13.0041681 L6.99583186,27.0041681",
      "transform": "translate(7.000000, 20.004168) rotate(-90.000000) translate(-7.000000, -20.004168) "
    }
  }), h("path", {
    "attrs": {
      "d": "M20,0.00833628333 L20,40.0083363",
      "stroke-linejoin": props.strokeLinejoin,
      "transform": "translate(20.000000, 20.008336) rotate(-90.000000) translate(-20.000000, -20.008336) "
    }
  })])])]);
});

exports.default = _default;