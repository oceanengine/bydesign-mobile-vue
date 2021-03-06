"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file ring 圆环
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('ring', function (h, props) {
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
      "transform": "translate(6.000000, 4.000000)",
      "stroke": props.outStrokeColor,
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("path", {
    "attrs": {
      "d": "M27.1426588,6.31418651 C32.4441015,9.46283747 36,15.2663402 36,21.9047619 C36,22.481604 35.9731507,23.0521418 35.9206398,23.6151846 L35.9206396,23.6151846 M25.0138207,38.5748345 C22.8583526,39.4924933 20.4881316,40 18,40 C15.5118684,40 13.1416474,39.4924933 10.9861793,38.5748345 M0.0793603705,23.6151846 C0.0268493341,23.0521418 0,22.481604 0,21.9047619 C0,15.2663402 3.55589851,9.46283747 8.85734123,6.31418651",
      "stroke-linecap": props.strokeLinecap
    }
  }), h("ellipse", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "18",
      "cy": "3.80952381",
      "rx": "3.78947368",
      "ry": "3.80952381"
    }
  }), h("ellipse", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "3.78947368",
      "cy": "32.3809524",
      "rx": "3.78947368",
      "ry": "3.80952381"
    }
  }), h("ellipse", {
    "attrs": {
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "32.2105263",
      "cy": "32.3809524",
      "rx": "3.78947368",
      "ry": "3.80952381"
    }
  })])])])]);
});

exports.default = _default;