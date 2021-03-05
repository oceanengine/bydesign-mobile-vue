"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconWrapper = IconWrapper;

var _config = require("./config");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function IconWrapper(type, _render) {
  var options = {
    name: 'byted-' + type,
    props: ['theme', 'size', 'spin', 'fill', 'strokeLinecap', 'strokeLinejoin', 'strokeWidth'],
    computed: {
      wrapperClass: function wrapperClass() {
        var _ref;

        var prefix = (0, _config.getConfig)().prefix;
        var spin = this.spin;
        return _ref = {}, _defineProperty(_ref, "".concat(prefix, "-icon"), true), _defineProperty(_ref, "".concat(prefix, "-icon-").concat(type), true), _defineProperty(_ref, "".concat(prefix, "-icon-spin"), spin && type !== 'loading'), _ref;
      }
    },
    inheritAttrs: false,
    render: function render(h) {
      var _cls;

      var icon = (0, _config.getConfig)();
      var _this$theme = this.theme,
          theme = _this$theme === void 0 ? icon.theme : _this$theme,
          _this$size = this.size,
          size = _this$size === void 0 ? '1em' : _this$size,
          _this$fill = this.fill,
          fill = _this$fill === void 0 ? 'currentColor' : _this$fill,
          _this$strokeLinecap = this.strokeLinecap,
          strokeLinecap = _this$strokeLinecap === void 0 ? icon.strokeLinecap : _this$strokeLinecap,
          _this$strokeLinejoin = this.strokeLinejoin,
          strokeLinejoin = _this$strokeLinejoin === void 0 ? icon.strokeLinejoin : _this$strokeLinejoin,
          _this$strokeWidth = this.strokeWidth,
          strokeWidth = _this$strokeWidth === void 0 ? icon.strokeWidth : _this$strokeWidth,
          _this$spin = this.spin,
          spin = _this$spin === void 0 ? false : _this$spin;

      var update = function update() {
        var colors = Array.isArray(fill) ? fill : [fill];

        switch (theme) {
          case 'outline':
            return {
              size: size,
              strokeLinecap: strokeLinecap,
              strokeLinejoin: strokeLinejoin,
              strokeWidth: strokeWidth,
              outStrokeColor: colors[0] || icon.outline.color,
              outFillColor: 'transparent',
              innerStrokeColor: colors[0] || icon.outline.color,
              innerFillColor: 'transparent'
            };

          case 'filled':
            return {
              size: size,
              strokeLinecap: strokeLinecap,
              strokeLinejoin: strokeLinejoin,
              strokeWidth: strokeWidth,
              outStrokeColor: colors[0] || icon.filled.color,
              outFillColor: colors[0] || icon.filled.color,
              innerStrokeColor: colors[1] || icon.filled.backgroundColor,
              innerFillColor: colors[1] || icon.filled.backgroundColor
            };

          case 'two-tone':
            return {
              size: size,
              strokeLinecap: strokeLinecap,
              strokeLinejoin: strokeLinejoin,
              strokeWidth: strokeWidth,
              outStrokeColor: colors[0] || icon.twoTone.color,
              outFillColor: colors[1] || icon.twoTone.backgroundColor,
              innerStrokeColor: colors[0] || icon.twoTone.color,
              innerFillColor: colors[1] || icon.twoTone.backgroundColor
            };

          default:
            return {
              size: size,
              strokeLinecap: strokeLinecap,
              strokeLinejoin: strokeLinejoin,
              strokeWidth: strokeWidth,
              outStrokeColor: colors[0] || icon.multiColor.color,
              outFillColor: colors[1] || icon.multiColor.backgroundColor,
              innerStrokeColor: colors[2] || icon.multiColor.innerColor,
              innerFillColor: colors[3] || icon.multiColor.innerBackgroundColor
            };
        }
      };

      var content = _render(h, update());

      var prefix = icon.prefix;
      var cls = (_cls = {}, _defineProperty(_cls, "".concat(prefix, "-icon"), true), _defineProperty(_cls, "".concat(prefix, "-icon-").concat(type), true), _defineProperty(_cls, "".concat(prefix, "-icon-spin"), spin && type !== 'loading'), _cls);
      return h('span', {
        class: cls,
        style: {
          fontSize: size ? "".concat(size, "px") : undefined
        },
        attrs: this.$attrs,
        on: this.$listeners
      }, [content]);
    }
  };
  return options;
}