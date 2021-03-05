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
/******/ 	return __webpack_require__(__webpack_require__.s = 430);
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

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/checkbox");

/***/ }),

/***/ 204:
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
//
//
//
//
//
//
//
//
//
//
//
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

var _icon = __webpack_require__(6);

var _icon2 = _interopRequireDefault(_icon);

var _locale = __webpack_require__(8);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  name: _base.CSS_PREFIX + 'select-panel',
  components: { BytedIcon: _icon2.default },
  mixins: [_locale2.default],

  props: {
    title: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
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
    disabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    // 是否显示checkbox，不显示的时候，默认不显示已选框
    hasCheckbox: {
      type: Boolean,
      default: true
    },
    lastCheckbox: {
      // 只显示最后level的checkbox,hasCheckbox=false
      type: Boolean,
      default: false
    },
    async: { // 层级数据是否需要异步加载
      type: Boolean,
      default: false
    },
    selectedDisabled: { // selected && disabeld and not dispatch value
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 是否展示右侧已组件
    showSeletedModuler: {
      type: Boolean,
      default: true
    },
    listWidth: {
      type: String,
      default: '200px'
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hasCheckAll: {
      type: Boolean,
      default: true
    },
    emptyText: {
      type: String,
      default: ''
    },
    noDataText: {
      type: String,
      default: ''
    }
  },

  data: function data() {
    return {
      isSelectAll: false,
      className: _base.CSS_PREFIX + 'select-panel',
      list: {},
      selectedLevelIds: null, // 选中层级的id
      showList: {},
      level: 1,
      selectDetail: {},
      scrollPosition: { // buiSelectPanelLeft是否有左右 border
        left: false,
        right: false
      }
    };
  },

  computed: {
    _firstLevel: function _firstLevel() {
      return this.t(_base.LOCALE_PREFIX + '.select-panel.firstLevel');
    },
    _emptyText: function _emptyText() {
      return this.emptyText || this.t(_base.LOCALE_PREFIX + '.select-panel.emptyText');
    },
    _title: function _title() {
      return this.t(_base.LOCALE_PREFIX + '.select-panel.title');
    },
    _selectAllText: function _selectAllText() {
      return this.t(_base.LOCALE_PREFIX + '.select-panel.selectAll');
    },
    _noDataText: function _noDataText() {
      return this.noDataText || this.t(_base.LOCALE_PREFIX + '.select-panel.noDataText');
    },
    selectAll: function selectAll() {
      var showList = this.showList;
      var keys = Object.keys(showList);
      var list = this.list;
      var selectAll = {};

      keys.forEach(function (level) {
        level = parseInt(level);
        var arr = [];
        if (!level) {
          arr = showList[0];
          var options = arr;
          // const options = arr.filter((item) => {
          //   return !item.disabled;
          // });
          selectAll[level] = options.every(function (item) {
            return list[item.id] && list[item.id].selected;
          });
        } else if (showList[level]) {
          if (!(showList[level] && showList[level][0])) {
            selectAll[level] = false;
            return;
          }
          var id = list[showList[level][0].id].parent.id;
          // 过滤disabled的元素
          // const undisableds = list[id].children.filter((item) => !item.disabled);
          var undisableds = list[id].children;
          selectAll[level] = !list[id].disabled && undisableds.every(function (item) {
            return list[item.id] && list[item.id].selected;
          }) || list[id].children.every(function (item) {
            return list[item.id] && list[item.id].selected;
          });
        }
      });
      return selectAll;
    },
    optionLevel: function optionLevel() {
      return this.getLevel(this.options);
    },
    isSelectedModuleShow: function isSelectedModuleShow() {
      return this.showSeletedModuler;
    },
    rightListStyle: function rightListStyle() {
      return {
        width: this.listWidth
      };
    },
    leftStyle: function leftStyle() {
      var marginRight = this.isSelectedModuleShow ? 16 : '';
      return {
        marginRight: marginRight + 'px',
        width: this.isSelectedModuleShow ? 'calc(100% -  ' + (parseInt(this.listWidth) + marginRight) + 'px)' : '100%'
      };
    },
    leftClassName: function leftClassName() {
      var baseClass = 'bui-select-panel-left';
      var classArr = [baseClass];
      if (this.scrollPosition.left) {
        classArr.push('bui-select-panel-scrolling-left');
      }
      if (this.scrollPosition.right) {
        classArr.push('bui-select-panel-scrolling-right');
      }
      return classArr;
    }
  },
  watch: {
    options: {
      handler: function handler(newVal, oldVal) {
        if ([].concat(newVal).sort().join(',') === [].concat(oldVal).sort().join(',')) {
          return;
        }
        this.updateOption(newVal);
      },

      deep: true
    },
    value: function value(newVal, oldVal) {
      if ([].concat(newVal).sort().join(',') !== [].concat(oldVal).sort().join(',')) {
        this.optionInit(this.options, null);
      }
    }
  },
  mounted: function mounted() {
    this.optionInit(this.options, null);
    this.$set(this.showList, 0, this.options);
  },

  methods: {
    // 判定是否为最后一层
    isLastLevel: function isLastLevel(tab) {
      return tab.every(function (option) {
        return !option.children;
      });
    },

    // 触发options初始化，对外暴露的方法，不要随意改名
    updateOption: function updateOption(options) {
      options = options || this.options;
      this.optionInit(options, null);
      if (!this.async) {
        this.level = 1;
        this.$set(this.showList, 0, options);
        return;
      }
      if (this.level === 1) {
        this.$set(this.showList, 0, options);
      } else {
        if (this.list[this.selectedLevelIds].children) {
          this.$set(this.showList, this.level - 1, this.list[this.selectedLevelIds].children);
        }
      }
    },
    leftListStyle: function leftListStyle(level) {
      var leftWidth = 100 / level + '%';
      return {
        width: leftWidth,
        minWidth: this.listWidth
      };
    },
    onClearAll: function onClearAll() {
      var list = this.list || {};
      var selected = [].concat(this.value.map(function (v) {
        return v.toString();
      })).filter(function (id) {
        return list[id] && list[id].disabled;
      });
      this.$emit('input', selected);
      this.$emit('change', selected);
      this.$emit('clear', selected);
    },
    optionInit: function optionInit(option, parent) {
      var _this2 = this;

      var selected = this.value.map(function (item) {
        return item.toString();
      });

      var selectedDisabled = this.selectedDisabled.map(function (item) {
        return item.toString();
      });

      var noParent = !parent;

      var _this = this;
      if (!option) {
        return;
      }

      parent = noParent ? parent : this.list[parent.id];

      option.forEach(function (item, index) {
        var ids = [];
        // 获取子元素的所有可选id
        _this.getIds(item, ids);
        // 选项是否选中，由当前或者父元素决定或所有子元素决定
        // bugfix: ids length 为 0 时，[].every(a => !a) === true
        var isSelected = selected.includes(item.id.toString()) || ids.length && ids.every(function (id) {
          return selected.includes(id.toString());
        }) || selected.indexOf(item.id.toString()) > -1 || parent && parent.selected;

        // 当前层级判断，初始为1
        var level = noParent ? 1 : parent.level + 1;
        // 选项禁用，父组件继承
        var disabled = noParent ? item.disabled : parent.disabled || item.disabled;

        // 向下判断子元素是否都被选中禁用
        var isSelectedDisabled = selectedDisabled.includes(item.id.toString()) || item.children && !!item.children.length && item.children.every(function (item) {
          return selectedDisabled.includes(item.id.toString());
        });
        // 不确定性
        var indeterminate = _this2.getIndeterminate(selected, item, isSelected || isSelectedDisabled);
        // 向上判断父元素是否禁用
        // const selectedDisabledInclude = _this.selectedDisabledInclude(selectedDisabled, item.id);

        var obj = {};
        // set option item disabled
        item.disabled = item.disabled || disabled || isSelectedDisabled;
        _extends(obj, _this.list[item.id] || {
          active: false
        }, {
          level: level,
          parent: parent,
          selected: Boolean(isSelected || isSelectedDisabled),
          indeterminate: indeterminate
        }, item);

        // _this.$delete(_this.list, item.id);
        _this.$set(_this.list, item.id, obj);
        // if (isSelected && !noParent && index === option.length - 1) {
        //     _this.reCheckParent(parent);
        // }
        if (item.children && item.children.length > 0) {
          _this.optionInit(item.children, item);
        }
      });
    },

    // get item indeterminate
    getIndeterminate: function getIndeterminate(selectedIds, item, itemSelected) {
      var _this3 = this;

      if (itemSelected) {
        return false;
      }
      if (selectedIds.includes(item.id.toString())) {
        return true;
      }
      if (item && item.children) {
        return item.children.some(function (child) {
          if (selectedIds.includes(child.id.toString())) {
            return true;
          }
          return _this3.getIndeterminate(selectedIds, child, false);
        });
      }
      return false;
    },

    // check all indeterminate
    checkboxIndeterminate: function checkboxIndeterminate(tab, lindex) {
      var _this4 = this;

      if (this.selectAll[lindex]) {
        return false;
      }
      return tab.some(function (option) {
        return _this4.list[option.id].selected || _this4.list[option.id].indeterminate;
      });
    },

    // check selectedDisabled include current node or parent node
    selectedDisabledInclude: function selectedDisabledInclude(ids, val) {
      var parent = this.list[val] && this.list[val].parent;
      if (ids.includes(val.toString())) {
        return true;
      } else {
        if (parent) this.selectedDisabledInclude(ids, parent.id);
      }
    },
    reCheckParent: function reCheckParent(parent) {
      var isSelectAll = true;var isFirst = false;var children = [];var hasChildSelected = false;var _this = this;
      if (parent === null) {
        isFirst = true;
        children = this.options;
      } else {
        parent = this.list[parent.id] || parent || {};
        children = parent.children;
      }
      children.forEach(function (item, index) {
        var curItem = _this.list[item.id] || {};

        var hasSelected = curItem.hasOwnProperty('selected');
        if (!hasSelected || hasSelected && !curItem.selected) {
          isSelectAll = false;
        }
        if (hasSelected && curItem.selected) {
          hasChildSelected = true;
        }
      });
      if (isFirst) {
        _this.isSelectAll = isSelectAll;
        _this.hasChildSelected = hasChildSelected;
        return;
      }
      parent.hasChildSelected = hasChildSelected;
      parent.selected = isSelectAll;
      this.$set(this.list, parent.id, parent);
    },

    // setSelectedLevelIds() {
    //   const _this = this;
    //   Object.keys(this.selectedLevelIds).forEach((key) => {
    //     this.selectedLevelIds[key] = [];
    //   });
    //   this.value.forEach((item) => {
    //     const curItem = _this.list[item];
    //     if (typeof curItem === 'object') {
    //       const curLevel = _this.selectedLevelIds[curItem.level - 1] || [];
    //       curLevel.push(item);
    //       _this.$set(_this.selectedLevelIds, curItem.level - 1, curLevel);
    //     }
    //   });
    // },
    getLevel: function getLevel(option) {
      var _this5 = this;

      if (!option || option && !option.length) return 0;
      return 1 + Math.max.apply(Math, _toConsumableArray(option.map(function (item) {
        return _this5.getLevel(item.children);
      })));
    },
    onSelectAll: function onSelectAll(levelIndex) {
      levelIndex = parseInt(levelIndex);
      var flag = this.selectAll[levelIndex];
      var list = this.list;
      var option = this.showList[levelIndex];
      var parent = this.list[option[0].id].parent;
      var vm = this;
      var selected = [];
      if (this.lastCheckbox) {
        selected = [].concat(this.value.map(function (v) {
          return v.toString();
        }));
        flag ? parent.children.forEach(function (item) {
          var pos = selected.indexOf(item.id.toString());
          if (pos > -1 && !item.disabled) selected.splice(pos, 1);
        }) : parent.children.forEach(function (item) {
          if (selected.indexOf(item.id.toString()) < 0 && !item.disabled) {
            selected.push(item.id.toString());
          };
        });
      } else {
        if (!flag) {
          // select all
          if (!levelIndex) {
            // selected = selected.concat(this.value.map((v) => {
            //   return v.toString();
            // }));
            // this.checkDesSelected(this.options, selected);
            // 需要将第一级 disabled 但是已选中的拿出来
            selected = selected.concat(this.value.filter(function (v) {
              return list[v] && list[v].disabled;
            }));
            this.options.forEach(function (item) {
              if (!vm.checkChildrenDisabled(item.children) && !item.disabled && selected.indexOf(item.id.toString() === -1)) {
                selected.push(item.id.toString());
              }
            });
          } else {
            selected = selected.concat(this.value.map(function (v) {
              return v.toString();
            }));
            var parentExistDisabled = this.checkChildrenDisabled(parent.children);
            selected = this.checkDesSelected(parent.children, selected, parentExistDisabled);
            if (!this.checkChildrenDisabled(parent.children)) {
              selected.push(parent.id.toString());
            }
          }
        } else {
          // cancel select all
          if (levelIndex) {
            selected = selected.concat(this.value.map(function (v) {
              return v.toString();
            }));

            this.cancelParentSelected(parent, selected);
            this.cancelChildSelected(option, selected);

            // set child false
            selected = this.checkParentFalse(selected, parent);
          } else {
            // 需要将第一级 disabled 但是已选中的拿出来
            selected = selected.concat(this.value.filter(function (v) {
              return list[v] && list[v].disabled;
            }));
          }
        }
      }

      this.setSelectedDetail(selected);
      this.$emit('detail-change', this.selectDetail);
      this.$emit('change', selected, option);
      this.$emit('input', selected, option);
    },

    // if child is not all true, set parent false
    checkParentFalse: function checkParentFalse(selected, node) {
      if (node.parent === null) {
        return selected;
      }
      var parent = this.list[node.parent.id];
      var parentIndex = selected.indexOf(parent.id.toString());
      if (parent.selected) {
        parent.children.forEach(function (item) {
          if (item.id.toString() !== node.id.toString() && selected.indexOf(item.id.toString()) === -1) {
            selected.push(item.id.toString());
          }
        });
        if (parentIndex > -1) {
          selected.splice(parentIndex, 1);
        }
        return this.checkParentFalse(selected, parent);
      }
      return selected;
    },

    // if child is all true, set parent true
    checkParentTrue: function checkParentTrue(selected, node) {
      var list = this.list;
      if (node.parent === null) {
        return selected;
      }
      var parent = list[node.parent.id];
      var hasDisabled = this.checkChildrenDisabled(parent.children);
      var someNoSelected = parent.children.some(function (item) {
        return item.id.toString() !== node.id.toString() && !list[item.id].selected && !item.disabled;
      });
      if (!someNoSelected) {
        if (selected.indexOf(parent.id) < 0) {
          if (!hasDisabled && !this.checkChildrenDisabled(node.children)) {
            selected.push(parent.id.toString());
          }
        }

        parent.children.forEach(function (item) {
          var pos = selected.indexOf(item.id.toString());
          if (pos > -1 && !hasDisabled) selected.splice(pos, 1);
        });
        return this.checkParentTrue(selected, parent);
      }
      return selected;
    },
    cancelParentSelected: function cancelParentSelected(node, selected) {
      if (node === null) return;
      if (selected.indexOf(node.id.toString()) > -1) {
        selected.splice(selected.indexOf(node.id.toString()), 1);
      } else {
        this.cancelParentSelected(node.parent, selected);
      }
    },
    cancelChildSelected: function cancelChildSelected(option, selected) {
      var vm = this;
      if (!option) return;
      option.forEach(function (item) {
        if (selected.indexOf(item.id.toString()) > -1) {
          if (!item.disabled) {
            selected.splice(selected.indexOf(item.id.toString()), 1);
          }
        } else {
          if (!item.disabled) {
            vm.cancelChildSelected(item.children, selected);
          } else {
            selected.push(item.id);
          }
        }
      });
    },

    // set child selected
    checkDesSelected: function checkDesSelected(option, selected) {
      var hasDisabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var vm = this;
      if (!option) return selected;

      option.forEach(function (item) {
        if (selected.indexOf(item.id.toString()) > -1) {
          if (!hasDisabled) {
            selected.splice(selected.indexOf(item.id.toString()), 1);
          }
        } else {
          var hasChildDisabled = vm.checkChildrenDisabled(item.children);
          if (!hasChildDisabled && !item.disabled && hasDisabled) {
            vm.setChildUnselected(item.children, selected);
            selected.push(item.id.toString());
          }
          if (item.children) {
            vm.checkDesSelected(item.children, selected, hasChildDisabled);
          }
        }
      });
      return selected;
    },
    setChildUnselected: function setChildUnselected(option, selected) {
      if (!option) return;
      option.forEach(function (item) {
        var pos = selected.indexOf(item.id.toString());
        if (pos > -1) selected.splice(pos, 1);
      });
    },
    getLevelList: function getLevelList(level) {
      var _this6 = this;

      level = parseInt(level);
      var levelList = [];
      Object.keys(this.list).forEach(function (key) {
        if (_this6.list[key].level === level) {
          levelList.push(_this6.list[key]);
        }
      });
      return levelList;
    },
    getLevelId: function getLevelId(level) {
      var _this7 = this;

      var levelList = [];
      level = parseInt(level);
      Object.keys(this.list).forEach(function (key) {
        if (_this7.list[key].level === level) {
          levelList.push(_this7.list[key].id);
        }
      });
      return levelList;
    },
    onCheckboxChange: function onCheckboxChange(option, levelIndex) {
      var list = this.list;
      option = list[option.id];
      var flag = option.selected;
      var parent = option.parent;
      var selected = [].concat(this.value.map(function (v) {
        return v.toString();
      }));
      if (this.lastCheckbox) {
        if (flag) {
          selected.splice(selected.indexOf(option.id.toString()), 1);
        } else {
          selected.push(option.id.toString());
        }
      } else {
        if (!flag) {
          // 选中
          var hasDisabled = this.checkChildrenDisabled(option.children);
          if (option.children && option.children.length) {
            selected = this.checkDesSelected(option.children, selected, hasDisabled);
          }
          if (!hasDisabled && !option.disabled) {
            selected.push(option.id.toString());
          }
          this.checkParentTrue(selected, option);
        } else {
          // 取消选中
          this.cancelParentSelected(parent, selected);
          this.cancelChildSelected(option.children, selected);
          var pos = selected.indexOf(option.id.toString());
          if (pos > -1) selected.splice(pos, 1);
          this.checkParentFalse(selected, option);
        }
      }
      if (option.children) {
        this.onLabelClick(option);
      }

      this.setSelectedDetail(selected);
      this.$emit('detail-change', this.selectDetail);
      this.$emit('change', selected, option);
      this.$emit('input', selected, option);
    },
    onLabelClick: function onLabelClick(option) {
      var _this8 = this;

      var onlyActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      option = this.list[option.id];
      this.selectedLevelIds = option.id;
      !onlyActive && this.$emit('label-click', option);
      this.$delete(this.showList, option.level);

      if (!option.children && (this.hasCheckbox || this.lastCheckbox) && !this.disabled) {
        if (!onlyActive) {
          this.onCheckboxChange(option);
          this.level = option.level;
          return;
        }
      }
      // if (this.showList[option.level]) {
      //   const temp = this.list[this.showList[option.level][0].id];
      //   if (typeof temp === 'object' && temp.parent.id === option.id) {
      //     if (option.children && option.children.length) {
      //       this.level = option.level + 1;
      //     }
      //     return;
      //   }
      // }
      var levelIndex = option.level - 1;
      var list = this.list;
      // this.$delete(this.showList, levelIndex);
      if (option.parent === null) {
        this.$set(this.showList, levelIndex, this.options.map(function (item) {
          list[item.id].active = item.id === option.id ? true : false;
          return list[item.id];
        }));
      } else {
        var parent = this.list[option.parent.id];
        parent.children = parent.children.map(function (item) {
          list[item.id].active = item.id === option.id ? true : false;
          return list[item.id];
        });
        if (parent.children) {
          this.$set(this.showList, levelIndex, parent.children);
        }
      }
      // onlyActive 不展开下级
      if (option.children && !onlyActive) {
        if (option.children.length) {
          this.$set(this.showList, option.level, option.children.map(function (item) {
            item.disabled = item.disabled ? item.disabled : option.disabled;
            // 清除子元素 active 态 例如 focusItem [1, 11] -> [1]，11 不active
            // if (onlyActive) {
            //   item.active = false;
            // }
            return item;
          }));
        } else {
          // 展开一个空 list
          this.$set(this.showList, option.level, []);
        }
        this.level = option.level + 1;
      } else {
        this.level = option.level;
        !onlyActive && this.$emit('name-click', option);
      }

      // 多级菜单会自动滚动到最右侧
      if (this.autoScroll) {
        this.$nextTick(function () {
          var scrollDom = _this8.$refs['buiSelectPanelLeft'];
          if (scrollDom) {
            // scrollDom.scrollLeft = SCROLL_DISTANCE;
            var activeChild = scrollDom.children[levelIndex + 1];
            if (activeChild) {
              (0, _dom.scrollIntoView)(scrollDom, activeChild, 'horizontal');
            }
          }
        });
      }
      this.$nextTick(function () {
        _this8.handleLeftPanelScroll();
      });
      // if (option.children && option.children.length) {
      //   this.$delete(this.showList, option.level);
      //   if (option.children) {
      //     this.$set(this.showList, option.level, option.children);
      //   }
      //   this.level = option.level + 1;
      // } else {
      //   this.$emit('name-click', option);
      // }
    },

    // 对外暴露方法：自动定位到某个选项，不要随意改名
    focusItem: function focusItem(stack) {
      // stack: [id, id, id] 层级ID数组，索引为level
      var len = stack.length;
      for (var i = 0; i < len; i++) {
        var option = this.list[stack[i]];
        if (!option) {
          break;
        }
        this.onLabelClick(option, true);
        this.verticalScrollIntoView(option);
      }
    },
    verticalScrollIntoView: function verticalScrollIntoView(option) {
      var _this9 = this;

      // 垂直方向上某个 item 滚动到顶部可见区域
      // 如果是 autoFocus 还需要考虑纵向滚动
      var siblings = [];
      if (option.parent) {
        siblings = option.parent.children || [];
      } else {
        siblings = this.options || [];
      }
      var levelIndex = option.level - 1;
      var position = siblings.findIndex(function (item) {
        return item.id === option.id;
      });
      if (position <= -1) {
        return;
      }
      if (this.hasCheckbox || this.lastCheckbox && this.isLastLevel(siblings)) {
        position++;
      }
      this.$nextTick(function () {
        if (_this9.$refs.selectPanelModuler && _this9.$refs.selectPanelModuler[levelIndex] && _this9.$refs.selectPanelModuler[levelIndex].$refs.container) {
          var scrollContainer = _this9.$refs.selectPanelModuler[levelIndex].$refs.container;
          var activeChild = scrollContainer.children[position];
          if (activeChild) {
            (0, _dom.scrollIntoView)(scrollContainer, activeChild);
          }
        }
      });
    },
    getLevelTitle: function getLevelTitle(levelIndex, flag) {
      var title = '';
      var levelSelect = this.showList[levelIndex];
      switch (levelIndex) {
        case 0:
          title = this._firstLevel;
          break;
        default:
          title = levelSelect && levelSelect.length && !flag ? this.list[levelSelect[0].id].parent.name : this.t(_base.LOCALE_PREFIX + '.select-panel.level', { level: levelIndex + 1 });
      }
      return typeof this.title[levelIndex] === 'undefined' ? title : this.title[levelIndex] || title;
    },

    // 判断某一级别的全选是否需要disabled
    checkboxDisabled: function checkboxDisabled(data) {
      return data.every(function (item) {
        return item.disabled;
      });
    },

    // 判断子级是否包含disable
    checkChildrenDisabled: function checkChildrenDisabled(data) {
      var _this10 = this;

      if (!data) return;
      var selected = [].concat(this.value.map(function (v) {
        return v.toString();
      }));
      // disabled = true 但是已选中的，父级可以当该项目为正常项
      return data.some(function (item) {
        if (item.disabled) {
          // 如果当前项已经 disabled 了，不需要参考 children
          return selected.indexOf(item.id.toString()) <= -1;
        }
        return item.children ? _this10.checkChildrenDisabled(item.children) : item.disabled;
      });
    },
    getIds: function getIds(obj) {
      var ids = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      // 只找子元素，因为 disabled 项同样决定父级是否选中
      if (obj.children) {
        obj.children.forEach(function (child) {
          ids.push(child.id);
        });
      }
      // const vm = this;
      // if (this.checkChildrenDisabled(obj.children)) {
      //   obj.children.forEach((child) => {
      //     vm.getIds(child, ids);
      //   });
      //   return;
      // }
      // if (!obj.disabled) {
      //   ids.push(obj.id);
      // }
    },
    setSelectedDetail: function setSelectedDetail(selected) {
      var vm = this;
      this.clearDetail();
      selected.forEach(function (id) {
        if (vm.list[id]) {
          // bugfix: value 中存在 list 中不包含的数据
          vm.selectDetail[vm.list[id].level].push(id);
        }
      });
    },
    clearDetail: function clearDetail() {
      for (var i = 0; i < this.optionLevel; i++) {
        this.selectDetail[i + 1] = [];
      }
    },
    handleLeftPanelScroll: function handleLeftPanelScroll() {
      var scrollDom = this.$refs['buiSelectPanelLeft'];
      if (!scrollDom) {
        return;
      }
      var scrollWidth = scrollDom.scrollWidth;
      var scrollLeft = scrollDom.scrollLeft;
      var offsetWidth = scrollDom.offsetWidth;
      if (offsetWidth >= scrollWidth) {
        this.scrollPosition.left = false;
        this.scrollPosition.right = false;
        return;
      }
      this.scrollPosition.left = scrollLeft > 0;
      // 注意这里的 =，因为 bui-select-panel-left-moduler 有 margin-left -1 的操作，多级的时候会使子元素宽度的和大于 scrollWidth
      this.scrollPosition.right = scrollLeft + offsetWidth <= scrollWidth;
    }
  }
};

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(1);

var _locale = __webpack_require__(8);

var _locale2 = _interopRequireDefault(_locale);

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

exports.default = {
  name: _base.CSS_PREFIX + 'select-panel-moduler',
  mixins: [_locale2.default],
  props: {
    title: {
      type: String,
      default: ''
    },
    showClear: {
      type: Boolean,
      default: false
    },
    clearText: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      className: _base.CSS_PREFIX + 'select-panel-moduler'
    };
  },

  computed: {
    _clearText: function _clearText() {
      return this.clearText || this.t(_base.LOCALE_PREFIX + '.select-panel.clearText');
    },
    baseClass: function baseClass() {
      var classArr = [this.className];
      if (this.disabled) {
        classArr.push(this.className + '-disabled');
      }
      return classArr;
    }
  },
  methods: {
    onClearClick: function onClearClick() {
      if (this.disabled) return false;
      this.$emit('clearclick');
    }
  }
};

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(1);

