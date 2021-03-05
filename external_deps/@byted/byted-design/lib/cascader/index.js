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
/******/ 	return __webpack_require__(__webpack_require__.s = 262);
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

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/input");

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components;

var _base = __webpack_require__(1);

var _menu = __webpack_require__(264);

var _menu2 = _interopRequireDefault(_menu);

var _clickoutside = __webpack_require__(10);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _emitter = __webpack_require__(5);

var _emitter2 = _interopRequireDefault(_emitter);

var _locale = __webpack_require__(8);

var _locale2 = _interopRequireDefault(_locale);

var _dom = __webpack_require__(7);

var _helper = __webpack_require__(3);

var _util = __webpack_require__(147);

var _resizeObserverPolyfill = __webpack_require__(51);

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _listItem = __webpack_require__(85);

var _listItem2 = _interopRequireDefault(_listItem);

var _tag = __webpack_require__(91);

var _tag2 = _interopRequireDefault(_tag);

var _icon = __webpack_require__(6);

var _icon2 = _interopRequireDefault(_icon);

var _popper = __webpack_require__(9);

var _popper2 = _interopRequireDefault(_popper);

var _input = __webpack_require__(14);

var _input2 = _interopRequireDefault(_input);

var _checkbox = __webpack_require__(15);

var _checkbox2 = _interopRequireDefault(_checkbox);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _renderFormat = function _renderFormat(value, context) {
  if (context.multiple === true) {
    return value[value.length - 1];
  }
  return value.join('/');
};
exports.default = {
  name: _base.CSS_PREFIX + 'cascader',

  components: (_components = {}, _defineProperty(_components, _menu2.default.name, _menu2.default), _defineProperty(_components, 'ListItem', _listItem2.default), _defineProperty(_components, 'BytedTag', _tag2.default), _defineProperty(_components, 'BytedIcon', _icon2.default), _defineProperty(_components, 'BytedPopper', _popper2.default), _defineProperty(_components, 'BytedInput', _input2.default), _defineProperty(_components, 'BytedCheckbox', _checkbox2.default), _components),

  directives: { clickoutside: _clickoutside2.default },

  mixins: [_emitter2.default, _locale2.default],

  provide: function provide() {
    return { cascader: this };
  },


  props: {
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 选择后展示的函数，用于自定义显示格式
    renderFormat: {
      type: Function,
      default: function _default(value) {
        return _renderFormat(value, this);
      }
    },
    // 当此项为 true 时，点选每级菜单选项值都会发生变化
    changeOnSelect: {
      type: Boolean,
      default: false
    },
    // popper appendtoBody
    transfer: {
      type: Boolean,
      default: false
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false
    },
    props: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // 选中项是否要折叠
    collapseTags: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: '',
      validator: function validator(value) {
        return (0, _helper.isOneOf)(value, ['', 'error']);
      }
    },
    size: {
      type: String,
      default: 'md',
      validator: function validator(value) {
        return (0, _helper.isOneOf)(value, ['md', 'sm']);
      }
    },
    filterMethod: {
      type: Function,
      default: null
    },
    filterable: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
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
    noDataText: {
      type: String,
      default: ''
    },
    infinite: {
      type: [Boolean, Array],
      default: function _default() {
        return false;
      }
    },
    independent: {
      type: Boolean,
      default: false
    },
    popperClass: {
      type: String,
      default: ''
    },
    filterPopperWidth: {
      type: Number,
      default: 300
    }
  },

  data: function data() {
    return {
      optionShow: false,
      currentValue: this.value || [],
      popperRef: null,
      // 记录popperRef宽度
      popperRefWidth: 0,

      selectMultipleCollapseWrapperId: 'bui-select-wrapper-multiple-collapse_' + this._uid,
      query: '',
      loading: false,
      customDataSource: null
    };
  },


  computed: {
    _hasSelect: function _hasSelect() {
      if (this.value.length > 99) {
        return '99+';
      }
      return this.value.length;
    },
    _filterPlaceholder: function _filterPlaceholder() {
      return this.t(_base.LOCALE_PREFIX + '.cascader.filterPlaceholder');
    },
    baseClass: function baseClass() {
      var baseClass = _base.CSS_PREFIX + 'cascader';
      var classArr = [baseClass];
      if (this.disabled) {
        classArr.push(baseClass + '-disabled');
      }
      if (this.multiple) {
        classArr.push(baseClass + '-multiple');
      }
      var slot = this._slotContents || this.$slots || {};
      var hasCustomInput = slot['input'] != null;
      if (hasCustomInput) {
        classArr.push(baseClass + '-custom');
      }
      classArr.push(baseClass + '-' + this.size);
      return classArr;
    },
    wrapperClass: function wrapperClass() {
      var classArr = [];
      if (this.optionShow) {
        classArr.push('active');
      }
      return classArr;
    },
    innerPopperClass: function innerPopperClass() {
      var classArr = ['bui-cascader-menus-' + this.size, this.popperClass];
      if (this.filterable) {
        classArr.push('bui-cascader-menus-filterable');
      }
      return classArr;
    },
    currentLabels: function currentLabels() {
      var options = this.options;
      var labels = [];
      this.value.forEach(function (value) {
        var targetOption = options && options.filter(function (option) {
          return option.value === value;
        })[0];
        if (targetOption) {
          labels.push(targetOption.label);
          options = targetOption.children;
        }
      });
      if (this.renderFormat instanceof Function) {
        return this.renderFormat(labels);
      } else {
        return _renderFormat(labels, this);
      }
    },
    isInputShow: function isInputShow() {
      if (this.multiple && Array.isArray(this.value) && this.value.length) {
        return false;
      }
      return true;
    },
    multipleClass: function multipleClass() {
      return {
        'bui-select-wrapper-absolute': this.multiple && this.optionShow && this.collapseTags
      };
    },
    isMultipleWrapperShow: function isMultipleWrapperShow() {
      return this.multiple && this.value.length && (!this.collapseTags || this.optionShow);
    },
    isMultipeCollapseTagsShow: function isMultipeCollapseTagsShow() {
      return this.multiple && this.collapseTags && this.value.length && !this.optionShow;
    },

    // options selected Array
    rebuildOptions: function rebuildOptions() {
      var data = (0, _util.copyArray)(this.options, this.props, this.value, this.multiple, [], this.independent);
      return data;
    },

    // 计算collapseTags下tag可以显示的tag
    collapseTagsList: function collapseTagsList() {
      if (!this.multiple) {
        return [];
      }
      if (!this.popperRefWidth) {
        return this.value.length ? [this.value[0]] : [];
      }
      // 容器总宽度 - paddingLeft - paddingRight - border
      var wrapperWidth = this.popperRefWidth - 8 - 32 - 2 - 58;
      var currentWidth = 0;
      var list = [];
      var i = 0;
      var fontSize = this.size === 'sm' ? 12 : 14;
      var tagPaddingLeft = this.size === 'sm' ? 8 : 8;
      var tagPaddingRight = this.size === 'sm' ? 25 : 25;
      while (currentWidth < wrapperWidth && i < this.value.length) {
        // border + marginLeft
        var width = 2 + 4 + tagPaddingLeft + this.getSelectedLabel(this.value[i]).length * fontSize + tagPaddingRight;
        if (currentWidth + width < wrapperWidth) {
          list.push(this.value[i]);
          currentWidth += width;
        } else {
          break;
        }
        i++;
      }
      return list.length ? list : [this.value[0]];
    },
    showClear: function showClear() {
      var hasValue = this.currentValue.length > 0;
      return this.clearable && !this.disabled && hasValue;
    },
    querySelections: function querySelections() {
      var _this = this;

      if (this.customDataSource) return this.customDataSource;
      var selections = [];
      var saveSelection = function saveSelection(item) {
        selections.push({
          label: item._label,
          value: item._value,
          display: item._label,
          item: item,
          children: item.children,
          disabled: !!item.disabled,
          isLeaf: item.children && item.children.length > 0 ? false : true
        });
      };
      var getSelections = function getSelections(arr, label, value) {
        for (var i = 0; i < arr.length; i++) {
          var item = arr[i];
          item._label = label ? label + ' / ' + item.label : item.label;
          item._value = value ? value.concat([item.value]) : [item.value];
          if (item.children && item.children.length) {
            getSelections(item.children, item._label, item._value);
            delete item._label;
            delete item._value;
          } else {
            saveSelection(item);
          }
        }
      };
      getSelections(this.options);
      selections = selections.filter(function (item) {
        return item.label ? item.label.indexOf(_this.query) > -1 : false;
      }).map(function (item) {
        item.display = item.display.replace(new RegExp(_this.query, 'g'), '<em>' + _this.query + '</em>');
        return item;
      });
      return selections;
    },
    optionsMenuVisibile: function optionsMenuVisibile() {
      return !this.filterable || this.filterable && this.query === '';
    },
    multipleSelectedIds: function multipleSelectedIds() {
      if (!this.multiple) return [];
      return this.value.map(function (arr) {
        return arr.join('-');
      });
    },
    listWidth: function listWidth() {
      if (this.filterPopperWidth > 0) {
        return this.filterPopperWidth - 24 - 24;
      }
      return this.popperRefWidth - 24 - 24;
    },
    listItemStyle: function listItemStyle() {
      var style = {};
      if (this.listWidth) style.maxWidth = this.listWidth + 'px';
      return style;
    }
  },
  watch: {
    value: function value(newVal) {
      this.currentValue = newVal;
      if (this.multiple) {
        // value change 改变 poperRef
        this.changePoperRef();
      }
    },
    optionShow: function optionShow(newVal) {
      newVal ? this.broadcast(_base.CSS_PREFIX + 'popper', 'bui.popper.update') : this.broadcast(_base.CSS_PREFIX + 'popper', 'bui.popper.destroy');
      this.$emit('visible-change', newVal);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      if (!_this2.$refs.popperRef) {
        return;
      }
      _this2.changePoperRef();
      // TODO 监听DOM宽度对的动态变化
      _this2.popperRefRo = new _resizeObserverPolyfill2.default(function () {
        _this2.popperRefWidth = _this2.$refs.popperRef && _this2.$refs.popperRef.offsetWidth || 0;
      });
      _this2.popperRefRo.observe(_this2.$refs.popperRef);
      // 监测DOM变化，更新popper
      _this2.bindEvent();
    });
  },
  updated: function updated() {
    this.setPopperWidth();
  },
  beforeDestroy: function beforeDestroy() {
    try {
      if (this.popperRefRo) {
        this.popperRefRo.unobserve(this.$refs.popperRef);
        this.popperRefRo = null;
      }
      if (this.RO) {
        this.RO.unobserve(this.$refs.multiple);
        this.RO = null;
      }
    } catch (error) {
      this.popperRefRo = null;
    }
    if (this.RO && this.$refs.multiple) {
      this.RO.unobserve(this.$refs.multiple);
      this.RO = null;
    }
  },

  methods: {
    setPopperWidth: function setPopperWidth() {
      if (!this.$refs.popper || !this.$refs.popper.$el) return;
      if (this.filterable && this.query.length > 0) {
        this.$refs.popper.$el.style.width = (this.filterPopperWidth > 0 ? this.filterPopperWidth : this.popperRefWidth) + 'px';
      } else {
        this.$refs.popper.$el.style.width = 'auto';
      }
    },
    getValues: function getValues() {
      var checkStrategy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'child';

      var isParent = checkStrategy === 'parent';
      var isChild = checkStrategy === 'child';
      var isAll = checkStrategy === 'all';

      var roots = [];
      function getRoots(options) {
        options.forEach(function (item) {
          if (item.checked && !item.indeterminate) {
            roots.push(item.parent.concat(item.value));
          } else if (item.indeterminate) {
            getRoots(item.children);
          }
        });
      }

      if (isChild) return this.value;

      if (isParent || isAll) {
        getRoots(this.rebuildOptions);
      }

      if (isParent) return roots;

      var allValues = [].concat(this.value);
      var stringifiedValue = this.value.map(JSON.stringify);
      for (var i = 0; i < roots.length; i++) {
        if (stringifiedValue.indexOf(JSON.stringify(roots[i])) < 0) {
          allValues.push(roots[i]);
        }
      }

      return allValues;
    },
    togglePopperShow: function togglePopperShow(value) {
      this.changeOptionShow(value);
    },
    dropdownListClass: function dropdownListClass(item) {
      var classArr = ['bui-dropdown-list-item'];
      if (item.disabled) {
        classArr.push('bui-dropdown-list-item-disabled');
      }
      return classArr;
    },
    handleQueryInput: function handleQueryInput(value) {
      var _this3 = this;

      if (this.filterMethod) {
        this.loading = true;
        this.filterMethod(value, function (customDataSource) {
          _this3.loading = false;
          if (customDataSource) {
            _this3.customDataSource = customDataSource;
          }
        });
      }
    },
    handleSelectItem: function handleSelectItem(value, item) {
      var _this4 = this;

      if (!this.multiple) {
        this.query = '';
        this.changeOptionShow(false);
      }
      if (this.customDataSource) {
        this.$emit('custom-item-click', value, item);
        return;
      }
      if (item.item.disabled) return false;
      if (this.multiple) {
        this.handleMultipleSelectItem(item);
        return;
      }
      var diffArr = value.filter(function (item, i) {
        if (item === _this4.currentValue[i]) return item;
      });
      if (diffArr.length === value.length) return;
      this.currentValue = value;
      this.$emit('input', this.currentValue);
      this.$emit('change', this.currentValue);
      this.dispatch(_base.CSS_PREFIX + 'form-item', 'bui.form.change', [this.currentValue]);
    },
    handleMultipleSelectItem: function handleMultipleSelectItem(item) {
      var arrayHasEle = function arrayHasEle(array, element) {
        for (var j = 0; j < array.length; j++) {
          var el = array[j];
          if (el.length === element.length) {
            for (var i = 0; i < el.length; i++) {
              if (el[i] !== element[i]) {
                break;
              }
              if (i == el.length - 1) {
                // 到最后一个元素都没有出现不相等，就说明这两个数组相等。
                return j;
              }
            }
          }
        }
        return -1;
      };
      var findSubItem = function findSubItem(item, result) {
        if (item.children && item.children.length) {
          item.children.forEach(function (item) {
            findSubItem(item, result);
          });
        } else {
          var _valueArr = item._value;
          if (result.length === 0) {
            result.push(_valueArr);
          } else {
            if (arrayHasEle(result, _valueArr) === -1) {
              result.push(_valueArr);
            }
          }
        }
      };
      if (!item.isLeaf) {
        findSubItem(item, this.currentValue);
        return;
      }

      var valueArr = item.value;
      if (this.currentValue.length > 0) {
        var index = arrayHasEle(this.currentValue, valueArr);
        if (index === -1) {
          this.currentValue.push(valueArr);
        } else {
          // delete
          this.currentValue.splice(index, 1);
        }
      } else {
        this.currentValue.push(valueArr);
      }
      this.$emit('input', this.currentValue);
      this.$emit('change', this.currentValue);
      this.dispatch(_base.CSS_PREFIX + 'form-item', 'bui.form.change', [this.currentValue]);
    },
    bindEvent: function bindEvent() {
      if (this.multiple && this.$refs.multiple) {
        this.RO = new _resizeObserverPolyfill2.default(this.handleResize);
        this.RO.observe(this.$refs.multiple);
      }
    },

    // this.$refs.multiple resize,更新popper
    handleResize: function handleResize() {
      if (this.optionShow) {
        this.broadcast(_base.CSS_PREFIX + 'popper', 'bui.popper.update');
      }
    },

    // remove tag
    handleTagRemove: function handleTagRemove(curIndex) {
      var value = this.value.slice();
      value.splice(curIndex, 1);
      this.$emit('input', value);
      this.$emit('change', value);
      this.dispatch(_base.CSS_PREFIX + 'form-item', 'bui.form.change', [value]);
    },

    // 修改popper reference,在collapseTags为true时，this.$refs.multiple为绝对定位
    changePoperRef: function changePoperRef() {
      if (this.multiple && this.collapseTags && this.value.length && this.$refs.multiple) {
        this.popperRef = this.$refs.multiple;
      } else {
        this.popperRef = this.$refs.popperRef;
      }
      this.handlePopperPositionUpdate();
    },
    handlePopperPositionUpdate: function handlePopperPositionUpdate() {
      var _this5 = this;

      if (!this.optionShow) {
        return;
      }
      if (this.isMultipleWrapperShow) {
        setTimeout(function () {
          _this5.handleResize();
        }, 0);
      } else {
        this.$nextTick(function () {
          _this5.handleResize();
        });
      }
    },
    clickoutsideHandle: function clickoutsideHandle(e) {
      if (!this.optionShow) {
        return;
      }
      var target = e.target;
      var parent = target.parentNode;
      var targetId = target.getAttribute('data-id');
      var parentId = parent && parent.getAttribute ? parent.getAttribute('data-id') : '';
      // 此处select-wrapper-multiple display:none
      if (targetId === this.selectMultipleCollapseWrapperId) {
        return;
      }
      while (parent && !(0, _dom.hasClass)(parent, 'bui-cascader-menus') && parentId !== this.selectMultipleCollapseWrapperId) {
        parent = parent.parentNode;
        parentId = parent && parent.getAttribute ? parent.getAttribute('data-id') : '';
      }
      if (!parent) {
        this.changeOptionShow(false);
      }
    },
    handleSelectClick: function handleSelectClick() {
      if (this.disabled) {
        return false;
      }
      this.changeOptionShow(!this.optionShow);
    },

    // 点击箭头关闭弹框
    handleIconClick: function handleIconClick() {
      if (this.disabled) return false;
      this.changeOptionShow(!this.optionShow);
    },

    // 点击清空按钮
    handleClearClick: function handleClearClick() {
      var value = [];
      this.currentValue = value;
      this.$emit('input', value);
      this.$emit('change', value);
      this.$emit('clear', value);
      this.dispatch(_base.CSS_PREFIX + 'form-item', 'bui.form.change', [value]);
      this.changeOptionShow(false);
    },
    handleInputBlur: function handleInputBlur(e) {
      this.$emit('blur', e);
      this.dispatch(_base.CSS_PREFIX + 'form-item', 'bui.form.blur', [this.currentValue]);
    },
    handleInputFocus: function handleInputFocus(e) {
      this.$emit('focus', e);
    },
    handleMenuChange: function handleMenuChange(value) {
      var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.currentValue = value;
      this.$emit('input', value);
      this.$emit('change', value);
      this.dispatch(_base.CSS_PREFIX + 'form-item', 'bui.form.change', [value]);
      if (close) {
        this.changeOptionShow(false);
      }
    },
    changeOptionShow: function changeOptionShow(flag) {
      this.optionShow = flag;
      this.changePoperRef();
    },
    handleActiveItemChange: function handleActiveItemChange(value, close) {
      this.$emit('active-item-change', value);
      this.handleResize();
    },
    getSelectedLabel: function getSelectedLabel(item) {
      if (!this.multiple) return '';
      var option = {};
      var labels = [];
      this.rebuildOptions.some(function (opt) {
        if (opt.value === item[0]) {
          option = opt;
          return true;
        }
      });
      var curPath = item.slice();
      curPath.forEach(function (key) {
        if (option.value === key) {
          labels.push(option.label);
        }
        if (option && option.children && option.children.length) {
          option.children.some(function (opt) {
            if (opt.value === key) {
              labels.push(opt.label);
              option = opt;
              return true;
            }
          });
        }
      });
      if (this.renderFormat instanceof Function) {
        return this.renderFormat(labels);
      } else {
        return _renderFormat(labels, this);
      }
    }
  }
};

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(7);

