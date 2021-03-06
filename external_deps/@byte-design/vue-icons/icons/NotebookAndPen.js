"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file notebook-and-pen 笔记本和笔
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('notebook-and-pen', function (h, props) {
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
      "d": "M4 42V6H12H30V42H12H4Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M12 42H30V6H12M12 42H4V6H12M12 42V6",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M36 6H44V12V38L40 42L36 38V12V6Z",
      "fill": props.outFillColor
    }
  }), h("path", {
    "attrs": {
      "d": "M36 12V38L40 42L44 38V12M36 12V6H44V12M36 12H44",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;