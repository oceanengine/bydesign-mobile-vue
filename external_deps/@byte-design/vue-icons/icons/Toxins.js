"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file toxins 毒素
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('toxins', function (h, props) {
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
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M33.9579 44C33.9579 44 33.9824 40.5292 33.9579 39.76C34.5074 39.4657 35.0408 39.1451 35.5563 38.8C36.5925 38.1064 37.5566 37.3135 38.435 36.435C41.8734 32.9967 44 28.2467 44 23C44 12.5066 35.4934 4 25 4C14.5066 4 6 12.5066 6 23C6 28.2467 8.12665 32.9967 11.565 36.435C12.4434 37.3135 13.4075 38.1064 14.4437 38.8C14.9592 39.1451 15.4547 39.4657 16.0043 39.76C16.0043 40.0082 16.0043 41.4215 16.0043 44C27.9733 44 33.9579 44 33.9579 44Z",
      "fill": props.outFillColor,
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M18 27C20.2091 27 22 25.2091 22 23L18 19C15.7909 19 14 20.7909 14 23C14 25.2091 15.7909 27 18 27Z",
      "fill": props.innerFillColor,
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M32 27C29.7909 27 28 25.2091 28 23L32 19C34.2091 19 36 20.7909 36 23C36 25.2091 34.2091 27 32 27Z",
      "fill": props.innerFillColor,
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M22 34L24.9379 31L28 33.8962",
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;