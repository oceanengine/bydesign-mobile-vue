'use strict';

exports.__esModule = true;
exports.getMeasureTextWidth = getMeasureTextWidth;

var DEFAULT_CANVAS = typeof document !== 'undefined' ? document.createElement('canvas') : null;
var DEFAULT_FONT_WEIGHT = 400;
var DEFAULT_FONT_STYLE = 'normal';
var DEFAULT_FONT_FAMILY = 'PingFang SC';
var DEFAUTL_FONT_SIZE = '14px';

function getMeasureTextWidth() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!DEFAULT_CANVAS) return 0;

  var _config$fontWeight = config.fontWeight,
      fontWeight = _config$fontWeight === undefined ? DEFAULT_FONT_WEIGHT : _config$fontWeight,
      _config$fontSize = config.fontSize,
      fontSize = _config$fontSize === undefined ? DEFAUTL_FONT_SIZE : _config$fontSize,
      _config$fontStyle = config.fontStyle,
      fontStyle = _config$fontStyle === undefined ? DEFAULT_FONT_STYLE : _config$fontStyle,
      _config$fontFamily = config.fontFamily,
      fontFamily = _config$fontFamily === undefined ? DEFAULT_FONT_FAMILY : _config$fontFamily,
      _config$canvas = config.canvas,
      canvas = _config$canvas === undefined ? DEFAULT_CANVAS : _config$canvas;

  var context = canvas.getContext('2d');
  context.font = fontWeight + ' ' + fontStyle + ' ' + fontSize + ' ' + fontFamily;
  var width = context.measureText(text).width;
  return width;
};