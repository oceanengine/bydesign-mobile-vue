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
/******/ 	return __webpack_require__(__webpack_require__.s = 377);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/directives/clickoutside");

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/utils/measure-text");

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(1);

var _helper = __webpack_require__(3);

var _measureText = __webpack_require__(131);

var _clickoutside = __webpack_require__(10);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _emitter = __webpack_require__(5);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
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

exports.default = {
  name: _base.CSS_PREFIX + 'multiple-input',
  directives: { clickoutside: _clickoutside2.default },
  mixins: [_emitter2.default],
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
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
        return (0, _helper.isOneOf)(value, ['md', 'sm', 'lg']);
      }
    },
    status: {
      type: String,
      default: '',
      validator: function validator(value) {
        return (0, _helper.isOneOf)(value, ['', 'error']);
      }
    },
    // 内部使用，暂时不对外,禁止 dispatch form-item.change
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      isFocus: false,
      isComposition: false,
      label: '',
      wrapperWidth: 0
    };
  },

  computed: {
    baseClass: function baseClass() {
      var base = _base.CSS_PREFIX + 'multiple-input';
      var arr = [base, base + '-' + this.size];
      if (this.clearable && (this.value.length || this.label)) {
        arr.push(base + '-show-clear');
      }
      if (this.isFocus) {
        arr.push(base + '-focused');
      }
      if (this.status) {
        arr.push(base + '-' + this.status);
      }
      if (this.disabled) {
        arr.push(base + '-disabled');
      }
      return arr;
    },
    wrapperClass: function wrapperClass() {
      var _ref;

      var base = 'bui-multiple-input-wrapper';
      return _ref = {}, _defineProperty(_ref, base, true), _defineProperty(_ref, base + '-focused', this.isFocus), _ref;
    },
    labelInputStyle: function labelInputStyle() {
      var placeholderLen = (0, _measureText.getMeasureTextWidth)(this.placeholder);
      var labelLen = (0, _measureText.getMeasureTextWidth)(this.label);
      var min = 14;
      var minWidth = Math.min(this.wrapperWidth, Math.max(placeholderLen, labelLen, min));
      return {
        minWidth: minWidth + 'px'
      };
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.initWrapperWidth();
    });
  },

  methods: {
    initWrapperWidth: function initWrapperWidth() {
      var paddingLeft = 12;
      var paddingRight = this.clearable ? 32 : 12;
      var clientWidth = this.$refs.wrapper && this.$refs.wrapper.clientWidth;
      this.wrapperWidth = clientWidth - paddingLeft - paddingRight || 0;
    },
    handleClickoutside: function handleClickoutside() {
      if (this.isFocus) {
        this.handleBlur();
      }
      if (this.label) {
        this.handleInputAdd(this.label);
      }
    },
    handleClick: function handleClick(evt) {
      this.$refs.input && this.$refs.input.focus();
      this.$emit('click', evt);
    },
    handleInput: function handleInput() {
      // this.$emit()
    },
    handleCompositionStart: function handleCompositionStart() {
      this.isComposition = true;
    },
    handleCompositionEnd: function handleCompositionEnd() {
      this.isComposition = false;
    },
    handleBlur: function handleBlur() {
      if (!this.isFocus) {
        return;
      }
      this.isFocus = false;
      this.$emit('blur');
      if (this.validateEvent) {
        this.dispatch(_base.CSS_PREFIX + 'form-item', 'bui.form.blur', [this.value]);
      }
    },
    handleFocus: function handleFocus(evt) {
      if (this.isFocus) {
        return;
      }
      this.isFocus = true;
      this.$emit('focus', evt);
    },
    handleEnter: function handleEnter(evt) {
      var target = evt.target;
      var value = target.value.trim();
      if (!value || this.isComposition) return;
      this.handleInputAdd(value);
    },
    handleInputAdd: function handleInputAdd(value) {
      var current = this.value.slice();
      current.push(value);
      this.emitValueInput(current);
      this.resetInputValue();
    },
    handleDelete: function handleDelete(evt) {
      var target = evt.target;
      if (target.value || this.isComposition) return;
      var current = this.value.slice();
      current.pop();
      this.emitValueInput(current);
    },
    handleClear: function handleClear() {
      this.resetInputValue();
      if (!this.value.length) {
        return;
      }
      this.$emit('clear');
      this.emitValueInput([]);
    },
    handleKeydown: function handleKeydown(evt) {
      this.$emit('keydown', evt);
    },
    handleKeyup: function handleKeyup(evt) {
      this.$emit('keyup', evt);
    },
    handleTagDelete: function handleTagDelete(index) {
      var current = this.value.slice();
      current.splice(index, 1);
      this.emitValueInput(current);
    },
    emitValueInput: function emitValueInput(value) {
      this.$emit('input', value);
      this.$emit('change', value);
      if (this.validateEvent) {
        this.dispatch(_base.CSS_PREFIX + 'form-item', 'bui.form.change', [value]);
      }
    },
    resetInputValue: function resetInputValue() {
      this.label = '';
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

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _multipleInput = __webpack_require__(378);

var _multipleInput2 = _interopRequireDefault(_multipleInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_multipleInput2.default.install = function (Vue) {
  Vue.component(_multipleInput2.default.name, _multipleInput2.default);
};

exports.default = _multipleInput2.default;

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_multiple_input_vue__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_multiple_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_multiple_input_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_multiple_input_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_multiple_input_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00e322c8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_multiple_input_vue__ = __webpack_require__(379);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_multiple_input_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00e322c8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_multiple_input_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00e322c8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_multiple_input_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.handleClickoutside),expression:"handleClickoutside"}],class:_vm.baseClass,on:{"click":_vm.handleClick}},[_c('div',{ref:"wrapper",class:_vm.wrapperClass},[_vm._t("default",_vm._l((_vm.value),function(item,index){return _c('byted-tag',{key:index,attrs:{"size":_vm.size,"disabled":_vm.disabled,"plain":_vm.disabled,"closable":""},on:{"close":function($event){return _vm.handleTagDelete(index)}}},[_vm._v(_vm._s(item))])})),_vm._v(" "),(!_vm.readonly)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.label),expression:"label"}],ref:"input",staticClass:"bui-multiple-input-content",style:(_vm.labelInputStyle),attrs:{"placeholder":_vm.placeholder,"disabled":_vm.disabled,"type":"text"},domProps:{"value":(_vm.label)},on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleEnter($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete","Del"])){ return null; }return _vm.handleDelete($event)},_vm.handleKeydown],"keyup":_vm.handleKeyup,"focus":_vm.handleFocus,"compositionstart":_vm.handleCompositionStart,"compositionend":_vm.handleCompositionEnd,"input":function($event){if($event.target.composing){ return; }_vm.label=$event.target.value}}}):_vm._e()],2),_vm._v(" "),(_vm.clearable)?_c('byted-icon',{staticClass:"bui-multiple-input-clear",attrs:{"name":"close-circle"},on:{"click":_vm.handleClear}}):_vm._e()],1)}
var staticRenderFns = []


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/mixins/emitter");

/***/ })

/******/ });