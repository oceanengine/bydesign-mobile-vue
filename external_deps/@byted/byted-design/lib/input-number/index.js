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
/******/ 	return __webpack_require__(__webpack_require__.s = 339);
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

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
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

/* eslint-disable vue/require-prop-types */

var _base = __webpack_require__(1);

var _emitter = __webpack_require__(5);

var _emitter2 = _interopRequireDefault(_emitter);

var _helper = __webpack_require__(3);

var _repeatClick = __webpack_require__(341);

var _repeatClick2 = _interopRequireDefault(_repeatClick);

var _icon = __webpack_require__(6);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultMin = -Infinity;
var InitialValue = 0;

exports.default = {
  name: _base.CSS_PREFIX + 'input-number',
  directives: {
    repeatClick: _repeatClick2.default
  },
  components: {
    BytedIcon: _icon2.default
  },
  mixins: [_emitter2.default],
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: {}, // 不设默认值，以允许用户绑定空字符串、清空输入，视为 undefined 值。
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md',
      validator: function validator(value) {
        return (0, _helper.isOneOf)(value, ['md', 'small', 'sm', 'xs']);
      }
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: DefaultMin
    },
    max: {
      type: Number,
      default: Infinity
    },
    precision: {
      type: Number,
      default: undefined,
      validator: function validator(value) {
        return value >= 0;
      }
    },
    controlsPosition: {
      type: String,
      default: 'right'
    },
    // 内部使用，暂时不对外,禁止 dispatch form-item.change
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      currentValue: InitialValue,
      userInput: null,
      stepUpIntervalPointer: undefined,
      stepDownIntervalPointer: undefined,
      isSuffixShow: {
        disableStepUpBtn: this.value >= this.max && !this.readonly,
        disableStepDownBtn: this.value <= this.min && !this.readonly,
        disabled: this.disabled,
        show: !(this.controlsPosition === 'right')
      },
      startStepTime: undefined
    };
  },

  computed: {
    baseClass: function baseClass() {
      var classArr = [_base.CSS_PREFIX + 'input-number', _base.CSS_PREFIX + 'input-number-' + this.size];
      if (this.disabled) {
        classArr.push(_base.CSS_PREFIX + 'input-number-disabled');
      }
      if (this.controlsPosition === 'dispersion') {
        classArr.push('bui-input-number-dispersion');
      }
      return classArr;
    },
    displayVal: function displayVal() {
      if (this.userInput !== null) {
        return this.userInput;
      }

      var val = this.currentValue;
      if (!isNaN(val) && this.precision !== undefined) {
        var precisionVal = parseFloat(val).toFixed(this.precision);
        if (!isNaN(precisionVal)) {
          val = precisionVal;
        }
      }

      return val;
    },
    buiInputClass: function buiInputClass() {
      return this.controlsPosition === 'dispersion' ? 'bui-input-dispersion' : 'bui-input-default';
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (this.precision !== undefined) {
          var precisionVal = parseFloat(newVal).toFixed(this.precision);
          if (!isNaN(precisionVal)) {
            newVal = precisionVal;
          }
        }

        if (newVal >= this.max) newVal = this.max;
        if (newVal <= this.min) newVal = this.min;
        this.currentValue = newVal;
        this.userInput = null;

        this.isSuffixShow = _extends({}, this.isSuffixShow, {
          disableStepUpBtn: this.value >= this.max && !this.readonly,
          disableStepDownBtn: this.value <= this.min && !this.readonly
        });
      }
    }
  },
  methods: {
    controlsPositionShow: function controlsPositionShow(type) {
      return this.controlsPosition === type;
    },
    handleClick: function handleClick(e) {
      this.$emit('click', e);
    },
    handleBlur: function handleBlur(e) {
      this.isSuffixShow.show = this.isSuffixShowBoolean(false);

      this.$emit('blur', e);
      if (this.validateEvent) {
        this.dispatch(_base.CSS_PREFIX + 'form-item', 'bui.form.blur', [this.value]);
      }
    },
    handleFocus: function handleFocus(e) {
      this.isSuffixShow.show = this.isSuffixShowBoolean(true);
      this.$emit('focus', e);
    },
    handleKeydown: function handleKeydown(e) {
      this.$emit('keydown', e);
    },
    handleKeyup: function handleKeyup(e) {
      this.$emit('keyup', e);
    },
    setCurrentValue: function setCurrentValue(newVal) {
      var oldVal = this.currentValue;
      if (typeof newVal === 'number' && this.precision !== undefined) {
        newVal = this.toPrecision(newVal, this.precision);
      }
      if (newVal >= this.max) newVal = this.max;
      if (newVal <= this.min) newVal = this.min;
      if (oldVal === newVal) return;
      this.userInput = null;
      this.$emit('input', newVal);
      this.$emit('change', newVal, oldVal);
      if (this.validateEvent) {
        this.dispatch(_base.CSS_PREFIX + 'form-item', 'bui.form.change', [newVal]);
      }
      this.currentValue = newVal;
    },
    handleInputChange: function handleInputChange(e) {
      this.$emit('input-change', e);

      var value = e.target.value;
      var defaultValue = this.min !== DefaultMin ? this.min : InitialValue;
      // 特殊处理空输入，格式化为 最小值 || InitialValue（0）。
      var newVal = value === '' ? defaultValue : Number(value);
      if (!isNaN(newVal) || value === '') {
        this.setCurrentValue(newVal);
      }
      this.userInput = null;
    },
    handleInput: function handleInput(e) {
      this.userInput = e.target.value;
    },
    handleMouseEnter: function handleMouseEnter(e) {
      this.isSuffixShow.show = this.isSuffixShowBoolean(true);
    },
    handleMouseLeave: function handleMouseLeave() {
      this.isSuffixShow.show = this.isSuffixShowBoolean(false);
    },
    isSuffixShowBoolean: function isSuffixShowBoolean(bool) {
      // 非默认样式，加减button常驻；默认样式禁用状态隐藏加减button；
      return !this.controlsPositionShow('right') || !this.isSuffixShow.disabled && bool;
    },
    toPrecision: function toPrecision(val, precision) {
      if (precision === undefined) {
        precision = this.getPrecision(this.value);
      }
      return parseFloat(Number(val).toFixed(precision));
    },
    getPrecision: function getPrecision(val) {
      var valStr = val.toString();
      var decimalPos = valStr.indexOf('.');
      if (decimalPos === -1) {
        return 0;
      } else {
        return valStr.length - decimalPos - 1;
      }
    },
    floatCalculate: function floatCalculate(a, b, type) {
      var maxPrecision = Math.max(this.getPrecision(a), this.getPrecision(b));

      var precision = Math.pow(10, maxPrecision);
      var intA = this.toPrecision(a * precision);
      var intB = this.toPrecision(b * precision);

      var outcome = undefined;
      if (type === 'add') {
        outcome = intA + intB;
      }

      if (type === 'minus') {
        outcome = intA - intB;
      }

      return outcome / precision;
    },
    stepGo: function stepGo(type) {
      var curVal = this.currentValue;
      if (isNaN(curVal)) {
        curVal = 0;
      }

      var directNewVal = parseFloat(curVal) + parseFloat(this.step);
      if (type !== 'up') {
        directNewVal = curVal - this.step;
      }

      var finalNewVal = undefined;
      if (parseInt(directNewVal) === directNewVal) {
        finalNewVal = directNewVal;
      } else {
        finalNewVal = this.floatCalculate(curVal, this.step, type === 'up' ? 'add' : 'minus');
      }

      if (finalNewVal < this.min) {
        finalNewVal = this.min;
      }
      if (finalNewVal > this.max) {
        finalNewVal = this.max;
      }
      this.setCurrentValue(finalNewVal);
      this.userInput = null;
    },
    stepGoUp: function stepGoUp() {
      if (this.disabled) return;
      this.stepGo('up');
    },
    stepGoDown: function stepGoDown() {
      if (this.disabled) return;
      this.stepGo('down');
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

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputNumber = __webpack_require__(340);

var _inputNumber2 = _interopRequireDefault(_inputNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_inputNumber2.default.install = function (Vue) {
  Vue.component(_inputNumber2.default.name, _inputNumber2.default);
};

exports.default = _inputNumber2.default;

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_number_vue__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_number_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_number_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_number_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_number_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cb5b5ffe_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_number_vue__ = __webpack_require__(342);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_number_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cb5b5ffe_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_number_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cb5b5ffe_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_number_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(7);

exports.default = {
  bind: function bind(el, binding, vnode) {
    var interval = null;
    var startTime = void 0;
    var handler = function handler() {
      return vnode.context[binding.expression].apply();
    };
    var clear = function clear() {
      if (Date.now() - startTime < 100) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    (0, _dom.on)(el, 'mousedown', function (e) {
      if (e.button !== 0) return;
      startTime = Date.now();
      (0, _dom.once)(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, 100);
    });
  }
};

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.baseClass,on:{"mouseenter":_vm.handleMouseEnter,"mouseleave":_vm.handleMouseLeave}},[_c('input',{ref:"inputNumber",staticClass:"bui-input",class:_vm.buiInputClass,attrs:{"placeholder":_vm.placeholder,"disabled":_vm.disabled,"readonly":_vm.readonly,"step":_vm.step,"min":_vm.min,"max":_vm.max},domProps:{"value":_vm.displayVal},on:{"click":_vm.handleClick,"input":_vm.handleInput,"blur":_vm.handleBlur,"focus":_vm.handleFocus,"keydown":[_vm.handleKeydown,function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }return _vm.stepGoUp($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }return _vm.stepGoDown($event)}],"keyup":_vm.handleKeyup,"change":_vm.handleInputChange}}),_vm._v(" "),_c('div',{staticClass:"bui-input-suffix-default"},[_c('div',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.stepGoUp),expression:"stepGoUp"}],staticClass:"bui-control-area"},[_c('byted-icon',{staticClass:"bui-control-area-icon up",class:{'disabled': _vm.isSuffixShow.disableStepUpBtn || _vm.disabled},attrs:{"name":"angle-down"}})],1),_vm._v(" "),_c('div',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.stepGoDown),expression:"stepGoDown"}],staticClass:"bui-control-area"},[_c('byted-icon',{staticClass:"bui-control-area-icon",class:{'disabled': _vm.isSuffixShow.disableStepDownBtn || _vm.disabled},attrs:{"name":"angle-down"}})],1)]),_vm._v(" "),(_vm.isSuffixShow.show && _vm.controlsPositionShow('dispersion'))?_c('div',{staticClass:"bui-input-suffix-dispersion"},[_c('div',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.stepGoDown),expression:"stepGoDown"}],staticClass:"bui-control-area bui-control-area-left"},[_c('byted-icon',{staticClass:"bui-control-area-icon",class:{'disabled': _vm.isSuffixShow.disableStepDownBtn || _vm.disabled},attrs:{"name":"minus"}})],1),_vm._v(" "),_c('div',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.stepGoUp),expression:"stepGoUp"}],staticClass:"bui-control-area bui-control-area-right"},[_c('byted-icon',{staticClass:"bui-control-area-icon",class:{'disabled': _vm.isSuffixShow.disableStepUpBtn || _vm.disabled},attrs:{"name":"plus"}})],1)]):_vm._e()])}
var staticRenderFns = []


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/mixins/emitter");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/icon");

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

/***/ })

/******/ });