var _expand = __webpack_require__(436);

var _checkbox = __webpack_require__(15);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _icon = __webpack_require__(6);

var _icon2 = _interopRequireDefault(_icon);

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

exports.default = {
  name: _base.CSS_PREFIX + 'select-panel-item',
  components: { Expand: _expand.Expand, BytedCheckbox: _checkbox2.default, BytedIcon: _icon2.default },
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    hasChild: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    hasRemove: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hasCheckbox: {
      type: Boolean,
      default: true
    },
    renderName: {
      type: Function,
      default: null
    },
    option: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      baseClass: _base.CSS_PREFIX + 'select-panel-item'
    };
  },

  computed: {
    className: function className() {
      var classArr = [this.baseClass];
      if (this.active) {
        classArr.push(this.baseClass + '-active');
      }
      if (this.hasRemove) {
        classArr.push(this.baseClass + '-remove');
      } else if (this.hasCheckbox) {
        classArr.push(this.baseClass + '-check');
      }
      if (this.hasChild) {
        classArr.push(this.baseClass + '-has-child');
      }
      if (this.disabled) {
        classArr.push(this.baseClass + '-disabled');
      }
      if (this.inline) {
        classArr.push(this.baseClass + '-inline');
      }
      if (this.value) {
        classArr.push(this.baseClass + '-selected');
      }
      return classArr;
    },
    isCheckShow: function isCheckShow() {
      if (this.hasRemove) {
        return false;
      }
      return this.hasCheckbox;
    },
    listClass: function listClass() {
      var classArr = [this.baseClass + '-list'];
      if (this.hasChild) {
        classArr.push(this.baseClass + '-has-icon');
      }
      return classArr;
    }
  },
  methods: {
    onCheckboxChange: function onCheckboxChange() {
      if (this.disabled) return false;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.$emit('change', args);
    },
    onNameClick: function onNameClick(event) {
      var selectPanelItemCheckboxRef = this.$refs['selectPanelItemCheckbox'];
      if (this.disabled || this.isCheckShow && selectPanelItemCheckboxRef && selectPanelItemCheckboxRef.$el.contains(event.target)) {
        return;
      }
      this.$emit('nameclick');
    },
    onRemoveClick: function onRemoveClick() {
      if (this.disabled) return false;
      this.$emit('removeclick');
    }
  }
};

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _selectPanel = __webpack_require__(431);

