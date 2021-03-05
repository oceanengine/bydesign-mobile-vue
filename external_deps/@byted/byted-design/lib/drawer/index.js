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
/******/ 	return __webpack_require__(__webpack_require__.s = 318);
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

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popupManager = __webpack_require__(22);

var _popupManager2 = _interopRequireDefault(_popupManager);

var _dom = __webpack_require__(7);

var _setScrollEffect = __webpack_require__(120);

var _emitter = __webpack_require__(5);

var _emitter2 = _interopRequireDefault(_emitter);

var _base = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var className = 'byted-modal-open';

// 遮罩设置style
function setBackdropStyle(backdrop, maskStyle) {
  Object.keys(maskStyle).forEach(function (key) {
    (0, _dom.setStyle)(backdrop, key, maskStyle[key]);
  });
}

exports.default = {
  mixins: [_emitter2.default],
  props: {
    // 点击遮罩是否可关闭
    maskClosable: {
      type: Boolean,
      default: true
    },
    // 是否显示遮罩
    maskable: {
      type: Boolean,
      default: true
    },
    // 遮罩样式
    maskStyle: {
      type: Object,
      default: function _default() {
        return null;
      }
    }
  },
  beforeMount: function beforeMount() {
    _popupManager2.default.register(this._uid, this);
  },
  beforeDestroy: function beforeDestroy() {
    _popupManager2.default.destroy(this._uid);
  },
  destroyed: function destroyed() {
    if (this.value) {
      this.close();
    }
  },

  watch: {
    value: function value(newVal) {
      if (newVal) {
        this.open();
        this.broadcast(_base.CSS_PREFIX + 'table', 'on-visible-change', true);
      } else {
        this.close();
      }
    }
  },
  methods: {
    open: function open() {
      var _this = this;

      // 当前展开的弹出
      var openInstances = _popupManager2.default.stack;
      // 避免同一个modal重复调用了open
      if (openInstances.some(function (item) {
        return item.id === _this._uid;
      })) {
        return;
      }
      var isMulti = openInstances.length > 0;
      var zIndex = _popupManager2.default.nextZIndex();
      // 遮罩
      var backdrop = _popupManager2.default.backdrop;
      var refNode = this.$el;
      // 节点 backdrop 和节点 $el 位置对比
      var nodeOrder = refNode.compareDocumentPosition(backdrop);
      backdrop.removeAttribute('style');
      // 显示遮罩
      if (this.maskable) {
        // 首次出遮罩或者当前body内没有遮罩
        // 判断 $el 和 backdrop 的顺序，若backdrop在$el之后要重新插入
        if (!isMulti || !document.body.contains(backdrop)) {
          // document.body.insertBefore(backdrop, refNode);
          refNode.parentNode.insertBefore(backdrop, refNode);
        } else if (nodeOrder && nodeOrder === Node.DOCUMENT_POSITION_FOLLOWING) {
          (0, _dom.removeDom)(backdrop);
          // document.body.insertBefore(backdrop, refNode);
          refNode.parentNode.insertBefore(backdrop, refNode);
        }
        backdrop.style.zIndex = zIndex;
        (0, _setScrollEffect.setScrollBar)();
        (0, _dom.addClass)(document.body, className);
      }
      this.$el.style.zIndex = zIndex;
      _popupManager2.default.stackPush({ id: this._uid, zIndex: zIndex, $el: this.$el, instance: this });
      setTimeout(function () {
        (0, _dom.addClass)(backdrop, 'in');
        // 遮罩层样式添加
        if (_this.maskStyle) {
          setBackdropStyle(backdrop, _this.maskStyle);
        };
      }, 0);
    },
    close: function close() {
      _popupManager2.default.stackPop(this._uid);
      // const openInstances = PopupManager.stack;
      // const isMulti = openInstances.length > 0;
      var backdrop = _popupManager2.default.backdrop;
      // 遮罩层样式去除
      backdrop.removeAttribute('style');
      // 删除遮罩的情况：没有展开的弹出框或者展开的弹出框内不需要显示遮罩
      if (_popupManager2.default.isRemoveBackup()) {
        (0, _dom.removeClass)(backdrop, 'in');

        setTimeout(function () {
          // 当前没有显示的stack body滚动条初始为正常状态
          if (!_popupManager2.default.stack.length) {
            (0, _setScrollEffect.resetScrollBar)();
            (0, _dom.removeClass)(document.body, className);
          }
          if (_popupManager2.default.isRemoveBackup()) {
            // 遮罩移除
            (0, _dom.removeDom)(backdrop);
          }
        }, 250); // 与 backdrop 的动画时间保持一致,防止 body 上的 overflow:hidden 带来的模态框抖动问题
      } else {
        var stack = _popupManager2.default.getFirstBackupStack();
        if (stack.instance && stack.instance.maskStyle) {
          setBackdropStyle(backdrop, stack.instance.maskStyle);
        }
        backdrop.style.zIndex = stack.zIndex;
      }
    }
  }
};

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setScrollBar = setScrollBar;
exports.resetScrollBar = resetScrollBar;

