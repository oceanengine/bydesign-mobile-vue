"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file rectangular-vertebra 矩形椎体
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('rectangular-vertebra', function (h, props) {
  return h("svg", {
    "attrs": {
      "width": props.size,
      "height": props.size,
      "viewBox": "0 0 48 48",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [h("path", {
    "attrs": {
      "d": "M12 9L24 4L36 9L24 14L12 9Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M4 38L24 32L44 38L24 44L4 38Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M36 9L24 14V32L44 38L36 9Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M24 14L12 9L4 38L24 32V14Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M12 9L24 4L36 9M12 9L24 14M12 9L4 38M24 14L36 9M24 14V44M24 14V32M36 9L44 38M24 32L4 38M24 32L44 38M4 38L24 44M24 44L44 38",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;