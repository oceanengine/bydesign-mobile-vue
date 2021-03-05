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
/******/ 	return __webpack_require__(__webpack_require__.s = 360);
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

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(1);

exports.default = {
  inject: ['rootMenu'],
  props: {
    paddingLeft: {
      type: Number,
      default: function _default() {
        return this.$options.name === _base.CSS_PREFIX + 'menu-item-group' ? 8 : 16;
      }
    }
  },
  computed: {
    paddingStyle: function paddingStyle() {
      var paddingLeft = this.rootMenu.paddingLeft;
      var parent = this.$parent;
      var flag = this;
      if (!this.rootMenu.collapse) {
        while (parent && parent.$options.name !== _base.CSS_PREFIX + 'menu') {
          if ([_base.CSS_PREFIX + 'submenu', _base.CSS_PREFIX + 'menu-item-group'].indexOf(parent.$options.name) !== -1) {
            paddingLeft += flag.paddingLeft;
            flag = parent;
          }
          parent = parent.$parent;
        }
      } else {
        paddingLeft = 16;
      }

      return { paddingLeft: paddingLeft + 'px' };
    },
    indexPath: function indexPath() {
      var paths = [this.index];
      var parent = this.$parent;
      while (parent && parent.$options.name !== _base.CSS_PREFIX + 'menu') {
        if (parent.index) {
          paths.unshift(parent.index);
        }
        parent = parent.$parent;
      }
      return paths;
    },
    parentMenu: function parentMenu() {
      var parent = this.$parent;
      while (parent && [_base.CSS_PREFIX + 'menu', _base.CSS_PREFIX + 'submenu'].indexOf(parent.$options.name) === -1) {
        parent = parent.$parent;
      }
      return parent;
    }
  }
};

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(1);

var _emitter = __webpack_require__(5);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//

