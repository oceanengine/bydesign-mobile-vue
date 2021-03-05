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
/******/ 	return __webpack_require__(__webpack_require__.s = 256);
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

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;

var _base = __webpack_require__(1);

var _helper = __webpack_require__(3);

var _raf = __webpack_require__(258);

var _icon = __webpack_require__(6);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: _base.CSS_PREFIX + 'carousel',
  components: {
    BytedIcon: _icon2.default
  },
  props: {
    type: {
      type: String,
      default: 'plane',
      validator: function validator(val) {
        return (0, _helper.isOneOf)(val, ['plane', 'card']);
      }
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    },
    value: {
      type: Number,
      default: 0
    },
    dotsStyle: {
      type: Object,
      default: function _default() {
        return {
          align: 'left',
          outside: false,
          dotsWidth: ''
        };
      }
    },
    dotsType: {
      type: String,
      default: 'solid',
      validator: function validator(val) {
        return (0, _helper.isOneOf)(val, ['solid', 'dotted', 'none']);
      }
    },
    arrow: {
      type: String,
      default: 'hover',
      validator: function validator(val) {
        return (0, _helper.isOneOf)(val, ['hover', 'always', 'never']);
      }
    }
  },
  provide: function provide() {
    return {
      carousel: this
    };
  },
  data: function data() {
    return {
      hover: false,
      items: [],
      timer: null,
      currentIndex: -1,
      showIndex: -2,
      transitionFlag: false, // 是否开启 transition 动画
      computedWidth: 0,
      computedHeight: 0,
      offset: 0 // 容器的偏移量
    };
  },

  computed: {
    baseClass: function baseClass() {
      return [_base.CSS_PREFIX + 'carousel'];
    },
    containerClass: function containerClass() {
      var classes = [_base.CSS_PREFIX + 'carousel-container'];
      if (this.dotsStyle.outside || this.type === 'card' && this.dotsType !== 'none') {
        classes.push('carousel-outside-container');
      }
      return classes;
    },
    dotsClasses: function dotsClasses() {
      var classes = [_base.CSS_PREFIX + 'carousel-dots'];
      if (this.dotsType === 'none') {
        classes.push('bui-carousel-dots-none');
      }
      if (this.dotsStyle.outside || this.type === 'card') {
        classes.push('bui-carousel-outside-dots');
      }
      if (this.dotsStyle.align) {
        classes.push('carousel-' + this.dotsStyle.align);
      }
      return classes;
    },
    isCard: function isCard() {
      return this.type === 'card';
    },

    // 单个的宽度
    itemWidth: function itemWidth() {
      if (this.isCard) {
        return this.computedWidth * 0.5;
      } else {
        // 常规模式下,单个宽度等于组件宽度
        return this.computedWidth;
      }
    },
    itemsCount: function itemsCount() {
      return this.items.length;
    },
    minOffset: function minOffset() {
      var rect = this.$el.getBoundingClientRect();
      return rect.width - this.itemWidth * this.itemsCount;
    },
    containerSize: function containerSize() {
      if (this.isCard) {
        return this.itemWidth * this.itemsCount;
      } else {
        return this.itemWidth * this.itemsCount;
      }
    },
    containerStyle: function containerStyle() {
      var width = this.containerSize;
      return {
        width: width + 'px',
        transitionDuration: (this.transitionFlag ? '400' : 0) + 'ms',
        transform: 'translateX(' + this.offset + 'px)'
      };
    },
    dotsComputedStyle: function dotsComputedStyle() {
      var style = {};
      if (this.dotsStyle.dotsWidth) {
        style.width = this.dotsStyle.dotsWidth + 'px';
        if (this.dotsType === 'dotted') {
          style.height = this.dotsStyle.dotsWidth + 'px';
          style.borderRadius = this.dotsStyle.dotsWidth / 2 + 'px';
        }
      }
      return style;
    }
  },
  watch: {
    autoplay: {
      immediate: true,
      handler: function handler(val) {
        val ? this.startTimer() : this.pauseTimer();
      }
    }
  },
  created: function created() {
    this.updateItems();
  },
  mounted: function mounted() {
    this.initOffset();
  },

  methods: {
    updateItems: function updateItems() {
      this.items = this.$children.filter(function (child) {
        return child.$options.name === _base.CSS_PREFIX + 'carousel-item';
      });
      this.updateChildProps();
    },
    startTimer: function startTimer() {
      if (!this.autoplay) return;
      this.timer = setInterval(this.playSlides, this.interval);
    },
    pauseTimer: function pauseTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    handleMouseEnter: function handleMouseEnter() {
      this.hover = true;
      this.pauseTimer();
    },
    handleMouseLeave: function handleMouseLeave() {
      this.hover = false;
      this.startTimer();
    },
    updateChildProps: function updateChildProps() {
      this.items.forEach(function (item, index) {
        item.index = index;
      });
    },

    // 自动播放
    playSlides: function playSlides() {
      var _this = this;

      this.fixPosition();
      (0, _raf.doubleRaf)(function () {
        _this.transitionFlag = true;
        _this.move(1);
      });
    },
    leftBtnClick: function leftBtnClick() {
      this.prev();
    },
    rightBtnClick: function rightBtnClick() {
      this.next();
    },
    getShowIndex: function getShowIndex(step) {
      var showIndex = this.showIndex,
          itemsCount = this.itemsCount;

      if (step) {
        var min = 0;
        var max = itemsCount - 1;
        if (this.loop) {
          min = -1;
          max = itemsCount;
          if (this.isCard) {
            min = -2;
            max = itemsCount + 1;
          }
        }
        return range(showIndex + step, min, max);
      }
      return showIndex;
    },
    getTargetOffset: function getTargetOffset(targetIndex) {
      if (this.isCard) {
        var offset = -(targetIndex - 1) * this.itemWidth; // 每次移动一张卡片的距离
        return offset;
      } else {
        var _offset = -targetIndex * this.itemWidth;
        return _offset;
      }
    },
    initOffset: function initOffset() {
      this.showIndex = this.value;
      this.syncCurrentIndex();
      if (this.$el) {
        var rect = this.$el.getBoundingClientRect();
        this.computedWidth = +this.width || rect.width;
        this.computedHeight = +this.height || rect.height;
      }
      this.transitionFlag = false;
      if (this.type === 'card') {
        this.setCardZindex(this.currentIndex, 0);
      }
      this.move(0);
    },

    // 修正位置
    fixPosition: function fixPosition() {
      this.transitionFlag = false;
      if (this.showIndex <= -1) {
        this.move(this.itemsCount);
      }
      if (this.showIndex >= this.itemsCount) {
        this.move(-this.itemsCount);
      }
    },

    // 将 showIndex 同步到 currentIndex
    syncCurrentIndex: function syncCurrentIndex() {
      this.currentIndex = (this.showIndex + this.itemsCount) % this.itemsCount;
    },
    updateItemsStyle: function updateItemsStyle() {
      this.items.forEach(function (item) {
        return item.updateItemStyle();
      });
    },

    // 移动
    move: function move(step) {
      var _this2 = this;

      var minOffset = this.minOffset,
          containerSize = this.containerSize,
          itemsCount = this.itemsCount;

      if (!this.isCard) {
        if (itemsCount <= 1) return; // 只有一张图片,不做处理
        var showIndex = this.getShowIndex(step);
        var targetOffset = this.getTargetOffset(showIndex);
        if (this.loop) {
          if (this.items[0]) {
            this.items[0].silentTrans = targetOffset < minOffset;
            this.items[0].offset = targetOffset < minOffset ? containerSize : 0;
          }
          if (this.items[itemsCount - 1]) {
            this.items[itemsCount - 1].silentTrans = targetOffset > 0;
            this.items[itemsCount - 1].offset = targetOffset > 0 ? -containerSize : 0;
          }
        }
        this.showIndex = showIndex;
        this.syncCurrentIndex();
        this.offset = targetOffset;
      } else {
        if (itemsCount <= 1) return; // 只有一张图片,不做处理
        var _showIndex = this.getShowIndex(step);
        var _targetOffset = this.getTargetOffset(_showIndex);

        this.items.forEach(function (item, index) {
          var itemOffset = 0;
          if (index === _showIndex) {
            itemOffset = -_this2.itemWidth / 2;
          } else if (index > _showIndex) {
            itemOffset = -_this2.itemWidth;
          } else {
            itemOffset = 0;
          }
          item.offset = itemOffset;
        });
        if (this.loop) {}
        this.showIndex = _showIndex;
        this.syncCurrentIndex();
        this.offset = _targetOffset;
      }
      this.updateItemsStyle();
      this.$emit('change', this.currentIndex);
    },

    // 指示器点击
    dotsClick: function dotsClick(targetIndex) {
      this.transitionFlag = true;
      var step = targetIndex - this.showIndex;
      if (this.type === 'card') {
        this.setCardZindex(targetIndex, step);
      }
      this.move(step);
    },

    //  暴露给外部手动切换方法
    setActiveItem: function setActiveItem(targetIndex) {
      this.dotsClick(targetIndex);
    },
    prev: function prev() {
      var _this3 = this;

      this.fixPosition();
      (0, _raf.doubleRaf)(function () {
        _this3.transitionFlag = true;
        _this3.move(-1);
      });
    },
    next: function next() {
      var _this4 = this;

      this.fixPosition();
      (0, _raf.doubleRaf)(function () {
        _this4.transitionFlag = true;
        _this4.move(1);
      });
    },

    // 设置 Card 模式下的 z-index
    setCardZindex: function setCardZindex(targetIndex, step) {
      var nextIndex = targetIndex + step;
      var prevIndex = this.currentIndex;
      this.items.forEach(function (item, index) {
        if (index === prevIndex) {
          item.zIndex = 2;
        } else if (index === nextIndex) {
          item.zIndex = 3;
        } else if (index === targetIndex) {
          item.zIndex = 4;
        } else {
          item.zIndex = 1;
        }
      });
      this.updateItemsStyle();
    },

    // 卡片点击
    cardItemClick: function cardItemClick(targetIndex) {
      var _this5 = this;

      this.transitionFlag = false;
      this.fixPosition();
      this.updateItemsStyle();
      var step = targetIndex - this.showIndex;
      this.setCardZindex(targetIndex, step);
      (0, _raf.doubleRaf)(function () {
        _this5.transitionFlag = true;
        _this5.move(step);
      });
    }
  }
};