var _dom = __webpack_require__(7);

function setScrollBar() {
  var bodyIsOverflowing = document.body.clientWidth < window.innerWidth;
  var scrollBarWidth = 0;
  if (bodyIsOverflowing) {
    scrollBarWidth = (0, _dom.getScrollBarWidth)();
    if (bodyIsOverflowing && scrollBarWidth !== 0) {
      document.body.style.paddingRight = scrollBarWidth + 'px';
    }
  }
}
function resetScrollBar() {
  document.body.style.paddingRight = '';
}

/***/ }),

/***/ 165:
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

// import {setScrollBar, resetScrollBar} from 'components/modal/src/setScrollEffect.js';


var _base = __webpack_require__(1);

var _transferDom = __webpack_require__(69);

var _transferDom2 = _interopRequireDefault(_transferDom);

var _helper = __webpack_require__(3);

var _index = __webpack_require__(119);

var _index2 = _interopRequireDefault(_index);

var _icon = __webpack_require__(6);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: _base.CSS_PREFIX + 'drawer',
  components: { BytedIcon: _icon2.default },

  directives: { TransferDom: _transferDom2.default },

  mixins: [_index2.default],

  props: {
    // 是否可见
    value: {
      type: Boolean,
      default: false
    },
    // 左滑入or右滑入
    placement: {
      type: String,
      validator: function validator(value) {
        return (0, _helper.isOneOf)(value, ['left', 'right']);
      },

      default: 'right'
    },
    // 面板宽度
    width: {
      type: [Number, String],
      default: 256
    },
    // 是否显示关闭按钮
    closable: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    // 抽屉样式
    drawerStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },

  data: function data() {
    return {
      innerValue: this.value
    };
  },


  computed: {
    hasHeader: function hasHeader() {
      return this.$slots.header || this.title !== '';
    },
    baseClass: function baseClass() {
      var clsArr = [_base.CSS_PREFIX + 'drawer', _base.CSS_PREFIX + 'drawer-' + this.placement];
      if (!this.hasHeader) {
        clsArr.push(_base.CSS_PREFIX + 'drawer-no-header');
      }
      if (!this.maskable) {
        clsArr.push(_base.CSS_PREFIX + 'drawer-no-mask');
      }
      return clsArr;
    },
    drawerWrapperStyle: function drawerWrapperStyle() {
      var wrapperStyle = {
        width: this.width + 'px'
      };
      return _extends({}, this.drawerStyle, wrapperStyle);
    }
  },

  watch: {
    value: function value(newVal) {
      var _this = this;

      if (newVal) {
        this.$emit('show');
        this.innerValue = newVal;
      } else {
        this.$emit('hide');
        // 动画的消失需要250ms，等动画完成再关闭组件
        setTimeout(function () {
          _this.innerValue = newVal;
        }, 250);
      }
    },
    innerValue: function innerValue(newVal) {
      if (newVal) {
        // this.addBackdrop();
      } else {
          // this.$nextTick(()=>{
          //   this.resetBodyScrollBar();
          // });
        }
    }
  },
  destroyed: function destroyed() {
    this.close();
  },

  methods: {
    onModalClose: function onModalClose() {
      this.$emit('input', false);
    },
    onMaskClick: function onMaskClick() {
      if (this.maskClosable) {
        this.$emit('input', false);
      }
    },

    // checkScrollBar() {
    //   const masks = document.getElementsByClassName(`${ CSS_PREFIX }drawer`) || [];
    //   return Array.from(masks).some((item) => item.dataset['show'] === 'true');
    // },
    // setBodyScrollBar() {
    //   setScrollBar();
    //   document.body.style.overflow = 'hidden';
    // },
    // resetBodyScrollBar() {
    //   if (this.checkScrollBar()) return false;
    //   resetScrollBar();
    //   document.body.style.overflow = '';
    // },
    afterEnter: function afterEnter() {
      this.$emit('shown');
    },
    afterLeave: function afterLeave() {
      this.$emit('hidden');
    }
  }
};

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(19);

