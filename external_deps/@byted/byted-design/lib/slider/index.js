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
/******/ 	return __webpack_require__(__webpack_require__.s = 438);
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

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(440);

var _button2 = _interopRequireDefault(_button);

var _base = __webpack_require__(1);

var _dom = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: _base.CSS_PREFIX + 'slider',
  components: {
    SliderButton: _button2.default
  },
  props: {
    value: {
      type: [Number, Array],
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    disabled: {
      type: Boolean,
      default: false
    },
    step: {
      type: [Number, null],
      default: 1,
      validator: function validator(value) {
        if (value === 0) {
          console.error('[BUI Error][Slider]step should not be 0.');
          return false;
        }
        return true;
      }
    },
    showStops: {
      type: Boolean,
      default: false
    },
    range: {
      type: Boolean,
      default: false
    },
    showPopover: {
      type: Boolean,
      default: true
    },
    marks: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      dragging: false,
      sliderSize: 1,
      firstValue: null,
      secondValue: null
    };
  },

  computed: {
    className: function className() {
      var className = [_base.CSS_PREFIX + 'slider'];
      if (this.disabled) {
        className.push(_base.CSS_PREFIX + 'slider-disabled');
      }
      return className;
    },
    sliderActiveBarLeft: function sliderActiveBarLeft() {
      return this.range ? (this.minValue - this.min) / (this.max - this.min) * 100 : 0;
    },
    sliderActiveBarWidth: function sliderActiveBarWidth() {
      return this.range ? (this.maxValue - this.minValue) / (this.max - this.min) * 100 : (this.firstValue - this.min) / (this.max - this.min) * 100;
    },
    sliderActiveBarStyle: function sliderActiveBarStyle() {
      return {
        'left': this.sliderActiveBarLeft + '%',
        'width': this.sliderActiveBarWidth + '%'
      };
    },
    sliderRect: function sliderRect() {
      var sliderRef = this.$refs.slider || {};
      return sliderRef.getBoundingClientRect();
    },
    stops: function stops() {
      if (!this.showStops || this.min > this.max || this.step === null) return [];
      var stopsCount = (this.max - this.min) / this.step;
      var stepWidth = this.step / (this.max - this.min) * 100;
      var result = [];
      for (var i = 0; i <= stopsCount; i++) {
        result.push(stepWidth * i);
      }
      return result;
    },
    minValue: function minValue() {
      return Math.min(this.firstValue, this.secondValue);
    },
    maxValue: function maxValue() {
      return Math.max(this.firstValue, this.secondValue);
    },
    markList: function markList() {
      var _this = this;

      var marksKeys = Object.keys(this.marks);
      if (!marksKeys.length) {
        return [];
      }
      if (marksKeys.some(function (key) {
        return isNaN(key);
      })) {
        console.warn('[BUI Error][Slider]the key of marks should be a number.');
        return [];
      }
      return marksKeys.sort(function (a, b) {
        return a - b;
      }).filter(function (key) {
        return key >= _this.min && key <= _this.max;
      }).map(function (key) {
        return {
          key: key,
          position: (key - _this.min) / (_this.max - _this.min) * 100,
          value: _this.marks[key]
        };
      });
    }
  },
  watch: {
    value: function value(newVal) {
      if (this.dragging) return;
      this.setValue();
    },

    // 拖动结束后重置value
    dragging: function dragging(newVal) {
      if (!newVal) {
        this.setValue();
      }
    },
    firstValue: function firstValue(newVal) {
      if (this.range) {
        this.$emit('input', [this.minValue, this.maxValue]);
      } else {
        this.$emit('input', newVal);
      }
    },
    secondValue: function secondValue(newVal) {
      if (this.range) {
        this.$emit('input', [this.minValue, this.maxValue]);
      }
    }
  },
  mounted: function mounted() {
    if (this.range) {
      if (Array.isArray(this.value)) {
        this.firstValue = Math.max(this.min, this.value[0]);
        this.secondValue = Math.min(this.max, this.value[1]);
      } else {
        this.firstValue = this.min;
        this.secondValue = this.max;
      }
    } else {
      this.setValue();
    }
    this.resetSize();
    (0, _dom.on)(window, 'resize', this.resetSize);
  },
  beforeDestroy: function beforeDestroy() {
    (0, _dom.off)(window, 'resize', this.resetSize);
  },

  methods: {
    /**
     * 判断当前stops时候active
     */
    judgeStopIsActive: function judgeStopIsActive(item) {
      return item >= this.sliderActiveBarLeft && item <= this.sliderActiveBarLeft + this.sliderActiveBarWidth;
    },

    /**
     * 当窗口变化时重新设置滑块尺寸
     */
    resetSize: function resetSize() {
      if (this.$refs.slider) {
        this.sliderSize = this.$refs.slider['clientWidth'];
      }
    },

    /**
     * 判断当前value值是否在[min,max]范围
     */
    setValue: function setValue() {
      if (this.range && Array.isArray(this.value)) {
        if (this.value[1] < this.min) {
          this.$emit('input', [this.min, this.min]);
        } else if (this.value[0] > this.max) {
          this.$emit('input', [this.max, this.max]);
        } else if (this.value[0] < this.min) {
          this.$emit('input', [this.min, this.value[1]]);
        } else if (this.value[1] > this.max) {
          this.$emit('input', [this.value[0], this.max]);
        } else {
          this.firstValue = this.value[0];
          this.secondValue = this.value[1];
        }
      } else if (!this.range && !isNaN(this.value)) {
        if (this.value < this.min) {
          this.$emit('input', this.min);
        } else if (this.value > this.max) {
          this.$emit('input', this.max);
        } else {
          this.firstValue = this.value;
        }
      }
    },

    /**
     * 向父组件传递change后的值
     */
    emitChange: function emitChange(currentValue) {
      this.$emit('change', this.range ? [this.minValue, this.maxValue] : currentValue);
    }
  }
}; //
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

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(7);