var _util = __webpack_require__(147);

var _base = __webpack_require__(1);

var _locale = __webpack_require__(8);

var _locale2 = _interopRequireDefault(_locale);

var _expand = __webpack_require__(265);

var _expand2 = _interopRequireDefault(_expand);

var _icon = __webpack_require__(6);

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = __webpack_require__(15);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = __webpack_require__(266);

var _radio2 = _interopRequireDefault(_radio);

var _loading = __webpack_require__(12);

var _loading2 = _interopRequireDefault(_loading);

var _infiniteScroll = __webpack_require__(88);

var _infiniteScroll2 = _interopRequireDefault(_infiniteScroll);

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
//
//
//
//
//
//

exports.default = {
  name: 'cascader-menus',
  components: {
    expand: _expand2.default,
    BytedIcon: _icon2.default,
    BytedRadio: _radio2.default,
    BytedCheckbox: _checkbox2.default,
    BytedLoadingIcon: _loading2.default,
    BytedInfiniteScroll: _infiniteScroll2.default
  },
  mixins: [_locale2.default],
  inject: ['cascader'],
  props: {
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    originalOptions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    visible: {
      type: Boolean,
      default: false
    },
    // 非子节点选中是否向外派发
    changeOnSelect: {
      type: Boolean,
      default: false
    },
    transfer: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    props: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },

  data: function data() {
    return {
      activeValue: this.value.length ? !this.multiple ? this.value.slice() : this.value[0].slice() : [],
      LOCALE_PREFIX: _base.LOCALE_PREFIX
    };
  },


  computed: {
    _noDataText: function _noDataText() {
      return this.noDataText || this.t(_base.LOCALE_PREFIX + '.cascader.noDataText');
    },

    // 按照层级生成的数组
    activeOptions: {
      get: function get() {
        var _this = this;

        var loadActiveOptions = function loadActiveOptions(options, originalOptions, activeOptions, parent) {
          var level = activeOptions.length;
          activeOptions[level] = options;
          activeOptions[level].parent = parent;
          activeOptions[level].originalSiblings = originalOptions;

          var active = _this.activeValue[level];
          if (active !== undefined && active !== null) {
            options.some(function (item, i) {
              if (item.value === active) {
                options = item;
                originalOptions = originalOptions[i];
                parent = originalOptions;
                return true;
              }
              return false;
            });
            if (options && options.children) {
              loadActiveOptions(options.children, originalOptions.children, activeOptions, parent);
            }
          }
          return activeOptions;
        };
        return loadActiveOptions(this.options, this.originalOptions, [], null);
      }
    },
    menuAllChecked: function menuAllChecked() {
      return this.activeOptions.map(function (menu) {
        var flag = menu.every(function (item) {
          if (item.disabled) return true;
          return item.checked;
        });
        return flag;
      });
    },
    menuClass: function menuClass() {
      return {
        'bui-cascader-menu-multiple': this.multiple,
        'bui-cascader-menu-infinite': this.cascader.infinite,
        'bui-cascader-menu-independent-single': this.isIndependentSingle
      };
    },
    isIndependentSingle: function isIndependentSingle() {
      return this.cascader.independent && !this.multiple;
    },
    isIndependentMultiple: function isIndependentMultiple() {
      return this.cascader.independent && this.multiple;
    }
  },

  watch: {
    value: function value(newVal) {
      if (!this.multiple) {
        this.activeValue = this.value.slice();
      } else if (this.multiple && !newVal.length) {
        // 选中项为空，激活项为空
        this.activeValue = [];
      }
    },
    visible: function visible(newVal) {
      if (newVal) {
        this.$forceUpdate();
        this.handleCascaderMenuEnter();
      }
    }
  },

  methods: {
    getMenuItemClass: function getMenuItemClass(item, itemIndex, menuIndex) {
      return {
        'bui-cascader-menu-item': true,
        'bui-cascader-menu-item-children': item.children,
        'bui-cascader-menu-item-leaf': !item.children,
        'active': item.value === this.activeValue[menuIndex],
        'disabled': item.disabled
      };
    },
    shouldInfiniteable: function shouldInfiniteable(level) {
      return typeof this.cascader.infinite === 'boolean' ? this.cascader.infinite : this.cascader.infinite.indexOf(level) > -1;
    },
    handleLoadmore: function handleLoadmore(level, siblings) {
      this.cascader.$emit('loadmore', {
        level: level, parent: siblings.parent,
        siblings: siblings.originalSiblings,
        reset: this.$refs.scroll[level].reset
      });
    },

    // getMenuChecked(menu, menuIndex) {
    //   const flag = Object.keys(menu).every((key) => {
    //     if (menu[key].disabled) return true;
    //     return menu[key].checked;
    //   });
    //   return flag;
    // },
    getMenuAllIndeterminate: function getMenuAllIndeterminate(menu, menuIndex) {
      return !this.menuAllChecked[menuIndex] && menu.some(function (item) {
        // 选项checked为true or 有不确定性
        return item.indeterminate || item.checked;
      });
    },
    handleMenuCheckAll: function handleMenuCheckAll(checked, menu, menuIndex) {
      var _this2 = this;

      var value = this.value.slice();
      var result = [];
      menu.forEach(function (item) {
        if (item.disabled) return;
        if (!checked) {
          result = _this2.handleLeafNodeUnChecked(item, value);
        } else {
          result = _this2.handleLeafNodeChecked(item, value);
        }
      });
      this.$emit('change', result, !this.multiple);
    },
    handleItemClick: function handleItemClick(item, itemIndex, menuIndex) {
      var _this3 = this;

      var makeSelect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      // 展开子选项
      if (item.disabled) return;
      if (item.children) {
        this.activeValue.splice(menuIndex, this.activeValue.length, item.value);

        // independent + non-multiple
        if (this.isIndependentSingle && makeSelect) {
          this.handleSelect(item, itemIndex, menuIndex, false /* close */);
        }
        this.handleActiveItem(item, itemIndex, menuIndex);
        return;
      }

      this.handleSelect(item, itemIndex, menuIndex, !this.isIndependentSingle);
      this.$nextTick(function () {
        var menuref = _this3.$refs.cascaderMenu[menuIndex];
        menuref && (0, _dom.scrollIntoView)(menuref, menuref.getElementsByClassName('active')[0]);
      });
    },
    handleActiveItem: function handleActiveItem(item, itemIndex, menuIndex) {
      if (this.changeOnSelect) {
        this.$emit('change', this.activeValue.slice(), false);
      } else {
        this.$emit('active-item-change', this.activeValue.slice());
      }
    },
    handleSelect: function handleSelect(item, itemIndex, menuIndex) {
      var close = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !this.multiple;

      this.activeValue.splice(menuIndex, this.activeValue.length, item.value);
      var value = this.value.slice();
      if (this.multiple) {
        this.handleChecked(item, itemIndex, menuIndex);
      } else {
        value = this.activeValue.slice();
        this.$emit('change', value, close);
      }
    },
    handleChecked: function handleChecked(item, itemIndex, menuIndex) {
      if (!this.isIndependentMultiple) {
        this.activeValue.splice(menuIndex, this.activeValue.length, item.value);
      }
      var value = this.value.slice();
      var result = [];
      if (item.checked) {
        result = this.handleLeafNodeUnChecked(item, value);
      } else {
        result = this.handleLeafNodeChecked(item, value);
      }
      this.$emit('change', result, !this.multiple);
    },
    handleLeafNodeChecked: function handleLeafNodeChecked(item, result) {
      var _this4 = this;

      if (this.isIndependentMultiple) {
        if (!(0, _util.isValueChecked)(result, item.parent.concat(item.value), this.multiple)) {
          result.push(item.parent.concat(item.value));
        }
      } else {
        if (item.children && item.children.length) {
          item.children.forEach(function (cItem) {
            _this4.handleLeafNodeChecked(cItem, result);
          });
        } else if (!(0, _util.isValueChecked)(result, item.parent.concat(item.value), this.multiple)) {
          result.push(item.parent.concat(item.value));
        }
      }
      return result;
    },
    handleLeafNodeUnChecked: function handleLeafNodeUnChecked(item, result) {
      var _this5 = this;

      var currentPath = item.parent.concat(item.value);
      if (item.checked || (0, _util.isValueChecked)(result, currentPath, this.multiple)) {
        var index = result.map(function (item) {
          return JSON.stringify(item);
        }).indexOf(JSON.stringify(currentPath));
        index > -1 && result.splice(index, 1);
        if (!this.isIndependentMultiple && item.children) {
          item.children.forEach(function (cItem) {
            _this5.handleLeafNodeUnChecked(cItem, result);
          });
        }
      }
      return result;
    },
    handleParentNodeUnChecked: function handleParentNodeUnChecked(item) {},
    handleCascaderMenuEnter: function handleCascaderMenuEnter() {
      // 级联选择器打开时，处理选中项显示在可视区域
      var cascaderMenu = this.$refs.cascaderMenu || [];
      this.$nextTick(function () {
        return cascaderMenu.forEach(function (menu) {
          return (0, _dom.scrollIntoView)(menu, menu.getElementsByClassName('active')[0]);
        });
      });
    }
  }
};

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var copyArray = exports.copyArray = function copyArray(arr) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var multiple = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var parentPath = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var independent = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (!arr || !Array.isArray(arr)) {
    return arr;
  }
  var result = [];
  var configurableKeys = ['label', 'value', 'disabled', 'loading', 'hasCheckbox', 'renderLabel'];
  var childrenKey = props.children || 'children';
  arr.forEach(function (item) {
    var itemCopy = {
      parent: parentPath
    };
    configurableKeys.forEach(function (key) {
      var realKey = props[key] || key;
      var itemValue = item[realKey];
      if (itemValue !== undefined) {
        itemCopy[key] = itemValue;
      }
    });
    itemCopy.hasCheckbox = item.hasOwnProperty('hasCheckbox') ? item.hasCheckbox : multiple;
    if (Array.isArray(item[childrenKey])) {
      var path = parentPath.slice();
      path.push(itemCopy.value);
      itemCopy[childrenKey] = copyArray(item[childrenKey], props, value, multiple, path, independent);
      var hasFalse = false;
      var hasTrue = false;
      var hasIndeterminate = false;
      Object.keys(itemCopy[childrenKey]).some(function (key) {
        var item = itemCopy[childrenKey][key];
        if (!item.checked) {
          hasFalse = true;
        } else {
          hasTrue = true;
        }
        hasIndeterminate = item.indeterminate;
        return hasFalse && hasTrue || hasIndeterminate;
      });
      if (independent) {
        itemCopy.checked = isValueChecked(value, itemCopy.parent.concat(itemCopy.value), multiple);
      } else {
        itemCopy.checked = item[childrenKey].length ? hasTrue && !hasFalse : isValueChecked(value, itemCopy.parent.concat(itemCopy.value), multiple);
        itemCopy.indeterminate = hasFalse && hasTrue || hasIndeterminate;
      }
    } else {
      itemCopy.indeterminate = false;
      // console.log(value, itemCopy.parent, itemCopy.value, isValueChecked(value, itemCopy.parent.concat(itemCopy.value)));
      itemCopy.checked = isValueChecked(value, itemCopy.parent.concat(itemCopy.value), multiple);
    }
    result.push(itemCopy);
  });
  return result;
};
var isValueChecked = exports.isValueChecked = function isValueChecked(arr, value) {
  var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  return multiple ? arr.some(function (item) {
    return JSON.stringify(item) === JSON.stringify(value);
  }) : JSON.stringify(arr) === JSON.stringify(value);
};

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Expand',
  props: {
    render: {
      type: Function,
      default: null
    },
    label: {
      type: String,
      default: ''
    },
    option: {
      type: Object,
      default: function _default() {}
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      e.stopPropagation();
      this.$emit('click');
    }
  },
  render: function render() {
    var h = arguments[0];

    if (!this.render) return null;
    return h(
      'div',
      { 'class': 'bui-cascader-custom-render-item', on: {
          'click': this.handleClick
        }
      },
      [this.render(this.label, this.option)]
    );
  }
};

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/checkbox");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cascader = __webpack_require__(263);