var _vue2 = _interopRequireDefault(_vue);

var _dom = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 激活态初始zIndex
if (typeof _vue2.default.prototype.$bytedZIndex === 'undefined') {
  _vue2.default.prototype.$bytedZIndex = 2000;
}
// 遮罩层
var backdrop = document.createElement('div');
(0, _dom.addClass)(backdrop, 'byted-modal-backdrop fade');

var PopupManager = {
  // 弹出层实例
  instances: {},
  // 存储当前显示的弹出层的栈，顺序为点击显示的顺序
  stack: [],
  backdrop: backdrop,
  // zindex 增加
  nextZIndex: function nextZIndex() {
    return _vue2.default.prototype.$bytedZIndex++;
  },

  // 弹出层示例注册
  register: function register(id, instance) {
    PopupManager.instances[id] = instance;
  },

  // 弹出层示例销毁
  destroy: function destroy(id) {
    PopupManager.instances[id] = null;
    delete PopupManager.instances[id];
  },

  // getOpenInstances(currentId) {
  //   return Object.keys(PopupManager.instances).filter((key) => {
  //     return PopupManager.instances[key].value && +key !== currentId;
  //   }).map((key) => PopupManager.instances[key]);
  // },
  stackPush: function stackPush(_ref) {
    var id = _ref.id,
        zIndex = _ref.zIndex,
        $el = _ref.$el,
        instance = _ref.instance;

    this.stack.push({
      id: id,
      zIndex: zIndex,
      $el: $el,
      instance: instance
    });
  },
  stackPop: function stackPop(id) {
    if (this.stack.length && this.stack[this.stack.length - 1].id === id) {
      this.stack.pop();
    } else {
      var idIndex = this.stack.findIndex(function (item) {
        return item.id === id;
      });
      if (idIndex !== -1) {
        this.stack.splice(idIndex, 1);
      }
    }
  },

  // 删除遮罩的情况：没有展开的弹出框或者展开的弹出框内不需要显示遮罩
  isRemoveBackup: function isRemoveBackup() {
    var _this = this;

    return !this.stack.length || this.stack.every(function (item) {
      return !_this.instances[item.id].maskable;
    });
  },

  // 获取堆栈中需首个需要显示遮罩
  getFirstBackupStack: function getFirstBackupStack() {
    var index = this.stack.length - 1;
    while (index >= 0) {
      var id = this.stack[index].id;
      if (this.instances[id].maskable) {
        return this.stack[index];
      }
      index--;
    }
    return null;
  }
};
exports.default = PopupManager;

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

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _drawer = __webpack_require__(319);

var _drawer2 = _interopRequireDefault(_drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_drawer2.default.install = function (Vue) {
  Vue.component(_drawer2.default.name, _drawer2.default);
};

exports.default = _drawer2.default;

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_drawer_vue__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_drawer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_drawer_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_drawer_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_drawer_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_720b9976_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_drawer_vue__ = __webpack_require__(320);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_drawer_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_720b9976_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_drawer_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_720b9976_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_drawer_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"},{name:"show",rawName:"v-show",value:(_vm.innerValue),expression:"innerValue"}],class:_vm.baseClass,style:(_vm.drawerStyle),attrs:{"data-transfer":true,"data-show":_vm.value},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.onMaskClick($event)}}},[_c('transition',{attrs:{"name":'move-'+_vm.placement},on:{"after-enter":_vm.afterEnter,"after-leave":_vm.afterLeave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.value),expression:"value"}],staticClass:"bui-drawer-wrapper",style:(_vm.drawerWrapperStyle)},[(_vm.closable)?_c('byted-icon',{staticClass:"bui-drawer-icon-close",attrs:{"name":"close"},on:{"click":_vm.onModalClose}}):_vm._e(),_vm._v(" "),(_vm.hasHeader)?_c('div',{staticClass:"bui-drawer-header"},[(_vm.$slots.header)?_vm._t("header"):_c('span',{staticClass:"bui-drawer-header-title"},[_vm._v(_vm._s(_vm.title))])],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"bui-drawer-body"},[(_vm.$slots.body)?_vm._t("body"):_vm._t("default")],2)],1)])],1)}
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

/***/ 69:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/directives/transfer-dom");

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