var _base = __webpack_require__(1);

var _emitter = __webpack_require__(5);

var _emitter2 = _interopRequireDefault(_emitter);

var _popper = __webpack_require__(9);

var _popper2 = _interopRequireDefault(_popper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
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

exports.default = {
  components: {
    BytedPopper: _popper2.default
  },
  mixins: [_emitter2.default],
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      // auto adaption
      popperWidth: '',
      dragging: false,
      isClick: false,
      currentValue: this.value
    };
  },

  computed: {
    disabled: function disabled() {
      return this.$parent.disabled;
    },
    sliderRect: function sliderRect() {
      return this.$parent.sliderRect;
    },
    sliderSize: function sliderSize() {
      return this.$parent.sliderSize;
    },
    max: function max() {
      return this.$parent.max;
    },
    min: function min() {
      return this.$parent.min;
    },
    step: function step() {
      return this.$parent.step;
    },
    marks: function marks() {
      return this.$parent.marks;
    },
    curPosition: function curPosition() {
      return (this.currentValue - this.min) / (this.max - this.min) * 100;
    },
    wrapperStyle: function wrapperStyle() {
      return {
        'left': this.curPosition + '%'
      };
    },
    showPopover: function showPopover() {
      return this.$parent.showPopover;
    }
  },
  watch: {
    value: function value(newVal) {
      this.setValue();
    },
    dragging: function dragging(val) {
      this.$parent.dragging = val;
    }
  },
  methods: {
    /**
     * 点击滑块，触发拖拽
     */
    mouseDown: function mouseDown(evt) {
      evt.preventDefault();
      if (this.disabled) {
        return false;
      }
      this.onDragStart(evt);
      (0, _dom.on)(window, 'mousemove', this.onDragging);
      (0, _dom.on)(window, 'mouseup', this.onDragEnd);
    },


    /**
     * 拖拽行为开始
     */
    onDragStart: function onDragStart(evt) {
      this.dragging = true;
      this.isClick = true;
    },


    /**
     * 拖拽中，更新滑块按钮的位置
     */
    onDragging: function onDragging(evt) {
      if (this.showPopover) {
        this.broadcast(_base.CSS_PREFIX + 'popper', 'bui.popper.update');
      }

      if (!this.dragging) return;
      this.isClick = false;
      this.$parent.resetSize();
      var currentX = evt.clientX;
      var sliderOffsetLeft = this.sliderRect.left;
      var curPos = currentX - sliderOffsetLeft;
      this.setPosition(curPos);
      this.$emit('input', this.currentValue);
    },


    /**
     * 拖拽行为结束，改变value值
     */
    onDragEnd: function onDragEnd(evt) {
      this.dragging = false;
      if (this.isClick) return;
      var currentX = evt.clientX;
      var sliderOffsetLeft = this.sliderRect.left;
      var curPos = currentX - sliderOffsetLeft;
      this.setPosition(curPos);
      this.$emit('input', this.currentValue);
      this.$parent.emitChange(this.currentValue);
      (0, _dom.off)(window, 'mousemove', this.onDragging);
      (0, _dom.off)(window, 'mouseup', this.onDragEnd);
    },

    /**
     * 设置按钮当前值
     * @param {number} position - 滑块按钮的位置
     */
    setPosition: function setPosition(position) {
      position = position < 0 ? 0 : position > this.sliderSize ? this.sliderSize : position;
      var diffValue = position / this.sliderSize * (this.max - this.min);
      if (this.step !== null) {
        this.currentValue = (Math.round(diffValue / this.step) * this.step + this.min).toFixed(2) - 0;
      } else {
        var curVal = diffValue + this.min;
        var points = Object.keys(this.marks).map(parseFloat);
        var diffs = points.map(function (point) {
          return Math.abs(curVal - point);
        });
        var closestPoint = points[diffs.indexOf(Math.min.apply(Math, _toConsumableArray(diffs)))];
        this.currentValue = closestPoint;
      }
    },

    /**
     * 判断当前value值是否在[min,max]范围
     */
    setValue: function setValue() {
      if (this.value < this.min) {
        this.value = this.min;
      } else if (this.value > this.max) {
        this.value = this.max;
      } else {
        this.currentValue = this.value;
      }
    }
  }
};

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slider = __webpack_require__(439);

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_slider2.default.install = function (Vue) {
  Vue.component(_slider2.default.name, _slider2.default);
};

