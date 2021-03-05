module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 390);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 *
 * Base configration of the entire Components .
 *
 *
 * Copyright 2017 ByteDance, Inc.
 * Licensed under MIT
 *
 */

/* global module*/

module.exports = {

  // Prefix for each component .
  CSS_PREFIX: 'byted-',
  LOCALE_PREFIX: 'byted'
};

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _base = __webpack_require__(1);

var _dom = __webpack_require__(7);

var _helper = __webpack_require__(3);

var _popper = __webpack_require__(9);

var _popper2 = _interopRequireDefault(_popper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: _base.CSS_PREFIX + 'popover',

  components: {
    BytedPopper: _popper2.default
  },

  directives: {
    clickoutside: {
      bind: function bind(el, binding, vnode) {
        var handler = _typeof(binding.value) === 'object' ? binding.value.handler : binding.value;
        function documentHandler(e) {
          if (el && el.contains && el.contains(e.target)) {
            return false;
          }
          if (handler || binding.expression) {
            handler(e);
          }
        }
        var modifiers = binding.modifiers || {};
        var capture = modifiers.capture || binding.value.capture || false;

        el.__vueClickOutside__ = documentHandler;
        el.__vueCapture__ = capture;
        document.addEventListener('click', documentHandler, capture);
      },
      unbind: function unbind(el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__, el.__vueCapture__);
        delete el.__vueClickOutside__;
        delete el.__vueCapture__;
      }
    }
  },
  props: {
    placement: {
      type: String,
      default: 'top'
    },
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    trigger: {
      type: String,
      default: 'click',
      validator: function validator(value) {
        return (0, _helper.isOneOf)(value, ['click', 'hover', 'manual']);
      }
    },
    offset: {
      type: [String, Number],
      default: 0
    },
    width: {
      type: [String, Number],
      default: '410px'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 统一命名为showDelay，之后版本会下掉该属性
    openDelay: {
      type: Number,
      default: 0,
      validator: function validator(value) {
        if (value) {
          console.warn('[BUI Warning][Popover] open-delay should change to show-delay ');
        }
        return true;
      }
    },
    showDelay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 200
    },

    transfer: {
      type: [Boolean, HTMLElement],
      default: false
    },
    status: {
      type: String,
      default: '',
      validator: function validator(value) {
        return (0, _helper.isOneOf)(value, ['', 'error']);
      }
    },
    // 鼠标是否可进入到 popper 中
    enterable: {
      type: Boolean,
      default: true
    },
    popperOptions: {
      type: Object,
      default: function _default() {
        return {
          modifiers: {
            flip: {
              enabled: false
            },
            hide: {
              enabled: false
            },
            preventOverflow: {
              enabled: false
            }
          }
        };
      }
    },
    // 是否监听popper内容变化自动更新弹框位置
    fitPopperResize: {
      type: Boolean,
      default: false
    },
    popperClass: {
      type: [String, Array],
      default: ''
    },
    arrow: {
      type: Boolean,
      default: true
    },
    useClickOutsideCapture: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      popoverShow: false,
      referenceEle: null, // 定位参照物对象
      timer: null, // 内部用定时器
      bindEvtInterval: null
    };
  },

  computed: {
    wrapperClass: function wrapperClass(param) {
      var classArr = [_base.CSS_PREFIX + 'popover-wrapper'];
      return classArr;
    },
    baseClass: function baseClass() {
      var classArr = [_base.CSS_PREFIX + 'popover'];
      if (this.status) {
        classArr.push('bui-popover-' + this.status);
      }

      if (this.popperClass) {
        if (typeof this.popperClass === 'string') {
          classArr.push(this.popperClass);
        }
        if (Array.isArray(this.popperClass)) {
          classArr = classArr.concat(this.popperClass);
        }
      }
      return classArr;
    },
    popperStyle: function popperStyle() {
      return {
        width: this.width
      };
    },
    popper: function popper() {
      return this.$refs['popper'];
    },
    popperMergeOptions: function popperMergeOptions() {
      // 兼容offset
      var modifiers = _extends({}, this.popperOptions.modifiers, {
        offset: {
          offset: this.offset
        }
      });
      // 兼容placement
      var placement = this.placement;
      return _extends({}, this.popperOptions, { placement: placement, modifiers: modifiers });
    }
  },
  watch: {
    value: function value(newVal) {
      if (this.trigger === 'manual') {
        this.popoverShow = newVal;
      }
    },
    popoverShow: function popoverShow(newVal) {
      if (this.disabled) {
        return;
      }
      if (this.trigger === 'manual') {
        this.$emit('input', newVal);
      }
      this.$emit('visible-change', newVal);
      if (newVal) {
        this.popper.update();
      } else {
        this.popper.destroy();
      }
    },
    disabled: function disabled(newVal) {
      if (newVal) {
        this.popoverShow = false;
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    // 处理 referenceEle
    if (this.$slots['reference'] && this.$slots['reference'][0]) {
      this.referenceEle = this.$slots['reference'][0].elm;
    }
    if (this.referenceEle) {
      this.bindRefenerceEvent();
    } else {
      // f**k vue
      // f**k vue again
      // 用 2s 延时来兜底
      var count = 0;
      this.bindEvtInterval = window.setInterval(function () {
        if (_this.referenceEle) {
          window.clearInterval(_this.bindEvtInterval);
          _this.bindRefenerceEvent();
          _this.bindEvtInterval = null;
        }
        // 防止出现定时器反复执行的情况
        count++;
        if (count > 10) {
          window.clearInterval(_this.bindEvtInterval);
          _this.bindEvtInterval = null;
        }
      }, 2000);
    }
    // 处理使用 manual 模式下,默认为 true 情况下
    // 需要保证在 refenerce 已经存在的情况下,进行赋值
    if (this.trigger === 'manual') {
      this.$nextTick(function () {
        _this.popoverShow = _this.value;
      });
    }
  },
  destroyed: function destroyed() {
    this.unbindRefenerceEvent();
  },

  methods: {
    // 绑定参照物处理事件
    bindRefenerceEvent: function bindRefenerceEvent() {
      var referenceEle = this.referenceEle;
      if (!referenceEle || !this.popper) {
        // console.warning('定位参照物不存在，请使用 v-popover:xxx 指定定位参照物');
        return false;
      }
      if (this.trigger === 'click') {
        (0, _dom.on)(referenceEle, 'click', this.togglePop);
      } else if (this.trigger === 'hover') {
        (0, _dom.on)(referenceEle, 'mouseenter', this.handleMouseEnter);
        (0, _dom.on)(this.popper.$el, 'mouseenter', this.handleMouseEnter);
        (0, _dom.on)(referenceEle, 'mouseleave', this.handleMouseLeave);
        (0, _dom.on)(this.popper.$el, 'mouseleave', this.handleMouseLeave);
      }
    },
    handleMouseEnter: function handleMouseEnter(e) {
      var _this2 = this;

      if (e.target === this.popper.$el && !this.enterable) {
        return;
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this2.showPop();
      }, this.showDelay || this.openDelay);
    },
    handleMouseLeave: function handleMouseLeave() {
      var _this3 = this;

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this3.hidePop();
      }, this.hideDelay);
    },

    // 切换
    togglePop: function togglePop() {
      this.popoverShow ? this.hidePop() : this.showPop();
    },

    // @expose-api 隐藏
    hidePop: function hidePop() {
      if (this.disabled || !this.popoverShow) {
        return false;
      }
      this.popoverShow = false;
    },

    // 显示
    showPop: function showPop() {
      if (this.disabled) {
        return false;
      }
      this.popoverShow = true;
    },
    unbindRefenerceEvent: function unbindRefenerceEvent() {
      var reference = this.referenceEle;
      clearTimeout(this.timer);
      // 解绑事件
      (0, _dom.off)(reference, 'click', this.doToggle);
      (0, _dom.off)(reference, 'mouseleave', this.handleMouseLeave);
      (0, _dom.off)(reference, 'mouseenter', this.handleMouseEnter);
    },
    isInPopover: function isInPopover(el) {
      do {
        if ((0, _dom.hasClass)(el, 'bui-popper')) {
          return el;
        }
      } while (el = el.parentNode);
      return false;
    },
    handleClickoutside: function handleClickoutside(ev) {
      if (this.trigger !== 'click') return false;

      var popperEl = this.isInPopover(ev.target);
      if (
      // 1. The target element is contained in the popper
      (0, _dom.contains)(ev.target, this.$refs.popper && this.$refs.popper.$el) ||
      // 2. The `reference` element of the nested popper is contained in the parent popper
      popperEl && popperEl.__vue__ && (0, _dom.contains)(popperEl.__vue__.reference, this.$refs.popper.$el)) {
        return false;
      }

      this.hidePop();
    }
  }
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOneOf = isOneOf;
function isOneOf(value, validList) {
  for (var i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popover = __webpack_require__(391);

var _popover2 = _interopRequireDefault(_popover);

var _directive = __webpack_require__(393);

var _directive2 = _interopRequireDefault(_directive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_popover2.default.install = function (Vue) {
  Vue.directive('popover', _directive2.default);
  Vue.component(_popover2.default.name, _popover2.default);
};

exports.default = _popover2.default;

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popover_vue__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popover_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popover_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popover_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popover_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22956eb9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_popover_vue__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popover_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22956eb9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_popover_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22956eb9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_popover_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:({handler: _vm.handleClickoutside, capture: _vm.useClickOutsideCapture}),expression:"{handler: handleClickoutside, capture: useClickOutsideCapture}"}],class:_vm.wrapperClass},[_c('byted-popper',{directives:[{name:"show",rawName:"v-show",value:(!_vm.disabled && _vm.popoverShow),expression:"!disabled && popoverShow"}],ref:"popper",class:_vm.baseClass,style:(_vm.popperStyle),attrs:{"reference":_vm.referenceEle,"placement":_vm.placement,"popper-options":_vm.popperMergeOptions,"append-to-body":_vm.transfer,"fit-popper-resize":_vm.fitPopperResize}},[(_vm.arrow)?_c('div',{staticClass:"bui-popover-arrow",attrs:{"x-arrow":""}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"bui-popover-panel"},[(_vm.$slots.header || _vm.title)?_c('div',{staticClass:"bui-popover-header"},[(_vm.$slots.header)?_vm._t("header"):[_vm._v(_vm._s(_vm.title))]],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"bui-popover-body"},[(_vm.$slots.body)?_vm._t("body"):_vm._e()],2),_vm._v(" "),(_vm.$slots.footer)?_c('div',{staticClass:"bui-popover-footer"},[_vm._t("footer")],2):_vm._e(),_vm._v(" "),_vm._t("default")],2)]),_vm._v(" "),_vm._t("reference")],2)}
var staticRenderFns = []


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// 将被参考定位的元素的 el 传到对应的 popover 组件里
var getReference = function getReference(el, binding, vnode) {
  var vm = vnode.context;
  if (vm.$refs[binding.arg]) {
    // f**k vue https://github.com/vuejs/vue/issues/5561
    vm.$refs[binding.arg].referenceEle = el;
  } else {
    // 此处避免 popper 和 reference 的顺序导致的问题
    vm.$nextTick(function () {
      vm.$refs[binding.arg].referenceEle = el;
    });
  }
};
exports.default = {
  bind: function bind(el, binding, vnode) {
    getReference(el, binding, vnode);
  },
  inserted: function inserted(el, binding, vnode) {
    getReference(el, binding, vnode);
  }
};

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.setStyle = setStyle;
exports.insertAfter = insertAfter;
exports.scrollTop = scrollTop;
exports.contains = contains;
/* istanbul ignore next */

