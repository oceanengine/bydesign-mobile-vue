'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixGray = exports.colorPalette = exports.colorMix = undefined;

var _tinycolor = require('./tinycolor');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colorMix = function colorMix(color, index) {
  var mix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var darkestL = 8;
  var midL = 24;
  var lightL = 56;
  var darkStep = 2;
  var midStep = 4;
  var lightStep = 20;
  var grayL = void 0;
  if (index <= 9) {
    grayL = (darkestL + darkStep * (index - 1)) / 100;
  } else if (index > 9 && index <= 12) {
    grayL = (midL + midStep * (index - 9)) / 100;
  } else if (index > 12) {
    grayL = (lightL + lightStep * (index - 13)) / 100;
  }

  var curGray = (0, _tinycolor2.default)({
    h: 0,
    s: 0,
    l: grayL
  }).toHexString();

  if (index >= 12 || !mix) {
    return curGray;
  } else {
    var mixColor = _tinycolor2.default.mix(color, curGray, 96).toHexString();
    return mixColor;
  }
};

var colorPalette = function colorPalette(color, index) {
  var darkestL = 16;
  var lightestL = 96;
  var hsl = (0, _tinycolor2.default)(color).toHsl();
  var curLight = hsl.l * 100;

  var light = void 0;
  var darkStep = (curLight - darkestL) / 5;
  var lightStep = (lightestL - curLight) / 5;
  if (index === 6) {
    light = hsl.l;
  } else if (index < 6) {
    light = (curLight + (6 - index) * lightStep) / 100;
  } else if (index > 6) {
    light = (curLight - (index - 6) * darkStep) / 100;
  }

  return (0, _tinycolor2.default)({
    h: Math.round(hsl.h),
    s: hsl.s,
    l: light
  }).toHexString();
};

function mixGray(color, gray) {
  return _tinycolor2.default.mix(color, curGray, 96);
}

exports.colorMix = colorMix;
exports.colorPalette = colorPalette;
exports.mixGray = mixGray;