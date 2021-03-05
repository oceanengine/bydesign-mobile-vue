"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file broadcast 广播
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('broadcast', function (h, props) {
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
      "transform": "translate(4.000000, 10.000000)",
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth
    }
  }, [h("ellipse", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "20",
      "cy": "14.0979414",
      "rx": "4.54545455",
      "ry": "4.53125"
    }
  }), h("path", {
    "attrs": {
      "d": "M12,5 C6.66666667,9.97056275 6.66666667,18.0294373 12,23 M28,23 C33.3333333,18.0294373 33.3333333,9.97056275 28,5",
      "stroke-linecap": props.strokeLinecap
    }
  }), h("path", {
    "attrs": {
      "d": "M5.85786438,1.59872116e-14 C-1.95262146,7.78607807 -1.95262146,20.4098048 5.85786438,28.1958829 M34.1421356,28.1958829 C41.9526215,20.4098048 41.9526215,7.78607807 34.1421356,1.24344979e-14",
      "stroke-linecap": props.strokeLinecap
    }
  })])])]);
});

exports.default = _default;