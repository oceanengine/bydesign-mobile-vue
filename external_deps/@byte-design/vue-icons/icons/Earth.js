"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file earth 地球仪
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('earth', function (h, props) {
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
      "transform": "translate(4.000000, 4.000000)",
      "stroke": props.outStrokeColor,
      "stroke-linecap": props.strokeLinecap,
      "stroke-linejoin": props.strokeLinejoin,
      "stroke-width": props.strokeWidth
    }
  }, [h("circle", {
    "attrs": {
      "cx": "20",
      "cy": "20",
      "r": "20"
    }
  }), h("path", {
    "attrs": {
      "d": "M0,20 L40,20"
    }
  }), h("ellipse", {
    "attrs": {
      "cx": "20",
      "cy": "20",
      "rx": "8",
      "ry": "20"
    }
  }), h("path", {
    "attrs": {
      "d": "M5.85786438,6.14213562 C9.4771525,9.76142375 14.4771525,12 20,12 L20,12 C25.5228475,12 30.5228475,9.76142375 34.1421356,6.14213562"
    }
  }), h("path", {
    "attrs": {
      "d": "M34.1421356,33.8578644 C30.5228475,30.2385763 25.5228475,28 20,28 C14.4771525,28 9.4771525,30.2385763 5.85786438,33.8578644"
    }
  })])])])]);
});

exports.default = _default;