exports.default = {
  name: _base.CSS_PREFIX + 'menu',
  mixins: [_emitter2.default],
  provide: function provide() {
    return {
      rootMenu: this
    };
  },


  props: {
    defaultActive: {
      type: String,
      default: ''
    },
    defaultOpeneds: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    uniqueOpened: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'light',
      validator: function validator(val) {
        return ['light', 'dark'].indexOf(val) !== -1;
      }
    },
    router: {
      type: Boolean,
      default: false
    },
    paddingLeft: {
      type: Number,
      default: 24
    },
    collapse: {
      type: Boolean,
      default: false
    },
    transfer: {
      type: Boolean,
      default: true
    },
    popperClass: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      activeIndex: this.defaultActive,
      openedMenus: this.defaultOpeneds.length > 0 && !this.collapse ? this.defaultOpeneds.slice(0) : [],
      items: {},
      submenus: {},
      tempOpenedMenus: []
    };
  },

  computed: {
    baseClass: function baseClass() {
      var classArr = [_base.CSS_PREFIX + 'menu', 'bui-menu-ul'];
      if (this.theme === 'light') {
        classArr.push('bui-menu-light');
      }
      if (this.theme === 'dark') {
        classArr.push('bui-menu-dark');
      }
      if (this.collapse) {
        classArr.push('bui-menu-collapse');
      }
      return classArr;
    },

    // 更新key值 触发内部collapse强制渲染
    forceUpdateKey: function forceUpdateKey() {
      return Number(this.collapse);
    }
  },
  watch: {
    items: function items() {
      this.updateActiveIndex();
    },
    defaultActive: function defaultActive(val) {
      this.updateActiveIndex(val);
    },
    defaultOpeneds: function defaultOpeneds(value) {
      if (!this.collapse) {
        this.openedMenus = value.slice(0);
      }
    },
    collapse: function collapse(value) {
      if (value) {
        this.tempOpenedMenus = JSON.parse(JSON.stringify(this.openedMenus));
        this.openedMenus = [];
      } else {
        this.openedMenus = this.tempOpenedMenus;
      }
    }
  },

  mounted: function mounted() {
    this.initOpenedMenu();
    this.$on('submenu-click', this.handleSubmenuClick);
    this.$on('item-click', this.handleItemClick);
  },

  methods: {
    updateActiveIndex: function updateActiveIndex(val) {
      var item = this.items[val] || this.items[this.activeIndex] || this.items[this.defaultActive];
      if (item) {
        this.activeIndex = item.index;
        this.initOpenedMenu();
      } else {
        this.activeIndex = null;
      }
    },
    initOpenedMenu: function initOpenedMenu() {
      var _this = this;

      var item = this.items[this.activeIndex];
      if (item && !this.collapse) {
        item.indexPath.forEach(function (index) {
          var submenu = _this.submenus[index];
          submenu && _this.openMenu(submenu.index, submenu.indexPath);
        });
      }
    },
    addSubmenu: function addSubmenu(item) {
      this.$set(this.submenus, item.index, item);
    },
    removeSubmenu: function removeSubmenu(item) {
      delete this.submenus[item.index];
    },
    handleSubmenuClick: function handleSubmenuClick(submenu) {
      var index = submenu.index,
          indexPath = submenu.indexPath;

      var isOpened = this.openedMenus.indexOf(index) !== -1;

      if (isOpened) {
        this.closeMenu(index);
        this.$emit('close', index, indexPath);
      } else {
        this.openMenu(index, indexPath);
        this.$emit('open', index, indexPath);
      }
    },
    addItem: function addItem(item) {
      this.$set(this.items, item.index, item);
    },
    removeItem: function removeItem(item) {
      delete this.items[item.index];
    },
    handleItemClick: function handleItemClick(item) {
      var _this2 = this;

      var index = item.index,
          indexPath = item.indexPath;

      var oldActiveIndex = this.activeIndex;
      if (index) {
        this.activeIndex = index;
      }

      this.$emit('select', index, indexPath, item);

      if (this.router && index) {
        this.routeToItem(item, function (error) {
          _this2.activeIndex = oldActiveIndex;
          if (error) console.error(error);
        });
      }
      if (this.collapse) {
        this.openedMenus = [];
      }
    },
    routeToItem: function routeToItem(item, onError) {
      var route = item.route || item.index;
      try {
        this.$router.push(route, function () {}, onError);
      } catch (e) {
        console.log(e);
      }
    },
    openMenu: function openMenu(index, indexPath) {
      if (this.openedMenus.indexOf(index) !== -1) {
        return;
      }
      if (this.uniqueOpened) {
        this.openedMenus = this.openedMenus.filter(function (submenuIndex) {
          return indexPath.indexOf(submenuIndex) !== -1;
        });
      }
      this.openedMenus.push(index);
    },
    closeMenu: function closeMenu(index) {
      var i = this.openedMenus.indexOf(index);
      if (i !== -1) {
        this.openedMenus.splice(i, 1);
      }
    },
    open: function open(index) {
      var _this3 = this;

      var indexPath = this.submenus[index.toString()].indexPath;

      indexPath && indexPath.forEach(function (i) {
        return _this3.openMenu(i, indexPath);
      });
    },
    close: function close(index) {
      this.closeMenu(index);
    }
  }
};

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(1);

var _commonLogic = __webpack_require__(130);

var _commonLogic2 = _interopRequireDefault(_commonLogic);

var _emitter = __webpack_require__(5);

var _emitter2 = _interopRequireDefault(_emitter);

var _collapseTransition = __webpack_require__(46);

var _collapseTransition2 = _interopRequireDefault(_collapseTransition);

var _icon = __webpack_require__(6);

var _icon2 = _interopRequireDefault(_icon);

var _popper = __webpack_require__(9);

