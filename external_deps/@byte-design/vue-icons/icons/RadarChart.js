"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtime = require("../runtime");

/**
 * @file radar-chart 雷达图
 * @author Auto Generated by BD
 */

/* tslint:disable: max-line-length*/

/* eslint-disable max-len */
var _default = (0, _runtime.IconWrapper)('radar-chart', function (h, props) {
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
      "d": "M24 3L34.9504 10.928L45.8743 18.8926L41.7182 31.757L37.5191 44.6074L24 44.63L10.4809 44.6074L6.28182 31.757L2.1257 18.8926L13.0496 10.928L24 3Z",
      "fill": props.outFillColor,
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M24 3L24.0135 25.9814L45.8743 18.8926L24.0219 26.0071L37.5191 44.6074L24 26.023L10.4809 44.6074L23.9781 26.0071L2.1257 18.8926L23.9865 25.9814L24 3Z",
      "fill": props.outFillColor,
      "stroke": props.outStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  }), h("path", {
    "attrs": {
      "d": "M24 13L30.1894 17.4811L36.3637 21.9828L34.0146 29.2539L31.6412 36.5172L24 36.53L16.3588 36.5172L13.9854 29.2539L11.6363 21.9828L17.8106 17.4811L24 13Z",
      "stroke": props.innerStrokeColor,
      "stroke-width": props.strokeWidth,
      "stroke-linejoin": props.strokeLinejoin
    }
  })]);
});

exports.default = _default;