/***/ }),

/***/ 144:
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

var _base = __webpack_require__(1);

var CARD_SCALE = 0.88;

exports.default = {
  name: _base.CSS_PREFIX + 'carousel-item',
  inject: ['carousel'],
  data: function data() {
    return {
      index: 0,
      offset: 0,
      zIndex: 1,
      silentTrans: false, // 无延时的变化标志
      itemStyle: {}
    };
  },

  computed: {
    baseClass: function baseClass() {
      var classList = [_base.CSS_PREFIX + 'carousel-item'];
      if (this.isCard) {
        classList.push('bui-carousel-item-card');
      }
      if (this.isCurrent) {
        classList.push('bui-active-item');
      }
      return classList;
    },
    isCard: function isCard() {
      return this.carousel.type === 'card';
    },
    isCurrent: function isCurrent() {
      return this.carousel.currentIndex === this.index;
    },
    scale: function scale() {
      if (this.isCard) {
        return this.isCurrent ? 1 : CARD_SCALE;
      }
      return 1;
    },
    baseStyle: function baseStyle() {
      return _extends({}, this.itemStyle, {
        width: this.carousel.itemWidth + 'px'
      });
    }
  },
  created: function created() {
    this.carousel && this.carousel.updateItems();
    this.updateItemStyle();
  },
  beforeDestroy: function beforeDestroy() {
    var _this = this;

    this.$nextTick(function () {
      _this.carousel && _this.carousel.updateItems();
      _this.carousel.initOffset();
    });
  },

  methods: {
    handleItemClick: function handleItemClick() {
      if (this.carousel && this.isCard) {
        var index = this.carousel.items.indexOf(this);
        this.carousel.cardItemClick(index);
      }
    },
    updateItemStyle: function updateItemStyle() {
      var transitionFlag = !this.silentTrans && this.carousel.transitionFlag;
      this.itemStyle = {
        zIndex: '' + this.zIndex,
        width: this.carousel.itemWidth + 'px',
        transitionDuration: (transitionFlag ? '400' : 0) + 'ms',
        transform: 'translateX(' + this.offset + 'px) scale(' + this.scale + ')'
      };
      this.silentTrans = false;
    }
  }
};

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _carousel = __webpack_require__(257);