var _popper2 = _interopRequireDefault(_popper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHOW_TIMEOUT = 100;
exports.default = {
  name: _base.CSS_PREFIX + 'submenu',
  components: { BuiCollapseTransition: _collapseTransition2.default, BytedIcon: _icon2.default, BytedPopper: _popper2.default },
  mixins: [_commonLogic2.default, _emitter2.default],
  props: {
    index: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      disabled: false,
      submenus: {},
      items: {},
      mouseInChild: false,
      popperOptions: {
        type: Object,
        default: function _default() {
          return {
            modifiers: {
              flip: {
                enabled: true
              },
              hide: {
                enabled: false
              },
              preventOverflow: {
                enabled: true,
                boundariesElement: 'viewport'
              }
            }
          };
        }
      },
      popperEl: null
    };
  },

  computed: {
    opened: function opened() {
      return this.rootMenu.openedMenus.indexOf(this.index) > -1;
    },
    active: function active() {
      var isActive = false;
      var submenus = this.submenus;
      var items = this.items;

      Object.keys(items).forEach(function (index) {
        if (items[index].active) {
          isActive = true;
        }
      });

      Object.keys(submenus).forEach(function (index) {
        if (submenus[index].active) {
          isActive = true;
        }
      });

      return isActive;
    },
    collapseWrapperClass: function collapseWrapperClass() {
      var classArr = ['bui-menu-ul-collapse-wrapper'];
      if (this.rootMenu.theme === 'dark') {
        classArr.push('bui-menu-ul-collapse-wrapper-dark');
      }
      return classArr;
    },
    baseClass: function baseClass() {
      var classArr = [_base.CSS_PREFIX + 'submenu', 'bui-menu-ul'];
      if (this.opened) {
        classArr.push('bui-submenu-opened');
      }
      if (this.disabled) {
        classArr.push('bui-submenu-disabled');
      }
      return classArr;
    },
    submenuTitleClass: function submenuTitleClass() {
      var classArr = ['bui-submenu-title'];
      classArr.push('bui-submenu-' + this.rootMenu.theme);
      if (this.active) {
        classArr.push('bui-submenu-active');
      }
      return classArr;
    }
  },
  watch: {
    opened: function opened(newVal) {
      newVal ? this.broadcast(_base.CSS_PREFIX + 'popper', 'bui.popper.update') : this.broadcast(_base.CSS_PREFIX + 'popper', 'bui.popper.destroy');
    }
  },
  created: function created() {
    var _this = this;

    this.$on('mouse-enter-child', function () {
      _this.mouseInChild = true;
      clearTimeout(_this.timeout);
    });
    this.$on('mouse-leave-child', function () {
      _this.mouseInChild = false;
      clearTimeout(_this.timeout);
    });
  },
  mounted: function mounted() {
    this.parentMenu.addSubmenu(this);
    this.rootMenu.addSubmenu(this);
    this.popperEl = this.$refs.popperRef;
  },
  beforeDestroy: function beforeDestroy() {
    this.parentMenu.removeSubmenu(this);
    this.rootMenu.removeSubmenu(this);
  },

  methods: {
    addSubmenu: function addSubmenu(item) {
      this.$set(this.submenus, item.index, item);
    },
    removeSubmenu: function removeSubmenu(item) {
      delete this.submenus[item.index];
    },
    addItem: function addItem(item) {
      this.$set(this.items, item.index, item);
    },
    removeItem: function removeItem(item) {
      delete this.items[item.index];
    },
    handleClick: function handleClick() {
      if (this.disabled || this.rootMenu.collapse) {
        return;
      }
      this.dispatch(_base.CSS_PREFIX + 'menu', 'submenu-click', this);
    },
    handleTitleMouseenter: function handleTitleMouseenter() {
      this.$emit('title-mouseenter', this);
    },
    handleTitleMouseleave: function handleTitleMouseleave() {
      this.$emit('title-mouseleave', this);
    },
    handleMouseenter: function handleMouseenter() {
      var _this2 = this;

      var showTimeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SHOW_TIMEOUT;
      var rootMenu = this.rootMenu,
          disabled = this.disabled;

      if (!rootMenu.collapse || disabled) {
        return;
      }
      this.dispatch(_base.CSS_PREFIX + 'submenu', 'mouse-enter-child');
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this2.rootMenu.openMenu(_this2.index, _this2.indexPath);
      }, showTimeout);
    },
    handleMouseleave: function handleMouseleave() {
      var _this3 = this;

      var deepDispatch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var rootMenu = this.rootMenu;

      var currentParent = null;
      if (!rootMenu.collapse) {
        return;
      }
      this.dispatch(_base.CSS_PREFIX + 'submenu', 'mouse-leave-child');
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        !_this3.mouseInChild && _this3.rootMenu.closeMenu(_this3.index);
      }, this.hideTimeout);

      if (deepDispatch) {
        if (this.$parent.$options.name === _base.CSS_PREFIX + 'submenu') {
          this.$parent.handleMouseleave(true);
        }
        if (this.$parent.$options.name === _base.CSS_PREFIX + 'menu-item-group') {
          currentParent = this.$parent;
          while (currentParent.$options.name !== _base.CSS_PREFIX + 'submenu') {
            currentParent = currentParent.$parent;
          }
          currentParent.handleMouseleave && currentParent.handleMouseleave(true);
        }
      }
    }
  },
  render: function render(h) {
    var _this4 = this;

    var submenuTitleClass = this.submenuTitleClass,
        baseClass = this.baseClass,
        $slots = this.$slots,
        opened = this.opened,
        rootMenu = this.rootMenu,
        popperOptions = this.popperOptions,
        index = this.index,
        collapseWrapperClass = this.collapseWrapperClass,
        popperEl = this.popperEl;


    var popperMenu = h(
      'byted-popper',
      {
        directives: [{
          name: 'show',
          value: opened
        }],
        attrs: {
          reference: popperEl,
          'popper-options': popperOptions,
          'append-to-body': rootMenu.transfer,

          placement: 'right-start'
        },
        'class': ['bui-submenu-collapse', rootMenu.popperClass] },
      [h(
        'div',
        {
          'class': collapseWrapperClass,
          on: {
            'mouseenter': function mouseenter() {
              return _this4.handleMouseenter();
            },
            'mouseleave': function mouseleave() {
              return _this4.handleMouseleave(true);
            }
          }
        },
        [h(
          'div',
          { 'class': 'bui-menu-ul-wrapper' },
          [rootMenu.$children.map(function (item) {
            return item.index;
          }).indexOf(index) > -1 ? h(
            'div',
            { style: this.paddingStyle, 'class': 'bui-menu-ul-popper-title' },
            [$slots.title]
          ) : null, h(
            'ul',
            {
              'class': 'bui-menu-ul'
            },
            [$slots.default]
          )]
        )]
      )]
    );

    var inlineMenu = h(
      'ul',
      {
        directives: [{
          name: 'show',
          value: opened
        }],

        'class': 'bui-menu-ul'
      },
      [$slots.default]
    );

    return h(
      'li',
      {
        ref: 'popperRef',
        'class': baseClass,
        on: {
          'mouseenter': function mouseenter() {
            return _this4.handleMouseenter();
          },
          'mouseleave': function mouseleave() {
            return _this4.handleMouseleave(false);
          }
        }
      },
      [h(
        'div',
        {
          style: this.paddingStyle,
          'class': submenuTitleClass,
          on: {
            'click': this.handleClick,
            'mouseenter': this.handleTitleMouseenter,
            'mouseleave': this.handleTitleMouseleave
          }
        },
        [this.$slots.title, h('byted-icon', {
          attrs: {
            name: rootMenu.collapse ? 'angle-right' : 'angle-down'
          },
          'class': 'bui-submenu-icon'
        })]
      ), rootMenu.collapse ? popperMenu : h('bui-collapse-transition', [inlineMenu])]
    );
  }
};

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(1);