// import Vue from 'vue';

var isServer = false;
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);

/* istanbul ignore next */
var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/* istanbul ignore next */
var on = exports.on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var off = exports.off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var once = exports.once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(this, args);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) {
    throw new Error('className should not contain space.');
  }
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

/* istanbul ignore next */
var getStyle = exports.getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/* istanbul ignore next */
function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if ((typeof styleName === 'undefined' ? 'undefined' : _typeof(styleName)) === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
};
// 选中DOM滚动到可视区域
var scrollIntoView = exports.scrollIntoView = function scrollIntoView(container, selected) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'vertical';

  // direction: 方向 vertival || horizontal
  if (!selected) {
    if (direction === 'horizontal') {
      container.scrollLeft = 0;
      return;
    }
    container.scrollTop = 0;
    return;
  }

  var offsetParents = [];
  var pointer = selected.offsetParent;
  while (pointer && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  if (direction === 'horizontal') {
    // 水平方向滚动计算
    var left = selected.offsetLeft + offsetParents.reduce(function (prev, curr) {
      return prev + curr.offsetLeft;
    }, 0);
    var right = left + selected.offsetWidth;
    var viewRectLeft = container.scrollLeft;
    var viewRectRight = viewRectLeft + container.clientWidth;

    if (left < viewRectLeft) {
      container.scrollLeft = left;
    } else if (right > viewRectRight) {
      container.scrollLeft = right - container.clientWidth;
    }
    return;
  }
  var top = selected.offsetTop + offsetParents.reduce(function (prev, curr) {
    return prev + curr.offsetTop;
  }, 0);
  var bottom = top + selected.offsetHeight;
  var viewRectTop = container.scrollTop;
  var viewRectBottom = viewRectTop + container.clientHeight;

  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
};
// 计算滚动条宽度
var scrollBarWidth = void 0;
var getScrollBarWidth = exports.getScrollBarWidth = function getScrollBarWidth() {
  if (typeof scrollBarWidth !== 'undefined') return scrollBarWidth;
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.padding = 0;
  document.body.appendChild(outer);
  scrollBarWidth = outer.offsetHeight;
  document.body.removeChild(outer);
  return scrollBarWidth;
};

function insertAfter(el, refenerceEle) {
  var parent = refenerceEle.parentNode;
  // 如果最后的节点是目标元素，则直接添加
  if (parent.lastChild === refenerceEle) {
    parent.appendChild(el);
  } else {
    // 如果不是，则插入在目标元素的下一个兄弟节点 的前面
    parent.insertBefore(el, refenerceEle.nextSibling);
  }
}
var removeDom = exports.removeDom = function removeDom(el) {
  if (!el) return;
  if (el.remove) {
    el.remove();
    return;
  }
  var parent = el.parentNode;
  if (parent && parent.removeChild) {
    parent.removeChild(el);
  }
};
// scrollTop animation
function scrollTop(el) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var to = arguments[2];
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }
  var difference = Math.abs(from - to);
  var step = Math.ceil(difference / duration * 50);

  function scroll(start, end, step) {
    if (start === end) return;

    var d = start + step > end ? end : start + step;
    if (start > end) {
      d = start - step < end ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(function () {
      return scroll(d, end, step);
    });
  }
  scroll(from, to, step);
}

function contains(el, parent) {
  if (!el || !parent) return false;
  while (el = el.parentNode) {
    if (el === parent) return true;
  }
  return false;
};

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/popper");

/***/ })

/******/ });