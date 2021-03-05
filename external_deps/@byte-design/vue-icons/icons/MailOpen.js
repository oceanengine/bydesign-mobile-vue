"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file mail-open 已读邮件
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('mail-open', function (h, props) {
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
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M40,14 L40,35.8181818 C40,37.0231667 39.1045695,38 38,38 L2,38 C0.8954305,38 0,37.0231667 0,35.8181818 L0,14 L20,27 L40,14 Z",
      "fill": props.outFillColor,
      "fill-rule": "nonzero"
    }
  }), h("polyline", {
    "attrs": {
      "stroke-linecap": props.strokeLinecap,
      "points": "-3.55271368e-15 13.7839098 20 -2.48689958e-14 40 13.7839098"
    }
  })])])]);
});

exports.default = _default;