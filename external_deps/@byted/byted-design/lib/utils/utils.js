'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Any basic methods here .
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Copyright 2017 ByteDance, Inc.
                                                                                                                                                                                                                                                                               * Licensed under MIT
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               */

/* global window module*/


var _asyncValidator = require('async-validator');

var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;

module.exports = {
  /**
   *
   * @param {object} source
   * @return {object}
   * Deep copy of any object .
   *
   *
   *
   *
   */
  copy: function copy(source) {
    var str = void 0;var newobj = void 0;
    try {
      newobj = source.constructor === Array ? [] : {};
    } catch (e) {
      return;
    }
    try {
      str = JSON.stringify(source);
      newobj = JSON.parse(str);
    } catch (e) {
      for (var i in source) {
        if (_typeof(source[i]) === 'object') {
          newobj[i] = this.copy(source[i]);
        } else {
          source[i];
        }
      }
    }
    return newobj;
  },
  // 深克隆
  deepCopy: function deepCopy(source) {
    // 如果source是对象
    if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) == 'object' && source !== null) {
      // 有必要区分数组和普通对象
      var o = Object.prototype.toString.call(source) == '[object Array]' ? [] : {};
      // 遍历source的自有属性
      for (var key in source) {
        // 如果key是source的自有属性
        if (source.hasOwnProperty(key)) {
          o[key] = this.deepCopy(source[key]);
          // arguments.callee调的是当前的deepCopy函数
        }
      }
      return o;
    } else {
      // 如果source是原始类型的值，直接返回
      return source;
    }
  },

  /**
   * 获取 url 参数
   *
   */
  urlParams: function urlParams(href) {
    href = href || window.location.search;
    var data = {};

    var reg = /([^?=&]+)(=([^&]*))?/g;
    if (href) {
      href.replace(reg, function ($0, $1, $2, $3) {
        data[$1] = $3;
      });
    }
    return data;
  },

  Validator: _asyncValidator2.default,

  /**
   * 获取指定长度的随机字符串
   * @param  {} length=0
   */
  getRandomStr: function getRandomStr() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var chars = 'asdfghjklzxcvbnmqwertyuiopASDFGHJKLZXCVBNMQWERTYUIOP1234567890';
    var str = '';
    for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  },
  hasOwn: function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  },

  // 补零
  addZero: function addZero(number) {
    return ('0' + number).substr(-2, 2);
  },

  /**
   * template
   *
   * @param {String} string
   * @param {Array} ...args
   * @return {String}
   */
  template: function template(string) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (args.length === 1 && _typeof(args[0]) === 'object') {
      args = args[0];
    }

    if (!args || !args.hasOwnProperty) {
      args = {};
    }

    if (typeof string !== 'string') {
      return string;
    }

    return string.replace(RE_NARGS, function (match, prefix, i, index) {
      var result = void 0;

      if (string[index - 1] === '{' && string[index + match.length] === '}') {
        return i;
      } else {
        result = Object.prototype.hasOwnProperty.call(args, i) ? args[i] : null;
        if (result === null || result === undefined) {
          return '';
        }

        return result;
      }
    });
  }
};