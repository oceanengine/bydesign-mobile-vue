"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = setConfig;
exports.getConfig = getConfig;
exports.DEFAULT_ICON_CONFIGS = void 0;
var DEFAULT_ICON_CONFIGS = {
  prefix: 'byted',
  theme: 'outline',
  strokeWidth: 4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  outline: {
    color: 'currentColor',
    backgroundColor: 'transparent'
  },
  filled: {
    color: 'currentColor',
    backgroundColor: '#FFF'
  },
  twoTone: {
    color: 'currentColor',
    backgroundColor: '#2F88FF'
  },
  multiColor: {
    color: 'currentColor',
    backgroundColor: '#2F88FF',
    innerColor: '#FFF',
    innerBackgroundColor: '#43CCF8'
  }
};
exports.DEFAULT_ICON_CONFIGS = DEFAULT_ICON_CONFIGS;
var currentConfig = DEFAULT_ICON_CONFIGS;

function setConfig(config) {
  currentConfig = config;
}

function getConfig() {
  return currentConfig;
}