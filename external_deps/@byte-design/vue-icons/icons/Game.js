"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file game 游戏
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('game', function (h, props) {
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
  }, [h("path", {
    "attrs": {
      "d": "M34.5120527,5.53620381 C30.8466015,2.10248672 25.9188318,0 20.5,0 C9.17816263,0 1.98951966e-13,9.17816263 1.98951966e-13,20.5 C1.98951966e-13,31.8218374 9.17816263,41 20.5,41 C26.1148083,41 31.2023928,38.742687 34.9047551,35.0860595 L20,20 L34.5120527,5.53620381 Z",
      "stroke": props.outStrokeColor,
      "fill": props.outFillColor,
      "fill-rule": "nonzero"
    }
  }), h("circle", {
    "attrs": {
      "stroke": props.outStrokeColor,
      "fill": props.outFillColor,
      "fill-rule": "nonzero",
      "cx": "36",
      "cy": "20",
      "r": "4"
    }
  }), h("path", {
    "attrs": {
      "d": "M13,9 L13,17",
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap
    }
  }), h("path", {
    "attrs": {
      "d": "M9,13 L17,13",
      "stroke": props.innerStrokeColor,
      "stroke-linecap": props.strokeLinecap
    }
  })])])]);
});

exports.default = _default;