var _carousel2 = _interopRequireDefault(_carousel);

var _carouselItem = __webpack_require__(260);

var _carouselItem2 = _interopRequireDefault(_carouselItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_carousel2.default.install = function (Vue) {
  Vue.component(_carousel2.default.name, _carousel2.default);
  Vue.component(_carouselItem2.default.name, _carouselItem2.default);
};

exports.default = _carousel2.default;

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_vue__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18a58880_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_carousel_vue__ = __webpack_require__(259);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18a58880_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_carousel_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18a58880_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_carousel_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raf = raf;
exports.doubleRaf = doubleRaf;
exports.cancelRaf = cancelRaf;
/**
 * requestAnimationFrame polyfill
 */

var prev = Date.now();

/* istanbul ignore next */
function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}

/* istanbul ignore next */
var root = window;

/* istanbul ignore next */
var iRaf = root.requestAnimationFrame || fallback;

/* istanbul ignore next */
var iCancel = root.cancelAnimationFrame || root.clearTimeout;

function raf(fn) {
  return iRaf.call(root, fn);
}

// double raf for animation
function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}

function cancelRaf(id) {
  iCancel.call(root, id);
}

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.baseClass,on:{"mouseenter":_vm.handleMouseEnter,"mouseleave":_vm.handleMouseLeave}},[_c('div',{class:_vm.containerClass,style:(_vm.containerStyle)},[_vm._t("default")],2),_vm._v(" "),(_vm.arrow !== 'never' && _vm.type !== 'card')?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.arrow === 'always' || _vm.hover),expression:"arrow === 'always' || hover"}],staticClass:"bui-carousel-arrow-btn bui-carousel-arrow-left",on:{"click":_vm.leftBtnClick}},[_c('byted-icon',{attrs:{"color":"#E4E9ED","name":"angle-left","width":"16px","height":"16px"}})],1):_vm._e(),_vm._v(" "),(_vm.arrow !== 'never' && _vm.type !== 'card')?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.arrow === 'always' || _vm.hover),expression:"arrow === 'always' || hover"}],staticClass:"bui-carousel-arrow-btn bui-carousel-arrow-right",on:{"click":_vm.rightBtnClick}},[_c('byted-icon',{attrs:{"color":"#E4E9ED","name":"angle-right","width":"16px","height":"16px"}})],1):_vm._e(),_vm._v(" "),_c('ul',{class:_vm.dotsClasses},_vm._l((_vm.items),function(item,index){return _c('li',{key:index,class:{'bui-carousel-is-active': index === _vm.currentIndex},on:{"click":function($event){return _vm.dotsClick(index)}}},[_c('div',{staticClass:"bui-carousel-btn",class:{'bui-carousel-btn-dotted': _vm.dotsType === 'dotted'},style:(_vm.dotsComputedStyle)})])}),0)])}
var staticRenderFns = []


/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_item_vue__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_item_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2952f70f_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_carousel_item_vue__ = __webpack_require__(261);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2952f70f_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_carousel_item_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2952f70f_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_carousel_item_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.baseClass,style:(_vm.baseStyle),on:{"click":_vm.handleItemClick}},[_vm._t("default")],2)}
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

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/icon");

/***/ })

/******/ });