var _cascader2 = _interopRequireDefault(_cascader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_cascader2.default.install = function (Vue) {
  Vue.component(_cascader2.default.name, _cascader2.default);
};

exports.default = _cascader2.default;

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cascader_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cascader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cascader_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cascader_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cascader_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_890a1902_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_cascader_vue__ = __webpack_require__(268);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cascader_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_890a1902_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_cascader_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_890a1902_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_cascader_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00a41086_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__ = __webpack_require__(267);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00a41086_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00a41086_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_expand_vue__ = __webpack_require__(148);
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

/***/ 266:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/radio");

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.options.length > 0)?_vm._l((_vm.activeOptions),function(menu,menuIndex){return _c('div',{key:menuIndex,ref:"cascaderMenu",refInFor:true,staticClass:"bui-cascader-menu",class:_vm.menuClass},[_c('byted-infinite-scroll',{ref:"scroll",refInFor:true,attrs:{"height":190,"disabled":!_vm.shouldInfiniteable(menuIndex)},on:{"loadmore":function($event){return _vm.handleLoadmore(menuIndex, menu)}}},[_c('ul',{staticClass:"bui-cascader-menu-list"},[(_vm.multiple && menu.length)?_c('li',{class:{
              'bui-cascader-menu-item': true,
              'bui-cascader-menu-item-checkall': true,
            },on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.handleMenuCheckAll(!_vm.menuAllChecked[menuIndex], menu, menuIndex)}}},[_c('byted-checkbox',{staticClass:"bui-cascader-menu-item-checkbox",attrs:{"value":_vm.menuAllChecked[menuIndex],"indeterminate":_vm.getMenuAllIndeterminate(menu, menuIndex)},on:{"change":function (checked) {_vm.handleMenuCheckAll(checked, menu, menuIndex)}}}),_vm._v("\n            "+_vm._s(_vm.t((_vm.LOCALE_PREFIX + ".menu.selectAll")))+"\n          ")],1):_vm._e(),_vm._v(" "),_vm._l((menu),function(item,itemIndex){return _c('li',{key:menuIndex + '' + itemIndex,ref:item.value === _vm.activeValue[menuIndex] ? 'activeItem' : null,refInFor:true,class:_vm.getMenuItemClass(item, itemIndex, menuIndex),on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.handleItemClick(item, itemIndex, menuIndex)}}},[(_vm.multiple && item.hasCheckbox)?_c('byted-checkbox',{staticClass:"bui-cascader-menu-item-checkbox",attrs:{"value":item.checked,"disabled":item.disabled,"indeterminate":item.indeterminate},on:{"change":function($event){return _vm.handleChecked(item, itemIndex, menuIndex)}}}):(_vm.isIndependentSingle)?_c('byted-radio',{staticClass:"bui-cascader-menu-item-radio",attrs:{"value":item.checked,"disabled":item.disabled},nativeOn:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.handleItemClick(item, itemIndex, menuIndex, true)}}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"bui-cascader-menu-item-content",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.handleItemClick(item, itemIndex, menuIndex)}}},[(item.renderLabel)?[_c('expand',{attrs:{"render":item.renderLabel,"label":item.label,"option":item},on:{"click":function($event){return _vm.handleItemClick(item, itemIndex, menuIndex)}}})]:[_vm._v("\n                "+_vm._s(item.label)+"\n              ")],_vm._v(" "),(item.children && item.hasOwnProperty('loading') && item.loading)?[_c('byted-loading-icon')]:[(item.children)?_c('byted-icon',{class:((item.value === _vm.activeValue[menuIndex] ? '' : 'bui-menu-item-arrow-disabled') + " bui-menu-item-arrow"),attrs:{"name":"angle-right"},on:{"click":function($event){return _vm.handleItemClick(item, itemIndex, menuIndex)}}}):_vm._e()]],2)],1)})],2),_vm._v(" "),_c('template',{slot:"loading"},[_vm._t("infinite-loading",null,null,{ level: menuIndex })],2)],2)],1)}):[_c('div',{staticClass:"bui-cascader-menu-empty"},[_c('byted-icon',{attrs:{"name":"empty"}}),_vm._v("\n      "+_vm._s(_vm._noDataText)+"\n    ")],1)]],2)}
