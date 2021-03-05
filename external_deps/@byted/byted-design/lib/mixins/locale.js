'use strict';

exports.__esModule = true;

var _locale = require('../locale');

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  computed: {
    t: function t() {
      var _this = this;

      var lang = this.$bytedLang;
      return function (path, options) {
        return _locale2.default.getMessage.call(_this, lang, path, options);
      };
    }
  },
  beforeCreate: function beforeCreate() {
    _locale2.default.install(this.$root.constructor);
  }
};