var _commonLogic = __webpack_require__(130);

var _commonLogic2 = _interopRequireDefault(_commonLogic);

var _emitter = __webpack_require__(5);

var _emitter2 = _interopRequireDefault(_emitter);

var _popper = __webpack_require__(9);

var _popper2 = _interopRequireDefault(_popper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  name: _base.CSS_PREFIX + 'menu-item',
  components: _defineProperty({}, _popper2.default.name, _popper2.default),
  mixins: [_commonLogic2.default, _emitter2.default],
  props: {
    index: {
      default: null,
      validator: function validator(val) {
        return typeof val === 'string' || val === null;
      }
    },
    route: {
      type: [String, Object],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      popperVisible: false,
      popperEl: null
    };
  },

  computed: {
    active: function active() {
      return this.index === this.rootMenu.activeIndex;
    },
    baseClass: function baseClass() {
      var classArr = [_base.CSS_PREFIX + 'menu-item', 'bui-menu-ul'];
      if (this.rootMenu.theme === 'light') {
        classArr.push('bui-menu-item-light');
      }
      if (this.rootMenu.theme === 'dark') {
        classArr.push('bui-menu-item-dark');
      }
      if (this.active) {
        classArr.push('bui-menu-item-active');
      }
      if (this.disabled) {
        classArr.push('bui-menu-item-disabled');
      }
      return classArr;
    }
  },
  watch: {
    popperVisible: function popperVisible(newVal) {
      newVal ? this.broadcast(_base.CSS_PREFIX + 'popper', 'bui.popper.update') : this.broadcast(_base.CSS_PREFIX + 'popper', 'bui.popper.destroy');
    }
  },
  mounted: function mounted() {
    this.parentMenu.addItem(this);
    this.rootMenu.addItem(this);
    this.popperEl = this.$refs.popperRef;
  },
  beforeDestroy: function beforeDestroy() {
    this.parentMenu.removeItem(this);
    this.rootMenu.removeItem(this);
  },

  methods: {
    onMouseEnter: function onMouseEnter() {
      this.popperVisible = true;
      this.$emit('item-mouseenter', this);
    },
    onMouseLeave: function onMouseLeave() {
      this.popperVisible = false;
      this.$emit('item-mouseleave', this);
    },
    handleClick: function handleClick() {
      if (!this.disabled) {
        this.dispatch(_base.CSS_PREFIX + 'menu', 'item-click', this);
        this.$emit('click', this);
      }
    }
  },
  render: function render(h) {
    var paddingStyle = this.paddingStyle,
        rootMenu = this.rootMenu,
        handleClick = this.handleClick,
        onMouseEnter = this.onMouseEnter,
        onMouseLeave = this.onMouseLeave,
        $slots = this.$slots,
        baseClass = this.baseClass,
        parentMenu = this.parentMenu,
        popperVisible = this.popperVisible,
        popperEl = this.popperEl;

    return h(
      'li',
      {
        ref: 'popperRef',
        style: paddingStyle,
        'class': baseClass,
        on: {
          'click': handleClick,
          'mouseenter': onMouseEnter,
          'mouseleave': onMouseLeave
        }
      },
      [parentMenu.$options.name === _base.CSS_PREFIX + 'menu' && rootMenu.collapse && $slots.title ? [h(
        'div',
        { 'class': 'bui-menu-item-icon' },
        [$slots.default]
      ), h(
        'byted-popper',
        {
          directives: [{
            name: 'show',
            value: popperVisible
          }],
          attrs: {
            reference: popperEl,
            'append-to-body': rootMenu.transfer,
            placement: 'right-middle'
          },
          'class': ['bui-menu-item-popper', 'bui-menu-item-popper-' + rootMenu.theme]
        },
        [$slots.title]
      )] : [$slots.default, $slots.title]]
    );
  }
};

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(1);

