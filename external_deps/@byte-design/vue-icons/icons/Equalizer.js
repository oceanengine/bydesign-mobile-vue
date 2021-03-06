"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file equalizer 均衡器
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('equalizer', function (h, props) {
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
  }, [h("g", [h("g", {
    "attrs": {
      "transform": "translate(6.000000, 6.000000)",
      "stroke": props.outStrokeColor,
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M5,10 L5,36",
      "stroke-linecap": props.strokeLinecap
    }
  }), h("path", {
    "attrs": {
      "d": "M18,23 L18,36",
      "stroke-linecap": props.strokeLinecap
    }
  }), h("path", {
    "attrs": {
      "d": "M18,13 L18,6.03961325e-14",
      "stroke-linecap": props.strokeLinecap
    }
  }), h("path", {
    "attrs": {
      "d": "M31,-4.79616347e-14 L31,26",
      "stroke-linecap": props.strokeLinecap
    }
  }), h("circle", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "5",
      "cy": "5",
      "r": "5"
    }
  }), h("circle", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "18",
      "cy": "18",
      "r": "5"
    }
  }), h("circle", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "31",
      "cy": "31",
      "r": "5"
    }
  })])])])]);
});

exports.default = _default;