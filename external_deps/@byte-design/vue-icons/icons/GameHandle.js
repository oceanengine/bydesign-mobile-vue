"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file game-handle 游戏手柄
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('game-handle', function (h, props) {
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
      "stroke-width": props.strokeWidth
    }
  }, [h("rect", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "x": "0",
      "y": "14",
      "width": "40",
      "height": "24",
      "rx": "12"
    }
  }), h("path", {
    "attrs": {
      "d": "M12,22 L12,30",
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap
    }
  }), h("path", {
    "attrs": {
      "d": "M8,26 L16,26",
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap
    }
  }), h("polyline", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "stroke-linecap": props.strokeLinecap,
      "points": "20 12 20 5.71428571 28 5.71428571 28 2.84272605e-13"
    }
  }), h("circle", {
    "attrs": {
      "stroke": props.innerStrokeColor,
      "fill": props.innerFillColor,
      "fill-rule": "nonzero",
      "cx": "28",
      "cy": "26",
      "r": "4"
    }
  })])])]);
});

exports.default = _default;