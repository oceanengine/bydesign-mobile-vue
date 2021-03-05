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
/******/ 	return __webpack_require__(__webpack_require__.s = 237);
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/loading");

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emitter = __webpack_require__(5);

var _emitter2 = _interopRequireDefault(_emitter);

var _locale = __webpack_require__(8);

var _locale2 = _interopRequireDefault(_locale);

var _dom = __webpack_require__(7);

var _icon = __webpack_require__(6);

var _icon2 = _interopRequireDefault(_icon);

var _input = __webpack_require__(14);

var _input2 = _interopRequireDefault(_input);

var _popper = __webpack_require__(9);

var _popper2 = _interopRequireDefault(_popper);

var _clickoutside = __webpack_require__(10);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _helper = __webpack_require__(3);

var _base = __webpack_require__(1);

var _listItem = __webpack_require__(85);

var _listItem2 = _interopRequireDefault(_listItem);

var _infiniteScroll = __webpack_require__(88);

var _infiniteScroll2 = _interopRequireDefault(_infiniteScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: _base.CSS_PREFIX + 'auto-complete',
  directives: { clickoutside: _clickoutside2.default },
  components: {
    ListItem: _listItem2.default,
    BytedIcon: _icon2.default,
    BytedInput: _input2.default,
    BytedPopper: _popper2.default,
    InfiniteScroll: _infiniteScroll2.default
  },
  mixins: [_emitter2.default, _locale2.default],
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md',
      validator: function validator(value) {
        return (0, _helper.isOneOf)(value, ['md', 'small', 'xs', 'sm', 'lg', 'xl']);
      }
    },
    dataSource: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    open: {
      type: Boolean,
      default: false
    },
    infinite: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      // 如果 dataSource 传入为 [object], object 需要是 { value, text } 形状
      valueKey: 'value',
      textKey: 'text',
      reference: null,
      popperStyle: {
        width: 0
      },
      popperVisible: this.open,
      maxHeight: 192
    };
  },

  computed: {
    _placeholder: function _placeholder() {
      return this.placeholder || this.t(_base.LOCALE_PREFIX + '.auto-complete.placeholder');
    },
    _emptyTip: function _emptyTip() {
      return this.t(_base.LOCALE_PREFIX + '.auto-complete.emptyTip');
    },
    baseClass: function baseClass() {
      return _base.CSS_PREFIX + 'auto-complete';
    }
  },
  watch: {
    popperVisible: function popperVisible(val) {
      if (this.$listeners['update:open']) {
        this.$emit('update:open', val);
      }
      val ? this.broadcast(_base.CSS_PREFIX + 'popper', 'bui.popper.update') : this.broadcast(_base.CSS_PREFIX + 'popper', 'bui.popper.destroy');
      this.$emit('visible-change', val);
    },
    open: function open(val) {
      this.togglePopperShow(val);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.reference = this.$refs.reference;
    this.$nextTick(function () {
      _this.setPopperStyle();
    });
  },

  methods: {
    setPopperStyle: function setPopperStyle() {
      if (this.reference.$el) {
        var offsetWidth = this.reference.$el.offsetWidth;
        this.popperStyle.width = offsetWidth ? offsetWidth + 'px' : '';
      }
    },
    togglePopperShow: function togglePopperShow(value) {
      this.popperVisible = value;
      if (this.popperVisible && !this.popperStyle.width) {
        this.setPopperStyle();
      }
    },
    handleInput: function handleInput(val) {
      this.$emit('input', val);
      this.$emit('search', val);
      this.togglePopperShow(true);
      this.$refs.listItem.resetFocusIndex();
    },
    handleSelect: function handleSelect(value, item) {
      this.togglePopperShow(false);
      value = item[this.valueKey] || value;
      this.$emit('input', value);
      this.$emit('select', value, item);
    },
    handleClickoutside: function handleClickoutside(e) {
      if (!this.popperVisible) {
        return;
      }
      var target = e.target;
      var parent = target.parentNode;
      while (parent && !(0, _dom.hasClass)(parent, 'byted-auto-complete-content')) {
        parent = parent.parentNode;
      }
      if (!parent) {
        this.togglePopperShow(false);
      }
    },
    handleFocus: function handleFocus(evt) {
      this.$emit('focus', evt);
    },
    handleBlur: function handleBlur(evt) {
      this.$emit('blur', evt);
    },
    resetLoading: function resetLoading() {
      this.$refs.listItem && this.$refs.listItem.resetLoading();
    },
    handleKeydown: function handleKeydown(direction) {
      if (!this.popperVisible) return;
      this.$refs.listItem.focus(direction);
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

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/input");

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoComplete = __webpack_require__(238);

var _autoComplete2 = _interopRequireDefault(_autoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_autoComplete2.default.install = function (Vue) {
  Vue.component(_autoComplete2.default.name, _autoComplete2.default);
};
exports.default = _autoComplete2.default;

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_auto_complete_vue__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_auto_complete_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_auto_complete_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_auto_complete_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_auto_complete_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b198e4d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_auto_complete_vue__ = __webpack_require__(239);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_auto_complete_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b198e4d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_auto_complete_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b198e4d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_auto_complete_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.handleClickoutside),expression:"handleClickoutside"}],class:_vm.baseClass},[_c('byted-input',_vm._b({ref:"reference",attrs:{"size":_vm.size,"placeholder":_vm._placeholder,"value":_vm.value},on:{"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.handleKeydown('up')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.handleKeydown('down')}]}},'byted-input',_vm.$attrs,false),[_c('template',{slot:"prefix"},[_vm._t("prefix")],2),_vm._v(" "),_c('template',{slot:"suffix"},[_vm._t("suffix")],2),_vm._v(" "),_c('template',{slot:"append"},[_vm._t("append")],2),_vm._v(" "),_c('template',{slot:"prepend"},[_vm._t("prepend")],2)],2),_vm._v(" "),_c('byted-popper',{directives:[{name:"show",rawName:"v-show",value:(_vm.popperVisible),expression:"popperVisible"}],style:(_vm.popperStyle),attrs:{"append-to-body":true,"reference":_vm.reference}},[_c('list-item',{ref:"listItem",attrs:{"data-source":_vm.dataSource,"infinite":_vm.infinite,"max-height":_vm.maxHeight},on:{"loadmore":function($event){return _vm.$emit('loadmore')},"select":_vm.handleSelect},scopedSlots:_vm._u([{key:"dataSource",fn:function(ref){
var item = ref.item;
return _c('span',{},[_vm._t("dataSource",[_vm._v("\n          "+_vm._s(item[_vm.textKey] || item)+"\n        ")],{"item":item})],2)}}],null,true)},[_vm._v(" "),_c('template',{slot:"loading"},[_vm._t("loading")],2)],2)],1)],1)}
var staticRenderFns = []


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

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _emitter = __webpack_require__(5);

