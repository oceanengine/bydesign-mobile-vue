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
/******/ 	return __webpack_require__(__webpack_require__.s = 329);
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

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(1);

var _popupManager = __webpack_require__(22);

var _popupManager2 = _interopRequireDefault(_popupManager);

var _dom = __webpack_require__(7);

var _emitter = __webpack_require__(5);

var _emitter2 = _interopRequireDefault(_emitter);

var _icon = __webpack_require__(6);

var _icon2 = _interopRequireDefault(_icon);

var _transferDom = __webpack_require__(69);

var _transferDom2 = _interopRequireDefault(_transferDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var boxWidth = 820;
var boxHeight = 494;
// 交互参照doc图片预览交互，弹框出现按钮停留几秒
exports.default = {
  name: _base.CSS_PREFIX + 'img-preview',
  directives: { TransferDom: _transferDom2.default },
  components: {
    BytedIcon: _icon2.default
  },
  mixins: [_emitter2.default],
  props: {
    options: {
      type: Object,
      default: function _default() {
        return {
          images: []
        };
      }
    }
  },
  data: function data() {
    return {
      show: false,
      curPosition: 0,
      scale: 1,
      rotate: 0,
      naturalWidth: 0,
      naturalHeight: 0,
      top: 0,
      left: 0,
      imgShow: false,
      dragging: false,
      fullScreenMode: true,
      isStart: true,
      btnShow: {
        close: true,
        tool: true,
        prveArrow: true,
        nextArrow: true
      },
      mousePos: {
        x: 0,
        y: 0
      },
      // 相对于容器中心的偏移量
      imgOffsetPos: {
        x: 0,
        y: 0
      },
      toolbox: ['zoom-out', 'zoom-in', 'rotate', 'full-screen'],
      zIndex: 0
    };
  },

  computed: {
    baseClass: function baseClass() {
      var classArr = [_base.CSS_PREFIX + 'img-preview'];
      if (this.fullScreenMode) {
        classArr.push('bui-preview-fullscreen');
      }
      return classArr;
    },
    curImgUrl: function curImgUrl() {
      var curImgUrl = this.options.images[this.curPosition];
      return curImgUrl;
    },
    hasPrevImg: function hasPrevImg() {
      return this.options.images[this.curPosition - 1] || '';
    },
    hasNextImg: function hasNextImg() {
      return this.options.images[this.curPosition + 1] || '';
    },

    // 是否按高度填充
    isHeigthFill: function isHeigthFill() {
      var ratio = boxWidth / boxHeight;
      var isHeigth = true;
      if (this.naturalWidth / this.naturalHeight > ratio) {
        isHeigth = false;
      }
      return isHeigth;
    },
    imgStyle: function imgStyle() {
      return {
        height: this.isHeigthFill ? boxHeight + 'px' : 'auto',
        width: !this.isHeigthFill ? boxWidth + 'px' : 'auto'

      };
    },
    imgContainerStyle: function imgContainerStyle() {
      return {
        transform: 'rotate(' + this.rotate + 'deg) scale(' + this.scale + ') translate3d(' + this.left / this.scale + 'px, ' + this.top / this.scale + 'px, 0)'
      };
    }
  },
  watch: {
    show: function show() {
      if (this.show) {
        (0, _dom.on)(document, 'keyup', this.escKeyup);
      } else {
        (0, _dom.off)(document, 'keyup', this.escKeyup);
      }
    },
    curPosition: function curPosition() {
      this.imgShow = false;
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.show = true;
    this.$nextTick(function () {
      _this.zIndex = _popupManager2.default.nextZIndex();
    });
    this.curPosition = this.options.startPosition;
    this.timerId = setTimeout(function () {
      _this.isStart = false;
      _this.btnShow = {
        close: false,
        tool: false,
        prveArrow: false,
        nextArrow: false
      };
    }, 2000);
  },

  methods: {
    cancelTimeout: function cancelTimeout() {
      if (!this.timerId) return;
      window.clearTimeout(this.timerId);
      this.timerId = null;
    },
    changeImg: function changeImg(step) {
      this.curPosition = this.curPosition + step;
    },
    imgMousewheel: function imgMousewheel(e) {
      e.preventDefault();
      var wheel = e.wheelDelta;
      var delta = Math.max(-1, Math.min(1, wheel));
      if (delta < 0) {
        this.zoomImg(-0.05);
      } else {
        this.zoomImg(0.05);
      }
    },
    handleMousemove: function handleMousemove(e) {
      if (this.isStart) return;
      if (this.dragging) {
        this.clearBtnShow();
        return;
      }
      if (!this.$refs['imgContainer']) return;
      var rect = this.$refs['imgContainer'].getBoundingClientRect();
      var curX = e.clientX;
      var curY = e.clientY;

      // close
      if (curY - rect.y < 130) {
        this.btnShow.close = true;
      } else {
        this.btnShow.close = false;
      }
      // prev-arrow
      if (curX - rect.x < 130 && curY - rect.top > 130 && rect.bottom - curY > 130) {
        this.btnShow.prveArrow = true;
      } else {
        this.btnShow.prveArrow = false;
      }
      // next-arrow
      if (rect.right - curX < 130 && curY - rect.top > 130 && rect.bottom - curY > 130) {
        this.btnShow.nextArrow = true;
      } else {
        this.btnShow.nextArrow = false;
      }
      // tool
      if (curY - rect.y > 480) {
        this.cancelTimeout();
        this.btnShow.tool = true;
      } else {
        this.btnShow.tool = false;
      }
    },
    handleMouseleave: function handleMouseleave() {
      if (this.isStart) return;
      this.clearBtnShow();
    },
    clearBtnShow: function clearBtnShow() {
      var _this2 = this;

      if (this.isStart) return;
      Object.keys(this.btnShow).forEach(function (k, i) {
        return _this2.btnShow[k] = false;
      });
    },
    setImgPos: function setImgPos() {
      this.top = this.imgOffsetPos.y;
      this.left = this.imgOffsetPos.x;
    },
    setMousePos: function setMousePos(e) {
      this.mousePos.x = e.clientX;
      this.mousePos.y = e.clientY;
    },
    imgMousedown: function imgMousedown(e) {
      e.preventDefault();
      if (this.disabled) {
        return false;
      }
      this.onDragStart(e);
      (0, _dom.on)(window, 'mousemove', this.onDragging);
      (0, _dom.on)(window, 'mouseup', this.onDragEnd);
    },
    onDragStart: function onDragStart(e) {
      this.dragging = true;
      this.setMousePos(e);
    },
    onDragging: function onDragging(e) {
      if (!this.dragging) return;
      this.imgOffsetPos.x = e.clientX - this.mousePos.x + this.imgOffsetPos.x;
      this.imgOffsetPos.y = e.clientY - this.mousePos.y + this.imgOffsetPos.y;
      this.setMousePos(e);
      this.setImgPos();
    },
    onDragEnd: function onDragEnd(e) {
      this.dragging = false;
      (0, _dom.off)(window, 'mousemove', this.onDragging);
      (0, _dom.off)(window, 'mouseup', this.onDragEnd);
    },
    handleClose: function handleClose() {
      this.show = false;
    },
    afterEnter: function afterEnter() {
      this.$emit('shown');
    },
    afterLeave: function afterLeave() {
      this.$emit('hidden');
    },

    // 图片加载完成后
    imgLoad: function imgLoad(e) {
      var target = e.target;
      this.naturalWidth = target.naturalWidth;
      this.naturalHeight = target.naturalHeight;
      this.resetImg();
      this.imgShow = true; // 防抖动,图片加载成功后才显示
    },
    resetImg: function resetImg() {
      this.rotate = 0;
      this.scale = 1;
      this.imgOffsetPos.x = 0;
      this.imgOffsetPos.y = 0;
      this.setImgPos();
    },
    toolClick: function toolClick(toolName) {
      var _this3 = this;

      var handleFun = {
        'zoom-out': function zoomOut() {
          return _this3.zoomImg(-0.1);
        },
        'zoom-in': function zoomIn() {
          return _this3.zoomImg(0.1);
        },
        'rotate': function rotate() {
          return _this3.rotateImg(90);
        },
        'origin-screen': function originScreen() {
          return _this3.originScreen();
        },
        'full-screen': function fullScreen() {
          return _this3.fullScreen();
        },
        'download': function download() {
          return _this3.download();
        }
      };
      handleFun[toolName]();
    },
    zoomImg: function zoomImg(step) {
      this.scale = this.scale + step;
      if (this.scale <= 0.1) this.scale = 0.1;
      if (this.scale >= 5) this.scale = 5;
    },
    rotateImg: function rotateImg(step) {
      this.rotate = this.rotate + step;
    },
    originScreen: function originScreen() {
      this.toolbox = ['zoom-out', 'zoom-in', 'rotate', 'full-screen'];
      this.resetImg();
    },
    fullScreen: function fullScreen() {
      this.resetImg();
      var dw = document.documentElement.clientWidth;
      var dh = document.documentElement.clientHeight;
      var screen = this.isHeigthFill ? dh : dw;
      var box = this.isHeigthFill ? boxHeight : boxWidth;
      this.scale = screen / box;
      this.toolbox = ['zoom-out', 'zoom-in', 'rotate', 'origin-screen'];
      this.setImgPos();
    },
    download: function download() {
      // 有跨域图片下载的情况
      var src = this.curImgUrl;
      var canvas = document.createElement('canvas');
      var img = document.createElement('img');
      img.onload = function (e) {
        canvas.width = img.width;
        canvas.height = img.height;
        var context = canvas.getContext('2d');
        context.drawImage(img, 0, 0, img.width, img.height);
        canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
        canvas.toBlob(function (blob) {
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = src.split('/').pop();
          link.click();
        }, 'image/jpeg');
      };
      img.setAttribute('crossOrigin', 'Anonymous');
      img.src = src;
      this.img = null;
      this.canvas = null;
    },
    escKeyup: function escKeyup(e) {
      var keyCode = window.event ? e.keyCode : e.which;
      if (keyCode === 27) {
        this.options.escClosable && this.handleClose();
      }
    },
    maskClick: function maskClick() {
      this.options.maskClosable && this.handleClose();
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

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _imgPreview = __webpack_require__(330);

var _imgPreview2 = _interopRequireDefault(_imgPreview);

var _imgPreview3 = __webpack_require__(332);

var _imgPreview4 = _interopRequireDefault(_imgPreview3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_imgPreview4.default.install = function (Vue) {
  Vue.prototype.$imgPreview = _imgPreview4.default;
  Vue.prototype.$imgPreviewConstructor = Vue.extend(_imgPreview2.default);
};

exports.default = _imgPreview4.default;

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_img_preview_vue__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_img_preview_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_img_preview_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_img_preview_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_img_preview_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fbd3c552_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_img_preview_vue__ = __webpack_require__(331);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_img_preview_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fbd3c552_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_img_preview_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fbd3c552_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_img_preview_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"preview-fade"},on:{"after-enter":_vm.afterEnter,"after-leave":_vm.afterLeave}},[(_vm.show)?_c('div',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"modal",class:_vm.baseClass,style:(("zIndex:" + _vm.zIndex)),attrs:{"data-transfer":"true"},on:{"click":_vm.maskClick}},[_c('div',{staticClass:"bui-modal-dialog modal-dialog"},[_c('div',{ref:"imgContainer",staticClass:"bui-preview-content",on:{"mousemove":_vm.handleMousemove,"mouseleave":_vm.handleMouseleave}},[_c('div',{staticClass:"bui-preview-img-container",style:(_vm.imgContainerStyle),on:{"click":function($event){$event.stopPropagation();}}},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.imgShow),expression:"imgShow"}],ref:"img",staticClass:"bui-preview-img",style:(_vm.imgStyle),attrs:{"src":_vm.curImgUrl},on:{"mousewheel":_vm.imgMousewheel,"mousedown":_vm.imgMousedown,"load":_vm.imgLoad}})]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.btnShow.close),expression:"btnShow.close"}],staticClass:"bui-preview-close-btn",on:{"click":_vm.handleClose}},[_c('byted-icon',{attrs:{"name":"close","width":"24px","color":"#fff","height":"24px"}})],1),_vm._v(" "),(_vm.hasPrevImg)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.btnShow.prveArrow),expression:"btnShow.prveArrow"}],staticClass:"bui-preview-prev-btn",on:{"click":function($event){$event.stopPropagation();return _vm.changeImg(-1)}}},[_c('byted-icon',{attrs:{"name":"angle-down","width":"24px","height":"24px","color":"#fff"}})],1):_vm._e(),_vm._v(" "),(_vm.hasNextImg)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.btnShow.nextArrow),expression:"btnShow.nextArrow"}],staticClass:"bui-preview-next-btn",on:{"click":function($event){$event.stopPropagation();return _vm.changeImg(1)}}},[_c('byted-icon',{attrs:{"name":"angle-down","width":"24px","height":"24px","color":"#fff"}})],1):_vm._e(),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.btnShow.tool),expression:"btnShow.tool"}],staticClass:"bui-preview-tool-box",on:{"mouseenter":_vm.cancelTimeout,"click":function($event){$event.stopPropagation();}}},_vm._l((_vm.toolbox),function(item,index){return _c('byted-icon',{key:index,staticClass:"bui-preview-tool",attrs:{"name":item,"width":"24px","height":"24px","color":"#fff"},on:{"click":function($event){return _vm.toolClick(item)}}})}),1)])])]):_vm._e()])}
var staticRenderFns = []


/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var imgPreview = function imgPreview(options) {
  options = handleParam(options);
  var $dom = document.createElement('div');
  // 开始挂载
  this.$el.append($dom);
  var instance = new this.$imgPreviewConstructor();
  instance.options = options;
  instance.$mount($dom);
  return instance;
};

function handleParam(_ref) {
  var _ref$images = _ref.images,
      images = _ref$images === undefined ? [] : _ref$images,
      _ref$startPosition = _ref.startPosition,
      startPosition = _ref$startPosition === undefined ? 0 : _ref$startPosition,
      _ref$loop = _ref.loop,
      loop = _ref$loop === undefined ? true : _ref$loop,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === undefined ? function () {} : _ref$onClose,
      _ref$maskClosable = _ref.maskClosable,
      maskClosable = _ref$maskClosable === undefined ? true : _ref$maskClosable,
      _ref$escClosable = _ref.escClosable,
      escClosable = _ref$escClosable === undefined ? true : _ref$escClosable;

  return {
    images: images,
    startPosition: startPosition,
    loop: loop,
    onClose: onClose,
    maskClosable: maskClosable,
    escClosable: escClosable
  };
}
exports.default = imgPreview;

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