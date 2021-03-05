'use strict';

var _bytedMessage;

var _zhCN = require('./lang/zh-CN');

var _zhCN2 = _interopRequireDefault(_zhCN);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _utils = require('@byted/byted-design/lib/utils/utils.js');

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var proto = void 0;
var merged = void 0;

var DEFAULT_LANG = 'zh-CN';

var bytedMessage = (_bytedMessage = {}, _bytedMessage[DEFAULT_LANG] = _zhCN2.default, _bytedMessage);

var TRANSLATION_ABSENT = 'Translation is not registered correctly,\n                            you can call Locale.use() to install it.';

function isUndefined(o) {
  var toString = Object.prototype.toString;
  return toString.call(o) === '[object Undefined]';
}
// https://github.com/TehShrike/deepmerge
var deepMergeOptions = {
  arrayMerge: function arrayMerge(destinationArray, sourceArray, options) {
    return destinationArray;
  }
};

var locale = {
  name: 'locale',
  install: function install(_Vue) {
    if (locale.installed) return;
    proto = _Vue.prototype;
    // When _Vue is a subclass returned by Vue.extend, the util.defineReactive method does not exist on _Vue
    var defineReactive = void 0;
    if (_Vue.util && _Vue.util.defineReactive) {
      defineReactive = _Vue.util.defineReactive;
    } else if (_Vue['super'] && _Vue['super'].util && _Vue['super'].util.defineReactive) {
      defineReactive = _Vue['super'].util.defineReactive;
    } else {
      defineReactive = _vue2.default.util.defineReactive;
    }
    defineReactive(proto, '$bytedLang', DEFAULT_LANG);
    locale.installed = true;
  },
  use: function use(lang, messages) {
    proto['$bytedLang'] = lang;
    locale.register(lang, messages);
  },
  register: function register(lang, messages) {
    if (!(lang in bytedMessage)) {
      bytedMessage[[lang]] = messages;
      return;
    }
    bytedMessage[[lang]] = (0, _deepmerge2.default)(bytedMessage[[lang]], messages, deepMergeOptions);
  },
  i18nHandler: function i18nHandler() {
    var currentMessage = bytedMessage[proto.$bytedLang];
    var vuei18n = Object.getPrototypeOf(this || _vue2.default).$t;
    if (typeof vuei18n === 'function' && !!_vue2.default.locale) {
      if (!merged) {
        merged = true;
        _vue2.default.locale(_vue2.default.config.lang, (0, _deepmerge2.default)(currentMessage, _vue2.default.locale(_vue2.default.config.lang) || {}, { clone: true }, deepMergeOptions));
      }

      for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      return vuei18n.apply(this, arg);
    }
  },
  i18n: function i18n(fn) {
    locale.i18nHandler = fn || locale.i18nHandler;
  },
  getMessage: function getMessage(lang) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var options = arguments[2];

    var currentMessage = bytedMessage[lang];
    if (isUndefined(currentMessage)) {
      console.error(TRANSLATION_ABSENT);
      return '';
    }
    var value = locale.i18nHandler.call(this, path, options);
    if (value !== null && value !== undefined) return value;

    var array = path.split('.');
    var current = currentMessage;
    for (var i = 0, j = array.length; i < j; i++) {
      var property = array[i];
      value = current[property];
      if (i === j - 1) return (0, _utils.template)(value, options);
      if (!value) return '';
      current = value;
    }
    return '';
  }
};

module.exports = locale;