var _emitter2 = _interopRequireDefault(_emitter);

var _locale = __webpack_require__(8);

var _locale2 = _interopRequireDefault(_locale);

var _clickoutside = __webpack_require__(10);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _base = __webpack_require__(1);

var _expand = __webpack_require__(86);

var _expand2 = _interopRequireDefault(_expand);

var _loading = __webpack_require__(12);

var _loading2 = _interopRequireDefault(_loading);

var _icon = __webpack_require__(6);

var _icon2 = _interopRequireDefault(_icon);

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
  name: 'list-item',
  directives: { clickoutside: _clickoutside2.default },
  components: _defineProperty({
    expand: _expand2.default,
    BytedIcon: _icon2.default
  }, _loading2.default.iconName, _loading2.default),
  mixins: [_emitter2.default, _locale2.default],
  props: {
    dataSource: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    props: {
      type: Object,
      default: function _default() {
        return null;
      }
    },
    infinite: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      defaultProps: {
        itemKey: 'text',
        valueKey: 'value'
      },
      currentFocusIndex: null
    };
  },

  computed: {
    _emptyTip: function _emptyTip() {
      return this.t(_base.LOCALE_PREFIX + '.auto-complete.emptyTip');
    },
    _lodingTip: function _lodingTip() {
      return this.t(_base.LOCALE_PREFIX + '.auto-complete.loadingTip');
    },
    infiniteLoadingTip: function infiniteLoadingTip() {
      return this.t(_base.LOCALE_PREFIX + '.auto-complete.infiniteLoadingTip');
    },
    baseClass: function baseClass() {
      return _base.CSS_PREFIX + 'auto-complete';
    },
    contentClass: function contentClass() {
      return _base.CSS_PREFIX + 'list-item';
    },
    contentItemClass: function contentItemClass() {
      return this.contentClass + '__item';
    },
    contentEmptyClass: function contentEmptyClass() {
      return this.contentClass + '__empty';
    },
    contentLoadingClass: function contentLoadingClass() {
      return this.contentClass + '__loading';
    },
    displayEmpty: function displayEmpty() {
      return this.dataSource.length === 0 && !this.loading;
    }
  },
  watch: {
    props: function props(val) {
      this.defaultProps = _extends({}, this.defaultProps, val);
    }
  },
  methods: {
    handleSelect: function handleSelect(item) {
      var key = item[this.defaultProps.valueKey] || item;
      this.$emit('input', key);
      this.$emit('select', key, item);
    },
    handleLoadmore: function handleLoadmore() {
      this.$emit('loadmore');
    },
    resetLoading: function resetLoading() {
      this.$refs['scroller'] && this.$refs['scroller'].reset();
    },
    focus: function focus(direction) {
      if (this.currentFocusIndex === null) {
        this.currentFocusIndex = direction === 'down' ? -1 : 0;
      }

      var len = this.$refs.items.length;
      var index = direction === 'down' ? this.currentFocusIndex + 1 : this.currentFocusIndex - 1;
      this.currentFocusIndex = index < 0 ? index % len + len : index % len;

      this.$refs.items[this.currentFocusIndex].focus();
    },
    resetFocusIndex: function resetFocusIndex() {
      this.currentFocusIndex = null;
    }
  }
};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Expand',
  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    render: {
      type: Function,
      default: null
    },
    label: {
      type: String,
      default: ''
    }
  },
  render: function render(h) {
    if (this.label !== '') {
      return h('span', [this.label]);
    }
    if (this.render === null) return null;
    var renderNode = this.render(h);
    return h('span', [renderNode]);
  }
};

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

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/mixins/locale");

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_item_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_item_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_550d1bda_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_item_vue__ = __webpack_require__(87);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_550d1bda_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_item_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_550d1bda_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_item_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_expand_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_expand_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_expand_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_expand_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_expand_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_expand_vue___default.a,
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.contentClass]},[_c('byted-infinite-scroll',{ref:"scroller",attrs:{"disabled":!_vm.infinite,"height":_vm.maxHeight},on:{"loadmore":_vm.handleLoadmore}},[(!_vm.loading)?_c('div',_vm._l((_vm.dataSource),function(item,index){return _c('div',{key:index,ref:"items",refInFor:true,class:_vm.contentItemClass,attrs:{"tabindex":0},on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.focus('up')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.focus('down')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.handleSelect(item)}],"click":function($event){return _vm.handleSelect(item)}}},[(item.render)?_c('expand',{attrs:{"value":item.value,"label":item.label,"render":item.render}}):_vm._e(),_vm._v(" "),(!item.render)?_vm._t("dataSource",[_vm._v("\n          "+_vm._s(item[_vm.defaultProps.itemKey] || item)+"\n        ")],{"item":item}):_vm._e()],2)}),0):_vm._e(),_vm._v(" "),(_vm.displayEmpty)?_c('div',{class:_vm.contentEmptyClass},[_c('div',[_c('byted-icon',{attrs:{"name":"empty"}}),_vm._v(" "),_c('p',{staticClass:"bui-list-item-content"},[_vm._v(_vm._s(_vm._emptyTip))])],1)]):_vm._e(),_vm._v(" "),_c('template',{slot:"loading"},[(!_vm.displayEmpty)?_vm._t("loading",[_c('div',{staticClass:"bui-list-loadmore"},[_c('byted-loading-icon'),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.infiniteLoadingTip))])],1)]):_vm._e()],2)],2),_vm._v(" "),(_vm.loading)?_c('div',{class:_vm.contentLoadingClass},[_c('div',[_c('p',{staticClass:"bui-list-item-content"},[_c('byted-loading-icon'),_vm._v(" "),_c('span',[_vm._v("\n          "+_vm._s(_vm._lodingTip)+"\n        ")])],1)])]):_vm._e()],1)}
var staticRenderFns = []


/***/ }),

/***/ 88:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/infinite-scroll");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/popper");

/***/ })

/******/ });