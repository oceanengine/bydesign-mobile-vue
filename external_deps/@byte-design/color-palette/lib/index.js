'use strict';

var _util = require('./util');

var grayScaleLimit = 11;

var presetPrimaryColors = {
  blue: '#338AFF',
  green: '#6ABF40',
  red: '#F65656',
  yellow: '#FFA900',
  cyan: '#10D5D5'
};
var presetPalettes = {};

// 生成色阶
function generate(color) {
  var colors = [];
  for (var i = 0; i < 11; i++) {
    colors.push(i === 5 ? color : (0, _util.colorPalette)(color, i + 1));
  }
  return colors;
}

// 生成预设值
function generatePreset() {
  // 彩色
  Object.keys(presetPrimaryColors).forEach(function (key) {
    presetPalettes[key] = generate(presetPrimaryColors[key]);
  });

  // 浅灰色
  presetPalettes['light-gray'] = ['#FFFFFF', '#FAFAFA', '#F5F5F5', '#F0F0F0', '#EBEBEB', '#E0E0E0', '#D6D6D6', '#C1C1C1', '#999999', '#666666', '#333333'];

  // 深灰色
  presetPalettes['dark-gray'] = [];
  for (var j = 1; j <= grayScaleLimit; j++) {
    var colorValue = (0, _util.colorMix)(presetPrimaryColors['blue'], j);
    presetPalettes['dark-gray'].unshift(colorValue);
  }

  // 深灰色-原色
  presetPalettes['dark-gray-origin'] = [];
  for (var _j = 1; _j <= grayScaleLimit; _j++) {
    var _colorValue = (0, _util.colorMix)(presetPrimaryColors['blue'], _j, false);
    presetPalettes['dark-gray-origin'].unshift(_colorValue);
  }
}

generatePreset();

// 输出colorMap对象
module.exports = { generate: generate, presetPalettes: presetPalettes };