var _selectPanel2 = _interopRequireDefault(_selectPanel);

var _selectPanelModuler = __webpack_require__(433);

var _selectPanelModuler2 = _interopRequireDefault(_selectPanelModuler);

var _selectPanelItem = __webpack_require__(435);

var _selectPanelItem2 = _interopRequireDefault(_selectPanelItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_selectPanel2.default.install = function (Vue) {
  Vue.component(_selectPanel2.default.name, _selectPanel2.default);
  Vue.component(_selectPanelModuler2.default.name, _selectPanelModuler2.default);
  Vue.component(_selectPanelItem2.default.name, _selectPanelItem2.default);
};

exports.default = _selectPanel2.default;

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_vue__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e8dded6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_panel_vue__ = __webpack_require__(432);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e8dded6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_panel_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e8dded6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_panel_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className},[_c('div',{ref:"buiSelectPanelLeft",class:_vm.leftClassName,style:(_vm.leftStyle),on:{"&scroll":function($event){return _vm.handleLeftPanelScroll($event)}}},_vm._l((_vm.showList),function(tab,lindex){return (lindex<_vm.level)?_c('div',{key:lindex,class:['bui-select-panel-left-moduler', {'bui-select-panel-left-none': !tab.length}],style:(_vm.leftListStyle(_vm.level))},[(tab)?_c('byted-select-panel-moduler',{ref:"selectPanelModuler",refInFor:true,attrs:{"title":_vm.title[lindex] || _vm.getLevelTitle(parseInt(lindex))}},[(!tab.length)?[_c('div',{staticClass:"byted-select-panel-moduler-none"},[_c('byted-icon',{attrs:{"name":"empty"}}),_vm._v("\n            "+_vm._s(_vm._noDataText)+"\n          ")],1)]:[(_vm.hasCheckAll && (_vm.hasCheckbox || (_vm.lastCheckbox && _vm.isLastLevel(tab))))?_c('byted-select-panel-item',{attrs:{"value":_vm.selectAll[lindex],"indeterminate":_vm.checkboxIndeterminate(tab, lindex),"inline":_vm.inline,"disabled":_vm.disabled || _vm.checkboxDisabled(tab),"active":_vm.selectAll[lindex] || _vm.checkboxIndeterminate(tab, lindex),"name":_vm._selectAllText},on:{"change":function($event){return _vm.onSelectAll(lindex)},"nameclick":function($event){return _vm.onSelectAll(lindex)}}}):_vm._e()],_vm._v(" "),_vm._l((tab),function(option){return [_c('byted-select-panel-item',{key:option.id,attrs:{"option":option,"value":_vm.list[option.id].selected,"indeterminate":_vm.list[option.id].indeterminate,"name":option.name,"render-name":option.renderName || null,"inline":_vm.inline,"disabled":_vm.disabled || option.disabled,"has-checkbox":_vm.hasCheckbox || (_vm.lastCheckbox && !option.children),"active":_vm.list[option.id].active || _vm.list[option.id].selected,"has-child":!!option.children},on:{"nameclick":function($event){return _vm.onLabelClick(option)},"change":function($event){return _vm.onCheckboxChange(option, lindex)}}})]})],2):_vm._e()],1):_vm._e()}),0),_vm._v(" "),(_vm.isSelectedModuleShow)?_c('div',{staticClass:"bui-select-panel-right",class:{'bui-select-panel-right-none': !_vm.value.length},style:(_vm.rightListStyle)},[_c('byted-select-panel-moduler',{attrs:{"show-clear":!!_vm.value.length,"disabled":_vm.disabled,"title":_vm._title},on:{"clearclick":_vm.onClearAll}},[(!_vm.value.length)?[_c('div',{staticClass:"byted-select-panel-moduler-none"},[_vm._t("empty",[_c('byted-icon',{attrs:{"name":"empty"}}),_vm._v("\n            "+_vm._s(_vm._emptyText)+"\n          ")])],2)]:_vm._e(),_vm._v(" "),_vm._l((_vm.value),function(id){return [(_vm.list[id])?_c('byted-select-panel-item',{key:id,attrs:{"value":_vm.list[id].selected,"name":_vm.list[id].name,"disabled":_vm.disabled || _vm.list[id].disabled,"render-name":_vm.list[id].renderName || null,"has-remove":true},on:{"removeclick":function($event){return _vm.onCheckboxChange(_vm.list[id])}}}):_vm._e()]})],2)],1):_vm._e()])}
var staticRenderFns = []