var staticRenderFns = []


/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.clickoutsideHandle),expression:"clickoutsideHandle"}],class:_vm.baseClass},[_c('div',{ref:"popperRef",staticClass:"bui-select-wrapper",class:_vm.wrapperClass,on:{"click":_vm.handleSelectClick}},[_vm._t("input",[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isMultipleWrapperShow),expression:"isMultipleWrapperShow"}],ref:"multiple",staticClass:"bui-select-wrapper-multiple",class:_vm.multipleClass},_vm._l((_vm.value),function(item,index){return _c('byted-tag',{key:index,staticClass:"bui-select-tag",attrs:{"disabled":_vm.disabled,"plain":_vm.disabled,"size":_vm.size,"type":"default","closable":""},on:{"close":function($event){return _vm.handleTagRemove(index)}}},[_vm._v("\n          "+_vm._s(_vm.getSelectedLabel(item))+"\n        ")])}),1),_vm._v(" "),(_vm.isMultipeCollapseTagsShow)?_c('div',{staticClass:"bui-select-wrapper-multiple bui-select-wrapper-multiple-collapse",attrs:{"data-id":_vm.selectMultipleCollapseWrapperId}},[_vm._l((_vm.collapseTagsList),function(list,index){return _c('byted-tag',{key:index,staticClass:"bui-select-tag",attrs:{"disabled":_vm.disabled,"plain":_vm.disabled,"size":_vm.size,"closable":""},on:{"close":function($event){return _vm.handleTagRemove(index)}}},[_vm._v("\n          "+_vm._s(_vm.getSelectedLabel(list))+"\n        ")])}),_vm._v(" "),_c('span',{staticClass:"bui-selected-label"},[_vm._v("\n          "+_vm._s(_vm._hasSelect)+"\n        ")])],2):_vm._e(),_vm._v(" "),(_vm.isInputShow)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentLabels),expression:"currentLabels"}],ref:"input",staticClass:"bui-input text-overflow",attrs:{"placeholder":_vm.placeholder,"disabled":_vm.disabled,"readonly":"","type":"text"},domProps:{"value":(_vm.currentLabels)},on:{"blur":_vm.handleInputBlur,"focus":_vm.handleInputFocus,"input":function($event){if($event.target.composing){ return; }_vm.currentLabels=$event.target.value}}}):_vm._e()])],2),_vm._v(" "),_c('div',{class:{'bui-select-icon-wrapper': _vm.showClear}},[_c('byted-icon',{staticClass:"bui-cascader-icon bui-select-arrow-icon",class:{open:_vm.optionShow},attrs:{"name":"angle-down"},on:{"click":_vm.handleIconClick}}),_vm._v(" "),(_vm.showClear)?_c('byted-icon',{staticClass:"bui-select-icon bui-select-clear-icon",attrs:{"name":"close-circle"},on:{"click":function($event){$event.stopPropagation();return _vm.handleClearClick($event)}}}):_vm._e()],1),_vm._v(" "),_c('byted-popper',{directives:[{name:"show",rawName:"v-show",value:(_vm.optionShow),expression:"optionShow"}],ref:"popper",staticClass:"bui-cascader-menus",class:_vm.innerPopperClass,attrs:{"reference":_vm.popperRef,"popper-options":_vm.popperOptions,"append-to-body":_vm.transfer,"placement":"bottom-start"}},[(_vm.filterable)?_c('byted-input',{attrs:{"clearable":true,"placeholder":_vm._filterPlaceholder},on:{"input":_vm.handleQueryInput},model:{value:(_vm.query),callback:function ($$v) {_vm.query=$$v},expression:"query"}},[_c('template',{slot:"prefix"},[_c('byted-icon',{attrs:{"name":"search"}})],1)],2):_vm._e(),_vm._v(" "),(_vm.filterable && _vm.query !== '')?_c('list-item',{staticClass:"bui-cascader-queryselections-item",attrs:{"loading":_vm.loading,"data-source":_vm.querySelections,"props":{itemKey: 'label'},"list-width":_vm.listWidth},on:{"select":_vm.handleSelectItem},scopedSlots:_vm._u([{key:"dataSource",fn:function(ref){
var item = ref.item;
return [(_vm.multiple)?_c('byted-checkbox',{staticClass:"bui-cascader-queryselections-checkbox",attrs:{"val":item.value.join('-'),"value":_vm.multipleSelectedIds},nativeOn:{"click":function($event){return (function ($event) { return $event.preventDefault(); })($event)}}}):_vm._e(),_vm._v(" "),_c('span',{class:_vm.dropdownListClass(item),style:(_vm.listItemStyle),domProps:{"innerHTML":_vm._s(item.render ? item.display : item.display || item.label)}})]}}],null,false,683753155)}):_vm._e(),_vm._v(" "),_c('cascader-menus',{directives:[{name:"show",rawName:"v-show",value:(_vm.optionsMenuVisibile),expression:"optionsMenuVisibile"}],ref:"menu",staticClass:"bui-cascader-menus-wrapper",attrs:{"options":_vm.rebuildOptions,"original-options":_vm.options,"visible":_vm.optionShow,"multiple":_vm.multiple,"props":_vm.props},on:{"active-item-change":_vm.handleActiveItemChange,"change":_vm.handleMenuChange},scopedSlots:_vm._u([{key:"infinite-loading",fn:function(scope){return [_vm._t("infinite-loading",null,null,scope)]}}],null,true),model:{value:(_vm.currentValue),callback:function ($$v) {_vm.currentValue=$$v},expression:"currentValue"}}),_vm._v(" "),_vm._t("footer")],2)],1)}
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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(18)))

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

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/tag");

/***/ })

/******/ });