var _commonLogic = __webpack_require__(130);

var _commonLogic2 = _interopRequireDefault(_commonLogic);

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

exports.default = {
  name: _base.CSS_PREFIX + 'menu-item-group',

  mixins: [_commonLogic2.default],

  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {};
  },

  computed: {
    extendCLass: function extendCLass() {
      return [].concat([_base.CSS_PREFIX + 'menu-item-group', 'bui-menu-ul'], this.rootMenu.theme === 'light' ? 'bui-menu-item-group-light' : 'bui-menu-item-group-dark');
    }
  }
};

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = __webpack_require__(361);

var _menu2 = _interopRequireDefault(_menu);

var _submenu = __webpack_require__(363);

var _submenu2 = _interopRequireDefault(_submenu);

var _menuItem = __webpack_require__(364);

var _menuItem2 = _interopRequireDefault(_menuItem);

var _menuItemGroup = __webpack_require__(365);

var _menuItemGroup2 = _interopRequireDefault(_menuItemGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_menu2.default.Submenu = _submenu2.default;
_menu2.default.MenuItem = _menuItem2.default;
_menu2.default.MenuItemGroup = _menuItemGroup2.default;
_menu2.default.install = function (Vue) {
  Vue.component(_menu2.default.name, _menu2.default);
  Vue.component(_submenu2.default.name, _submenu2.default);
  Vue.component(_menuItem2.default.name, _menuItem2.default);
  Vue.component(_menuItemGroup2.default.name, _menuItemGroup2.default);
};
exports.default = _menu2.default;

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37a33398_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__ = __webpack_require__(362);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37a33398_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37a33398_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{key:_vm.forceUpdateKey,class:_vm.baseClass},[_vm._t("default")],2)}
var staticRenderFns = []


/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submenu_vue__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submenu_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submenu_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submenu_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submenu_vue___default.a,
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue___default.a,
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_group_vue__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_group_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_group_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_group_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30ab4637_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_item_group_vue__ = __webpack_require__(366);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_group_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30ab4637_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_item_group_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30ab4637_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_item_group_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.extendCLass},[_c('div',{staticClass:"bui-menu-item-group-title",style:(_vm.paddingStyle)},[(!_vm.$slots.title)?[_vm._v(_vm._s(_vm.title))]:_vm._t("title")],2),_vm._v(" "),_c('ul',{staticClass:"bui-menu-ul"},[_vm._t("default")],2)])}
var staticRenderFns = []


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/utils-vue/collapse-transition");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/mixins/emitter");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/icon");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/popper");

/***/ })

/******/ });