/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_moduler_vue__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_moduler_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_moduler_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_moduler_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_moduler_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a2053d7_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_panel_moduler_vue__ = __webpack_require__(434);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_moduler_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a2053d7_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_panel_moduler_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a2053d7_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_panel_moduler_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.baseClass},[_c('div',{class:_vm.className+'-header'},[(!_vm.$slots['header'])?[_c('span',{class:_vm.className+'-header-title'},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.showClear)?_c('span',{class:_vm.className+'-header-clear',on:{"click":_vm.onClearClick}},[_vm._v(_vm._s(_vm._clearText))]):_vm._e()]:[_vm._t("header")]],2),_vm._v(" "),_c('div',{ref:"container",class:_vm.className+'-container'},[_vm._t("default")],2)])}
var staticRenderFns = []


/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_item_vue__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_item_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f4f93cec_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_panel_item_vue__ = __webpack_require__(437);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_panel_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f4f93cec_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_panel_item_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f4f93cec_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_panel_item_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Expand = exports.Expand = {
  name: 'Expand',
  props: {
    render: Function,
    name: {
      type: String,
      default: ''
    },
    option: {
      type: Object,
      default: function _default() {}
    }
  },
  methods: {
    onNameClick: function onNameClick() {
      this.$emit('click');
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];

    return h(
      'span',
      {
        on: {
          'click': function click() {
            return _this.onNameClick();
          }
        }
      },
      [this.render(this.name, this.option)]
    );
  }
};

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,on:{"click":function($event){return _vm.onNameClick($event)}}},[(_vm.isCheckShow)?_c('byted-checkbox',{ref:"selectPanelItemCheckbox",class:_vm.baseClass+'-checkbox',attrs:{"value":_vm.value,"indeterminate":_vm.indeterminate,"disabled":_vm.disabled},on:{"change":_vm.onCheckboxChange}}):_vm._e(),_vm._v(" "),(!_vm.renderName)?[_c('span',{class:_vm.baseClass+'-name'},[_vm._v(_vm._s(_vm.name))])]:_vm._e(),_vm._v(" "),(_vm.renderName)?[_c('expand',{class:_vm.baseClass+'-name',attrs:{"name":_vm.name,"option":_vm.option,"render":_vm.renderName}})]:_vm._e(),_vm._v(" "),(_vm.hasChild)?_c('span',{class:_vm.baseClass+'-toright',on:{"click":_vm.onNameClick}},[_c('byted-icon',{attrs:{"name":"angle-right"}})],1):_vm._e(),_vm._v(" "),(_vm.hasRemove && !_vm.disabled)?_c('span',{class:_vm.baseClass+'-closeicon',on:{"click":function($event){$event.stopPropagation();return _vm.onRemoveClick($event)}}},[_c('byted-icon',{attrs:{"name":"close"}})],1):_vm._e()],2)}
var staticRenderFns = []


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

/***/ })

/******/ });