exports.default = _slider2.default;

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_slider_vue__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_slider_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_slider_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_slider_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa8b576a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_slider_vue__ = __webpack_require__(442);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_slider_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa8b576a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_slider_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa8b576a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_slider_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e6cf7ea_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(441);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e6cf7ea_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e6cf7ea_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.showPopover)?_c('byted-popover',{attrs:{"width":_vm.popperWidth,"trigger":"manual","placement":"top"},model:{value:(_vm.dragging),callback:function ($$v) {_vm.dragging=$$v},expression:"dragging"}},[_c('span',[_vm._v(_vm._s(_vm.value))]),_vm._v(" "),_c('div',{ref:"bui-slider-button",staticClass:"bui-slider-button",class:{'bui-slider-button-active': _vm.dragging},style:(_vm.wrapperStyle),attrs:{"slot":"reference"},on:{"mousedown":_vm.mouseDown},slot:"reference"})]):_c('div',{ref:"bui-slider-button",staticClass:"bui-slider-button",class:{'bui-slider-button-active': _vm.dragging},style:(_vm.wrapperStyle),on:{"mousedown":_vm.mouseDown}})}
var staticRenderFns = []


/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className},[_c('div',{ref:"slider",staticClass:"bui-slider-container"},[_c('slider-button',{ref:"button1",model:{value:(_vm.firstValue),callback:function ($$v) {_vm.firstValue=$$v},expression:"firstValue"}}),_vm._v(" "),(_vm.range)?_c('slider-button',{ref:"button2",model:{value:(_vm.secondValue),callback:function ($$v) {_vm.secondValue=$$v},expression:"secondValue"}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"bui-slider-active",style:(_vm.sliderActiveBarStyle),attrs:{"refs":"slider-active"}}),_vm._v(" "),(_vm.showStops)?_vm._l((_vm.stops),function(item,key){return _c('div',{key:key,class:['bui-slider-stop', {'bui-slider-stop-active': _vm.judgeStopIsActive(item)}],style:({ left: item + '%' })})}):_vm._e(),_vm._v(" "),(_vm.markList.length)?[_vm._l((_vm.markList),function(item){return _c('div',{key:item.key,class:['bui-slider-stop', {'bui-slider-stop-active': _vm.judgeStopIsActive(item.position)}],style:({ left: item.position + '%' })})}),_vm._v(" "),_c('div',{staticClass:"bui-slider-mark"},_vm._l((_vm.markList),function(item){return _c('div',{key:item.key,staticClass:"bui-slider-mark-text",style:({ left: item.position + '%' })},[_vm._v("\n          "+_vm._s(item.value)+"\n        ")])}),0)]:_vm._e()],2)])}
var staticRenderFns = []


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/mixins/emitter");

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