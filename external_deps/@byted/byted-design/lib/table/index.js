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
/******/ 	return __webpack_require__(__webpack_require__.s = 451);
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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || util.isEmptyValue(value, type || rule.type))) {
    errors.push(util.format(options.messages.required, rule.fullField));
  }
}

exports['default'] = required;

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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.convertFieldsError = convertFieldsError;
exports.format = format;
exports.isEmptyValue = isEmptyValue;
exports.isEmptyObject = isEmptyObject;
exports.asyncMap = asyncMap;
exports.complementError = complementError;
exports.deepMerge = deepMerge;
/* eslint no-console:0 */

var formatRegExp = /%[sdj%]/g;

var warning = exports.warning = function warning() {};

// don't print warning message when in production env or node runtime
if ("component" !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  exports.warning = warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}

function format() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += ' ' + arg;
    }
    return str;
  }
  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var flattenArr = flattenObjArr(objArr);
    return asyncSerialArray(flattenArr, func, callback);
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({ errors: results, fields: convertFieldsError(results) }) : resolve();
      }
    };
    objArrKeys.forEach(function (key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending['catch'](function (e) {
    return e;
  });
  return pending;
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && _typeof(target[s]) === 'object') {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

/***/ }),

/***/ 212:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var _emitter = __webpack_require__(5);

var _emitter2 = _interopRequireDefault(_emitter);

var _helper = __webpack_require__(3);

var _utils = __webpack_require__(45);

var _utils2 = _interopRequireDefault(_utils);

var _tableHeadT = __webpack_require__(453);

var _tableHeadT2 = _interopRequireDefault(_tableHeadT);

var _tableBodyT = __webpack_require__(459);

var _tableBodyT2 = _interopRequireDefault(_tableBodyT);

var _tableBodyDiv = __webpack_require__(462);

var _tableBodyDiv2 = _interopRequireDefault(_tableBodyDiv);

var _elementResizeDetector = __webpack_require__(464);

var _elementResizeDetector2 = _interopRequireDefault(_elementResizeDetector);

var _util = __webpack_require__(475);

var _locale = __webpack_require__(8);

var _locale2 = _interopRequireDefault(_locale);

var _dom = __webpack_require__(7);

var _lodash = __webpack_require__(53);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: _base.CSS_PREFIX + 'table',
  components: { tableHead: _tableHeadT2.default, tableBody: _tableBodyT2.default, tableBodyDiv: _tableBodyDiv2.default },
  mixins: [_locale2.default, _emitter2.default],
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    height: {
      type: [String, Number],
      default: ''
    },
    noDataText: {
      type: String,
      default: ''
    },
    ceilingOptions: {
      type: Object,
      default: function _default() {
        return {
          enabled: false,
          paddingTop: 0,
          boundariesElement: document
        };
      }
    },
    turbo: {
      type: Object,
      default: function _default() {
        return {
          mode: '',
          rowHeight: '',
          headerHeight: ''
        };
      }
    },
    columnResizable: {
      type: Boolean,
      default: false
    },
    border: {
      type: [Boolean, String],
      default: true,
      validator: function validator(value) {
        return typeof value === 'boolean' || (0, _helper.isOneOf)(value, ['cellspacing']);
      }
    },
    extraHeader: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    spanMethod: {
      type: Function,
      default: null
    },
    resizeDetective: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      cloneColumns: [],
      allColumns: [],
      columnRows: [],
      rightFixedColumnRows: [],
      rightColumns: [],
      leftFixedColumnRows: [],
      leftColumns: [],
      // 最后一列
      lastColumn: null,
      //
      rebuildData: [],
      // table宽度
      tableWidth: 0,
      // 左侧固定宽度
      leftFixedWidth: 0,
      // 右侧固定宽度
      rightFixedWidth: 0,
      // x轴是否有滚动条
      scrollX: false,
      // Y轴是否有滚动条
      scrollY: false,
      // 滚动条宽度
      scrollBarWidth: 0,
      // 每列宽度
      columnsWidth: {},
      headerHeight: 0,
      // body高度
      bodyHeight: 0,
      // body的真实高度
      bodyOffsetHeight: 0,
      // 左右滚动时记录滚动的位置，以判断左右fixed部分是否显示阴影
      scrollPosition: '',
      observer: null,
      // 表格是否抵达视口顶端
      touchCeiling: false,
      headerStyles: {
        'headerWrapper': {},
        'leftHeaderWrapper': {},
        'rightHeaderWrapper': {}
      },
      // 列宽拖拽线
      showResizeLine: false,
      hoverIndex: -1,
      handleBoundariesElementScrollThrottle: null
    };
  },

  computed: {
    _noDataText: function _noDataText() {
      return this.noDataText || this.t(_base.LOCALE_PREFIX + '.table.noDataText');
    },
    baseClass: function baseClass() {
      var classArr = [_base.CSS_PREFIX + 'table'];
      if (!this.border) {
        classArr.push(_base.CSS_PREFIX + 'table-no-border');
      } else if (this.border === 'cellspacing') {
        classArr.push(_base.CSS_PREFIX + 'table-cellspacing-border');
      }
      return classArr;
    },
    isLeftFixed: function isLeftFixed() {
      return this.columns.some(function (column) {
        return column.fixed && column.fixed === 'left';
      });
    },
    isRightFixed: function isRightFixed() {
      return this.columns.some(function (column) {
        return column.fixed && column.fixed === 'right';
      });
    },
    tableStyles: function tableStyles() {
      // table style
      var style = {};
      var width = 0;
      if (this.tableWidth) {
        width = this.tableWidth - (this.scrollY ? this.scrollBarWidth : 0);
        style._width = width;
        style.width = width + 'px';
      }
      return style;
    },
    bodyWrapperStyles: function bodyWrapperStyles() {
      // table body wrapper style
      var style = {};
      var key = this.bodyOffsetHeight < this.bodyHeight ? 'max-height' : 'height';
      if (this.bodyHeight) {
        style[key] = this.bodyHeight + 'px';
      }
      return style;
    },
    fixedBodyWrapperStyles: function fixedBodyWrapperStyles() {
      // fixed table body wrapper style
      var style = {};
      var key = this.bodyOffsetHeight < this.bodyHeight ? 'max-height' : 'height';
      if (this.bodyHeight) {
        style[key] = this.bodyHeight - (this.scrollX ? this.scrollBarWidth : 0) + 'px';
      }
      return style;
    },
    fixedLeftTableStyles: function fixedLeftTableStyles() {
      var _this = this;

      // fixed left table style
      var style = {};
      var width = 0;
      this.allColumns.forEach(function (column) {
        if (column.fixed && column.fixed === 'left') {
          width += _this.columnsWidth[column._id] ? _this.columnsWidth[column._id].width : 0;
        }
      });
      style._width = width;
      style.width = width + 'px';
      if (this.scrollX && this.data && this.data.length) {
        style.bottom = this.scrollBarWidth + 'px';
      }

      return style;
    },
    fixedRightTableStyles: function fixedRightTableStyles() {
      var _this2 = this;

      // fixed right table style
      var style = {};
      var width = 0;
      this.allColumns.forEach(function (column) {
        if (column.fixed && column.fixed === 'right') {
          width += _this2.columnsWidth[column._id] ? _this2.columnsWidth[column._id].width : 0;
        }
      });
      style._width = width;
      style.width = width + 'px';
      if (this.scrollX && this.data && this.data.length) {
        style.bottom = this.scrollBarWidth + 'px';
      }
      if (this.scrollY) {
        style.right = this.scrollBarWidth + 'px';
      }
      return style;
    },
    fixedRightHeaderBarStyle: function fixedRightHeaderBarStyle() {
      // fixed right header bar, if scrollY === true
      return {
        width: this.scrollBarWidth + 'px',
        height: this.headerHeight + 'px'
      };
    },
    isCeiling: function isCeiling() {
      return this.ceilingOptions.enabled;
    },
    isTableBodyDiv: function isTableBodyDiv() {
      return this.turbo.mode === 'div';
    },
    extraHeaderRows: function extraHeaderRows() {
      var _this3 = this;

      var result = this.extraHeader.map(function (row) {
        var newRow = [];
        row.reduce(function (acc, item) {
          var newIndex = acc;
          var column = _this3.allColumns[newIndex];
          if (!('colspan' in item) || item.colspan !== 0) {
            newRow.push(_extends({ column: column, columnIndex: newIndex, width: _this3.getColumnWidthForExtraHeader(item, newIndex, _this3.allColumns) }, item));
          }
          return newIndex + ('colspan' in item ? item.colspan : 1);
        }, 0);
        return newRow;
      });
      return result;
    },
    extraHeaderRightRows: function extraHeaderRightRows() {
      var _this4 = this;

      if (!this.rightColumns) return [];
      var fixedLength = 0;
      this.rightColumns.some(function (item) {
        if (item.fixed === 'right') {
          fixedLength++;
          return false;
        }
        return true;
      });
      return this.extraHeader.map(function (row) {
        var newRow = [];
        var fixedRow = _utils2.default.deepCopy(row).reverse();
        var acc = fixedLength - 1;
        var index = 0;
        while (acc >= 0) {
          var item = fixedRow[index];
          var column = _this4.rightColumns[acc];
          if (!('colspan' in item) || item.colspan !== 0) {
            newRow.unshift(_extends({ column: column, columnIndex: acc, width: _this4.getColumnWidthForExtraHeader(item, acc, _this4.rightColumns) }, item));
            acc -= 'colspan' in item ? item.colspan : 1;
          }
          index++;
        }
        return newRow;
      });
    }
  },
  watch: {
    'data': {
      immediate: true,
      deep: true,
      handler: function handler() {
        this.handleTableData(this.data);
        if (this.rebuildData.length) {
          this.fixedHeader();
        }
        this.resetTableScrollLeft();
      }
    },
    'columns': {
      immediate: true,
      deep: true,
      handler: function handler() {
        var cloneColumns = (0, _util.setColumnsData)(this.columns);
        var initColumns = (0, _util.handleColumnsOrder)(cloneColumns);
        var centerColumns = initColumns.left;
        // const leftColumns = initColumns.left;
        var rightColumns = initColumns.right;
        var allColumns = (0, _util.getFlattenColumns)(centerColumns);
        var allColumnsForHead = (0, _util.handleColumns2Rows)(centerColumns);
        var leftAllColumns = allColumns;
        var leftAllColumnsForHead = allColumnsForHead;
        var rightAllColumns = (0, _util.getFlattenColumns)(rightColumns, 'right');
        var rightAllColumnsForHead = (0, _util.handleColumns2Rows)(rightColumns);
        if (this.isTableBodyDiv) {
          leftAllColumns = this.getFixedAllColumns(allColumns, 'left');
          leftAllColumnsForHead = this.getFixedColumnsForHead(allColumnsForHead, 'left');
          rightAllColumns = this.getFixedAllColumns(rightAllColumns, 'right');
          rightAllColumnsForHead = this.getFixedColumnsForHead(rightAllColumnsForHead, 'right');
        }
        // 每一列设置id
        this.cloneColumns = cloneColumns;
        this.lastColumn = allColumns[allColumns.length - 1];
        // body需要的列
        this.allColumns = allColumns;
        // head渲染的行
        this.columnRows = allColumnsForHead;
        // fixed = left
        this.leftColumns = leftAllColumns;
        // fixed = left
        this.leftFixedColumnRows = leftAllColumnsForHead;
        // fixed = right body需要的列，fixed=right在前
        this.rightColumns = rightAllColumns;
        // fixed = right head渲染的行，fixed=right在前
        this.rightFixedColumnRows = rightAllColumnsForHead;
        // 重置列宽
        this.handleResize();
      }
    },
    scrollY: function scrollY() {
      this.handleResize();
    },
    height: function height() {
      this.fixedHeader();
    },

    'ceilingOptions.boundariesElement': function ceilingOptionsBoundariesElement(newBoundariesElement, oldBoundariesElement) {
      if (this.isCeiling) {
        (0, _dom.off)(oldBoundariesElement, 'scroll', this.handleBoundariesElementScrollThrottle);
        (0, _dom.on)(newBoundariesElement, 'scroll', this.handleBoundariesElementScrollThrottle);
      }
    }
  },
  created: function created() {
    var _this5 = this;

    this.handleBoundariesElementScrollThrottle = (0, _lodash2.default)(function () {
      _this5.handleBoundariesElementScroll();
    }, 50);
  },
  mounted: function mounted() {
    var _this6 = this;

    this.scrollBarWidth = (0, _dom.getScrollBarWidth)();
    this.tableResize();
    // // 监听table resize，调整列宽
    if (!this.isTableBodyDiv && this.resizeDetective) {
      this.observer = (0, _elementResizeDetector2.default)();
      this.observer.listenTo(this.$el, function () {
        _this6.tableResize();
      });
    }
    (0, _dom.on)(window, 'resize', this.tableResize);
    this.$on('on-visible-change', function (value) {
      if (value) {
        _this6.tableResize();
      }
    });

    // 监听外部滚动，调整表头position
    if (this.isCeiling) {
      (0, _dom.on)(this.ceilingOptions.boundariesElement, 'scroll', this.handleBoundariesElementScrollThrottle);
    }
  },
  beforeDestroy: function beforeDestroy() {
    try {
      (0, _dom.off)(window, 'resize', this.tableResize);
      if (this.isCeiling) {
        (0, _dom.off)(this.ceilingOptions.boundariesElement, 'scroll', this.handleBoundariesElementScrollThrottle);
      }
      if (this.observer && this.$el) {
        this.observer.uninstall(this.$el);
        this.observer = null;
      }
    } catch (error) {
      this.observer = null;
    }
  },

  methods: {
    getFixedAllColumns: function getFixedAllColumns(columns, fixed) {
      var clmArr = [];
      columns.some(function (column) {
        if (column.fixed === fixed) {
          clmArr.push(column);
          return false;
        }
        return true;
      });
      return clmArr;
    },
    getFixedColumnsForHead: function getFixedColumnsForHead(columnsForHead, fixed) {
      var newColumn = [];
      for (var index = 0; index < columnsForHead.length; index++) {
        var rowColumns = columnsForHead[index];
        // const fixedIndex = rowColumns.findIndex((column) => column.fixed !== fixed);
        newColumn.push(this.getFixedAllColumns(rowColumns, fixed));
      }
      return newColumn;
    },

    // data 初始化
    handleTableData: function handleTableData(data) {
      var tableArr = [];
      data.forEach(function (row, index) {
        var newRow = _utils2.default.deepCopy(row);
        // newRow.isHover = false;
        newRow._index = index;
        newRow.rowClassName = row.rowClassName || [];
        if (newRow.checked) {
          newRow.isChecked = newRow.checked;
        } else {
          newRow.isChecked = false;
        }
        if (newRow.expand) {
          newRow.isExpand = newRow.expand;
        } else {
          newRow.isExpand = false;
        }
        tableArr.push(newRow);
      });
      this.rebuildData = tableArr;
    },
    fixedHeader: function fixedHeader() {
      var _this7 = this;

      if (this.height && !this.isCeiling && this.$refs.headerWrapper) {
        this.$nextTick(function () {
          if (_this7.$refs.headerWrapper) {
            _this7.headerHeight = _this7.$refs.headerWrapper.offsetHeight;
          }
          _this7.bodyHeight = _this7.height - _this7.headerHeight;
          _this7.$nextTick(function () {
            _this7.fixedBody();
          });
        });
      } else {
        this.bodyHeight = 0;
        this.$nextTick(function () {
          _this7.fixedBody();
        });
      }
    },
    fixedBody: function fixedBody() {
      if (!this.$refs.bodyWrapper || !this.data || this.data.length === 0) {
        return;
      }
      var $bodyEl = this.$refs.body.$el;
      this.bodyOffsetHeight = $bodyEl.offsetHeight;
      this.scrollY = this.bodyHeight ? $bodyEl.offsetHeight + (this.scrollX ? this.scrollBarWidth : 0) > this.bodyHeight : false;
    },
    tableResize: function tableResize() {
      var _this8 = this;

      // 提供业务方调用
      this.$nextTick(function () {
        _this8.fixedHeader();
        _this8.handleResize();
        if (_this8.isCeiling) {
          _this8.handleBoundariesElementScroll();
        }
      });
    },

    // 处理列的宽度
    handleResize: function handleResize() {
      if (!this.$el) return;
      var columnsWidth = {};
      // 获取当前容器的宽度
      var tableWidth = this.$el.offsetWidth - 1;
      // 设置无width的列初始width为80
      var initColumnWidth = 80;
      // 已设置了width的column的width总和
      var hasUsedWidth = 0;
      // 没有设置width的列的最小widht综合
      var flexMinWidth = 0;
      // 最小需要table宽度
      var tabelMinWidth = 0;
      // 需要调整宽度的列选项
      var flexColumns = this.allColumns.filter(function (column) {
        return typeof column.width !== 'number';
      });
      // Y轴滚动条宽度
      var scrollYWidth = this.scrollY ? this.scrollBarWidth : 0;
      // 根据column的width和minwidth属性获取table需要的最小宽度
      this.allColumns.forEach(function (column) {
        if (column.width) {
          hasUsedWidth += parseInt(column.width);
        } else {
          flexMinWidth += parseInt(column.minWidth) || initColumnWidth;
        }
        columnsWidth[column._id] = {
          width: column.width || column.minWidth || initColumnWidth
        };
      });
      tabelMinWidth = hasUsedWidth + flexMinWidth + scrollYWidth;
      // 最小需要宽度大于table的宽度，需要横向滚动条,设置table width
      this.scrollX = tabelMinWidth > tableWidth;
      // this.tableWidth = Math.max(tabelMinWidth, tableWidth);
      if (flexColumns.length > 0 && tabelMinWidth < tableWidth) {
        // 剩余可调整的宽度
        var usableFlexWidth = tableWidth - tabelMinWidth;
        // 与minwidth的比例
        var flexRatio = usableFlexWidth / flexMinWidth;
        // 考虑会有小数省略的情况，在最后重新给第一项赋值
        var noFirstWidth = 0;
        // 设置无width属性的列的显示宽度
        flexColumns.forEach(function (column, index) {
          if (index === 0) return;
          var width = (column.minWidth || initColumnWidth) + Math.floor((column.minWidth || initColumnWidth) * flexRatio);
          columnsWidth[column._id] = {
            width: width
          };
          noFirstWidth += width;
        });
        columnsWidth[flexColumns[0]._id] = {
          width: flexMinWidth + usableFlexWidth - noFirstWidth
        };
      }
      this.tableWidth = Object.keys(columnsWidth).reduce(function (acc, item) {
        return parseInt(columnsWidth[item].width) + acc;
      }, 0) + scrollYWidth;
      this.columnsWidth = columnsWidth;
    },
    updateTableWidth: function updateTableWidth(resizeColumn, columnWidth) {
      var _this9 = this;

      // 获取当前容器的宽度
      // Y轴滚动条宽度
      var scrollYWidth = this.scrollY ? this.scrollBarWidth : 0;
      // 表格可用区域的宽度
      var tableWidth = this.$el.offsetWidth - 1;

      this.columnsWidth[resizeColumn._id].width = columnWidth;
      // cloneColumn 对应的列也作出调整，用于对外传出变量
      resizeColumn.width = columnWidth;
      var curTableWidth = Object.keys(this.columnsWidth).reduce(function (acc, item) {
        return _this9.columnsWidth[item].width + acc;
      }, 0) + scrollYWidth;
      this.scrollX = curTableWidth > tableWidth;
      if (this.scrollX) {
        this.tableWidth = curTableWidth;
      } else {
        // 表格中最后一行，当表格实际宽度小于父容器宽度时最后一列用来填充剩余宽度,
        this.resizeLastColumnWidth(tableWidth - curTableWidth);
        this.tableWidth = tableWidth;
      }
      if (this.isCeiling) {
        this.headerStyles.leftHeaderWrapper.width = this.fixedLeftTableStyles.width;
        this.headerStyles.rightHeaderWrapper.width = this.fixedRightTableStyles.width;
      }
      this.$emit('column-width-resize', this.cloneColumns, resizeColumn);
    },
    resizeLastColumnWidth: function resizeLastColumnWidth(resizeWidth) {
      this.lastColumn.width += resizeWidth;
      this.columnsWidth[this.lastColumn._id].width += resizeWidth;
    },

    // 处理某一行选中
    handleColumnSelect: function handleColumnSelect(value, row) {
      row.isChecked = !row.isChecked;
      this.rebuildData.splice(row._index, 1, row);
      var selection = this.getSelection();
      this.$emit('select-change', selection, {
        checked: value,
        row: row
      });
    },


    // 处理全选
    handleSelectAll: function handleSelectAll(status) {
      var _this10 = this;

      this.data.forEach(function (row, index) {
        if (!_this10.rebuildData[index].isDisabled) {
          _this10.rebuildData[index].isChecked = status;
        }
      });
      var selection = this.getSelection();
      if (status) {
        this.$emit('select-all', selection);
      }
      this.$emit('select-change', selection, {});
    },

    // 获取选中项
    getSelection: function getSelection() {
      var selectArr = [];
      this.rebuildData.forEach(function (row) {
        row.isChecked && selectArr.push(row);
      });
      selectArr = selectArr.slice();
      return selectArr;
    },

    // 表头排序
    handleSortClick: function handleSortClick(column) {
      var sortType = column.sortType === 'desc' ? 'asc' : 'desc';
      var key = column.key;
      column.sortType = sortType;
      this.$emit('sort-change', column, key, sortType);
    },

    // 展开项
    handleExpandClick: function handleExpandClick(row) {
      // todo
      var status = !row.isExpand;
      var index = row._index;
      row.isExpand = status;
      this.rebuildData.splice(row._index, 1, row);
      this.$emit('on-expand', { row: row, index: index, status: status });
    },

    // 滚轮事件
    handleMouseWheel: function handleMouseWheel(event) {
      // event.preventDefault();
      // 水平滚动
      var $bodyWrapper = this.$refs.bodyWrapper;
      if (!$bodyWrapper) {
        return;
      }
      var deltaX = event.deltaX;
      if (!deltaX && event.detail) {
        deltaX = event.detail * 40;
      }
      $bodyWrapper.scrollLeft += deltaX;
      this.getScrollPosition($bodyWrapper.scrollLeft);
    },

    // fixed的滚轮事件
    handleFixedMouseWheel: function handleFixedMouseWheel(event) {
      var $bodyWrapper = this.$refs.bodyWrapper;
      if (!$bodyWrapper) {
        return;
      }
      var deltaY = event.deltaY;
      // wheelDelta是120的倍数
      // firefox DOMMouseScroll 鼠标滚轮信息保存在detail中，-3的倍数
      if (!deltaY && event.detail) {
        deltaY = event.detail * 40;
      }
      if (!deltaY && event.wheelDeltaY) {
        deltaY = -event.wheelDeltaY;
      }
      if (!deltaY && event.wheelDelta) {
        deltaY = -event.wheelDelta;
      }
      var currentScrollTop = $bodyWrapper.scrollTop;
      if (deltaY < 0 && currentScrollTop > 0) {
        event.preventDefault();
      }
      if (deltaY > 0 && $bodyWrapper.scrollHeight - $bodyWrapper.offsetHeight - currentScrollTop > 0) {
        event.preventDefault();
      }
      $bodyWrapper.scrollTop += deltaY;
    },


    // body滚动
    handleBodyScroll: function handleBodyScroll(event) {
      var scrollLeft = event.target.scrollLeft;
      var scrollTop = event.target.scrollTop;

      this.$refs.headerWrapper.scrollLeft = scrollLeft;
      if (this.isLeftFixed) {
        this.$refs.leftBodyWrapper.scrollTop = scrollTop;
      }
      if (this.isRightFixed) {
        this.$refs.rightBodyWrapper.scrollTop = scrollTop;
      }
      this.getScrollPosition(scrollLeft);
      this.broadcast(_base.CSS_PREFIX + 'popper', 'bui.popper.scheduleUpdate');
    },
    getScrollPosition: function getScrollPosition(scrollLeft) {
      var maxScroll = this.tableStyles._width - this.$refs.bodyWrapper.offsetWidth + (this.scrollY ? this.scrollBarWidth : 0);
      if (scrollLeft >= maxScroll) {
        this.scrollPosition = 'right';
      } else if (scrollLeft === 0) {
        this.scrollPosition = 'left';
      } else {
        this.scrollPosition = 'middle';
      }
    },

    //
    handleRowMouseEnter: function handleRowMouseEnter(row, rowIndex) {
      this.hoverIndex = rowIndex;
      // row.isHover = true;
      // this.rebuildData.splice(row._index, 1, row);
    },

    //
    handleRowMouseLeave: function handleRowMouseLeave(row, rowIndex) {
      this.hoverIndex = -1;
      // row.isHover = false;
      // this.rebuildData.splice(row._index, 1, row);
    },

    //
    handleRowClick: function handleRowClick(row, index) {
      this.$emit('row-click', row, index);
    },
    handleBoundariesElementScroll: function handleBoundariesElementScroll() {
      // 获取表格容器相对视口距离
      var wrapperBounding = this.$el.getBoundingClientRect();

      var elementsNeedChange = [this.$refs.headerWrapper, this.$refs.leftHeaderWrapper, this.$refs.rightHeaderWrapper];
      var rightHeaderIndex = 2;

      var ceilingTop = this.ceilingOptions.paddingTop;
      var ceilingTopDistance = ceilingTop;
      var ceilingBottomDistance = ceilingTop + this.$refs.headerWrapper ? this.$refs.headerWrapper.getBoundingClientRect().height : 0;

      var headerStyles = [];
      // 如果被覆盖, 则调整表头的position为fixed
      if (wrapperBounding.top <= ceilingTopDistance && wrapperBounding.bottom >= ceilingBottomDistance) {
        this.touchCeiling = true;

        elementsNeedChange.forEach(function (elem, index) {
          var headerStyle = void 0;
          if (elem) {
            var parentNode = elem.parentNode;
            var bounding = parentNode.getBoundingClientRect();
            var left = bounding.left;
            // 右固定列的表头不需要加 border-left, 其他两个需要加

            if (index !== rightHeaderIndex) {
              var leftBorderWidth = 1;
              var width = parseFloat((0, _dom.getStyle)(parentNode, 'width')) + leftBorderWidth + 'px';
              headerStyle = {
                'position': 'fixed',
                'left': left - leftBorderWidth + 'px',
                'top': ceilingTop + 'px',
                'width': width,
                'overflow': 'hidden',
                'z-index': index + 2,
                'border-top-width': '1px',
                'border-top-style': 'solid',
                'border-left-width': leftBorderWidth + 'px',
                'border-left-style': 'solid'
              };
            } else {
              headerStyle = {
                'position': 'fixed',
                'left': left + 'px',
                'top': ceilingTop + 'px',
                'width': (0, _dom.getStyle)(parentNode, 'width'),
                'overflow': 'hidden',
                'z-index': index + 2,
                'border-top-width': '1px',
                'border-top-style': 'solid'
              };
            }
          }
          headerStyles.push(headerStyle);
        });

        // 如果没有被覆盖，则调整表头的position为static
      } else {
        this.touchCeiling = false;
        elementsNeedChange.forEach(function (elem) {
          var headerStyle = void 0;
          if (elem) {
            var parentNode = elem.parentNode;
            var width = (0, _dom.getStyle)(parentNode, 'width');
            headerStyle = {
              'position': 'static',
              'border': 'none',
              'width': width
            };
          }
          headerStyles.push(headerStyle);
        });
      }

      this.headerStyles = {
        'headerWrapper': headerStyles[0] || {},
        'leftHeaderWrapper': headerStyles[1] || {},
        'rightHeaderWrapper': headerStyles[2] || {}
      };
    },
    getColumnWidthForExtraHeader: function getColumnWidthForExtraHeader(column, columnIndex, columns) {
      var step = 0;
      var width = 0;
      if (!this.columnsWidth) return '';
      while (step < (column.colspan || 1)) {
        var id = columns[columnIndex + step] ? columns[columnIndex + step]._id : '';
        width += this.columnsWidth[id] ? this.columnsWidth[id].width : '';
        step++;
      }
      return width + 'px';
    },
    resetTableScrollLeft: function resetTableScrollLeft() {
      var _this11 = this;

      this.$nextTick(function () {
        if (_this11.$refs.bodyWrapper && _this11.$refs.headerWrapper) {
          var bodyScrollLeft = _this11.$refs.bodyWrapper.scrollLeft;
          var headerScrollLeft = _this11.$refs.headerWrapper.scrollLeft;
          if (bodyScrollLeft !== headerScrollLeft && headerScrollLeft) {
            _this11.$refs.bodyWrapper.scrollLeft = headerScrollLeft;
          }
        }
      });
    }
  }
};

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _headCell = __webpack_require__(454);

var _headCell2 = _interopRequireDefault(_headCell);

var _headExtraCell = __webpack_require__(456);

var _headExtraCell2 = _interopRequireDefault(_headExtraCell);

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


exports.default = {
  name: 'table-head',
  components: {
    HeadCell: _headCell2.default,
    HeadExtraCell: _headExtraCell2.default
  },
  props: {
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    columnsWidth: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    styles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    columnRows: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    headerHeight: {
      type: String,
      default: ''
    },
    fixed: {
      type: String,
      default: ''
    },
    extraHeaderRows: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      resizing: false,
      resizeColumn: null,
      resizeState: {
        startMouseLeft: 0,
        startLeft: 0,
        startColumnLeft: 0,
        tableLeft: 0
      }
    };
  },

  computed: {
    isSelectAll: function isSelectAll() {
      var isSelectAll = true;
      if (!this.data.length) isSelectAll = false;
      for (var i = 0; i < this.data.length; i++) {
        if (!this.data[i].isChecked && !this.data[i].isDisabled) {
          isSelectAll = false;
          break;
        }
      }
      return isSelectAll;
    },
    headRows: function headRows() {
      if (this.columnRows.length > 1) {
        return this.columnRows;
      }
      return [this.columns];
    },
    isColumnResizable: function isColumnResizable() {
      var _$parent = this.$parent,
          turbo = _$parent.turbo,
          columnResizable = _$parent.columnResizable;

      return turbo.mode === 'div' && !!turbo.headerHeight && !!turbo.rowHeight && columnResizable;
    }
  },
  methods: {
    isCeilShow: function isCeilShow(column) {
      if (!this.headerHeight) {
        return true;
      }
      return this.fixed && column.fixed === this.fixed || !this.fixed && !column.fixed;
    },
    getCellStyle: function getCellStyle(column) {
      return {
        width: this.getColumnWidth(column),
        height: this.getColumnHeight(column),
        overflow: 'hidden',
        cursor: this.resizing ? 'col-resize' : ''
      };
    },
    getExtraCellStyle: function getExtraCellStyle(extraColumn) {
      return {
        width: extraColumn.width,
        height: this.headerHeight,
        overflow: 'hidden'
      };
    },
    getColumnWidth: function getColumnWidth(column) {
      if (column.children) {
        var width = this.getColumnChildWidth(column.children);
        return width ? parseInt(width) + 'px' : '';
      }
      return this.columnsWidth[column._id] ? parseInt(this.columnsWidth[column._id].width) + 'px' : '';
    },
    getColumnChildWidth: function getColumnChildWidth(childrens) {
      var _this = this;

      if (!Array.isArray(childrens)) {
        return 0;
      }
      var temp = 0;
      childrens.map(function (item) {
        if (item.children) {
          temp += _this.getColumnChildWidth(item.children);
        } else {
          temp += _this.columnsWidth[item._id] ? _this.columnsWidth[item._id].width : item.width || item.minWidth || 0;
        }
      });
      return temp;
    },
    getColumnHeight: function getColumnHeight(column) {
      // 需要考虑到合并行的border-bottom-width
      return this.headerHeight ? column.rowSpan * parseInt(this.headerHeight) + column.rowSpan - 1 + 'px' : '';
    },
    getThClass: function getThClass(column) {
      return {
        'bui-table-th-pointer': column.sortable,
        'bui-table-th-hidden': this.fixed && this.fixed !== column.fixed || !this.fixed && column.fixed
      };
    },
    handleThClick: function handleThClick(column) {
      if (this.resizing) return;
      if (column.sortable) {
        this.$parent.handleSortClick(column);
      }
    },
    handleMouseDown: function handleMouseDown(column, event) {
      var _this2 = this;

      if (!this.isColumnResizable) return;
      this.resizing = true;
      var curParent = this.$parent;
      var tableEl = curParent.$el;
      var tableLeft = 0;
      var columnEl = void 0;
      var columnRect = void 0;
      var minLeft = void 0;
      try {
        tableLeft = tableEl.getBoundingClientRect().left;
        columnEl = this.$el.querySelector('#' + this.resizeColumn._id);
        columnRect = columnEl.getBoundingClientRect();
        minLeft = columnRect.left - tableLeft + 60;
      } catch (error) {
        this.resizing = false;
        // console.log('遇到错误啦');
        return;
      }

      curParent.showResizeLine = true;

      this.resizeState = {
        // 鼠标位置
        startMouseLeft: event.clientX,
        // 列开始移动的位置
        startLeft: columnRect.right - tableLeft,
        // 列左侧的位置
        startColumnLeft: columnRect.left - tableLeft,
        // 表格左侧的位置
        tableLeft: tableLeft
      };

      var resizeLineEl = curParent.$refs.resizeLine;
      resizeLineEl.style.left = this.resizeState.startLeft + 'px';
      var onselectstarttFn = document.onselectstart || null;
      var ondragstartFn = document.onselectstart || null;
      document.onselectstart = function () {
        return false;
      };
      document.ondragstart = function () {
        return false;
      };
      // 拖拽过程中设置拖拽线的位置
      var handleMouseMove = function handleMouseMove(event) {
        var tempLeft = event.clientX - _this2.resizeState.startMouseLeft;
        var lineLeft = _this2.resizeState.startLeft + tempLeft;
        lineLeft = Math.max(minLeft, lineLeft);
        resizeLineEl.style.left = lineLeft + 'px';
      };
      // 拖拽结束
      var handleMouseUp = function handleMouseUp() {
        if (!_this2.resizing) return;
        var startColumnLeft = _this2.resizeState.startColumnLeft;

        var columnWidth = parseInt(resizeLineEl.style.left, 10) - startColumnLeft;
        if (_this2.columnsWidth[_this2.resizeColumn._id]) {
          curParent.updateTableWidth(_this2.resizeColumn, columnWidth);
        }
        setTimeout(function () {
          _this2.resizing = false;
          _this2.resizeColumn = null;
          _this2.resizeState = {};
        }, 0);

        curParent.showResizeLine = false;

        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.onselectstart = onselectstarttFn;
        document.ondragstart = ondragstartFn;
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    handleMouseMove: function handleMouseMove(column, event) {
      // th
      if (!column || !this.isColumnResizable || this.resizing) {
        return;
      }
      var resizeColumn = this.getResizeColumn(column);
      var target = void 0;
      try {
        target = this.$el.querySelector('#' + resizeColumn._id);
      } catch (error) {
        return;
      }
      var thRect = target.getBoundingClientRect();
      // 预览可以进行拖拽的空间
      if (thRect.right - event.pageX < 8) {
        this.resizeColumn = resizeColumn;
      } else if (!this.resizing) {
        this.resizeColumn = null;
      }
    },
    getResizeColumn: function getResizeColumn(column) {
      if (column.children && column.children.length) {
        return this.getResizeColumn(column.children[column.children.length - 1]);
      }
      return column;
    },

    // 最后一列不显示拖拽
    isShowResizeBar: function isShowResizeBar(column) {
      var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.$parent.cloneColumns;

      var lastColumn = columns[columns.length - 1];
      if (column._id === lastColumn._id) {
        return false;
      } else if (lastColumn.children && lastColumn.children.length) {
        return this.isShowResizeBar(column, lastColumn.children);
      }
      return true;
    }
  }
};

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expand = __webpack_require__(74);

var _expand2 = _interopRequireDefault(_expand);

var _checkbox = __webpack_require__(15);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _icon = __webpack_require__(6);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'HeadCell',
  components: {
    Expand: _expand2.default,
    BytedCheckbox: _checkbox2.default,
    BytedIcon: _icon2.default
  },
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    column: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    columnIndex: {
      type: Number,
      default: -1
    }
  },
  computed: {
    isSelectAll: function isSelectAll() {
      var isSelectAll = true;
      if (!this.data.length) isSelectAll = false;
      if (this.isDisabledAll) isSelectAll = false;
      for (var i = 0; i < this.data.length; i++) {
        if (!this.data[i].isChecked && !this.data[i].isDisabled) {
          isSelectAll = false;
          break;
        }
      }
      return isSelectAll;
    },
    isDisabledAll: function isDisabledAll() {
      return !this.data.some(function (item) {
        return !item.isDisabled;
      });
    },
    isIndeterminate: function isIndeterminate() {
      return !this.isSelectAll && this.data.some(function (item) {
        return item.isChecked;
      });
    }
  },
  methods: {
    getCeilClass: function getCeilClass(column) {
      var classArr = ['bui-table-ceil'];
      if (column.align === 'right') {
        classArr.push('bui-table-ceil-right');
      }
      if (column.align === 'center') {
        classArr.push('bui-table-ceil-center');
      }
      return classArr.join(' ');
    },

    // 全选
    handleSelectAll: function handleSelectAll(value) {
      this.$parent.$parent.handleSelectAll(value);
    },

    // 排序功能
    handleSortClick: function handleSortClick(column) {
      this.$parent.$parent.handleSortClick(column);
    },

    // 过滤功能
    handleFilterClick: function handleFilterClick(column) {
      // todo
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

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'TableExpand',
  props: {
    row: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    render: {
      type: Function,
      default: function _default() {
        return {};
      }
    },
    index: {
      type: Number,
      default: 0
    },
    column: {
      type: Object,
      default: null
    }
  },
  render: function render(h) {
    var params = {
      row: this.row,
      column: this.column,
      index: this.index
    };
    var renderFun = this.render(h, params);
    if (typeof renderFun === 'string' || typeof renderFun === 'number') {
      return h('div', [renderFun]);
    }
    return renderFun;
  }
};

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expand = __webpack_require__(74);

var _expand2 = _interopRequireDefault(_expand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'HeadExtraCell',
  components: { Expand: _expand2.default },
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    extra: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    columnIndex: {
      type: Number,
      default: -1
    }
  },
  computed: {
    column: function column() {
      return this.extra.column;
    }
  },
  methods: {
    getCellClass: function getCellClass(column) {
      var classArr = ['bui-table-ceil', 'bui-table-summary-ceil'];
      if (column && column.align === 'right') {
        classArr.push('bui-table-ceil-right');
      }
      if (column && column.align === 'center') {
        classArr.push('bui-table-ceil-center');
      }
      return classArr.join(' ');
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

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _expand = __webpack_require__(74);

var _expand2 = _interopRequireDefault(_expand);

var _ceil = __webpack_require__(218);

var _ceil2 = _interopRequireDefault(_ceil);

var _dom = __webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'TableBody',
  components: {
    Expand: _expand2.default,
    Ceil: _ceil2.default
  },
  props: {
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    columnsWidth: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    styles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    fixed: {
      type: String,
      default: ''
    },
    spanMethod: {
      type: Function,
      default: null
    }
  },
  data: function data() {
    return {
      spanMethodCache: []
    };
  },

  computed: {
    expandRender: function expandRender() {
      var render = function render() {
        return '';
      };
      for (var i = 0; i < this.columns.length; i++) {
        var column = this.columns[i];
        if (column.type && column.type === 'expand') {
          if (column.renderExpand) render = column.renderExpand;
        }
      }
      return render;
    },
    trExpandClass: function trExpandClass() {
      return {
        'bui-table-tr-expand-hidden': !!this.fixed
      };
    },
    hoverIndex: function hoverIndex() {
      return this.$parent.hoverIndex;
    }
  },
  watch: {
    hoverIndex: function hoverIndex(newVal, oldVal) {
      if (this.$refs.tr && this.$refs.tr[oldVal]) {
        (0, _dom.removeClass)(this.$refs.tr[oldVal], 'bui-table-tr-active');
      }
      if (this.$refs.tr && this.$refs.tr[newVal]) {
        (0, _dom.addClass)(this.$refs.tr[newVal], 'bui-table-tr-active');
      }
    }
  },
  methods: {
    getTdStyle: function getTdStyle(column) {
      return {
        width: this.columnsWidth[column._id] ? this.columnsWidth[column._id].width + 'px' : '',
        textAlign: column.align
      };
    },
    handleRowClick: function handleRowClick(row, index) {
      // event.stopPropagation();
      this.$parent.handleRowClick(row, index);
    },
    handleRowMouseEnter: function handleRowMouseEnter(row, rowIndex) {
      this.$parent.handleRowMouseEnter(row, rowIndex);
    },
    handleRowMouseLeave: function handleRowMouseLeave(row, rowIndex) {
      this.$parent.handleRowMouseLeave(row, rowIndex);
    },
    getRowClass: function getRowClass(row) {
      var classArr = [].concat(row.rowClassName);
      if (row.isHover) {
        classArr.push('bui-table-tr-active');
      }
      return classArr;
    },
    getColumnClass: function getColumnClass(column) {
      return {
        'bui-table-td-hidden': this.fixed && this.fixed !== column.fixed || !this.fixed && column.fixed
      };
    },
    getSpan: function getSpan(row, column, rowIndex, columnIndex) {
      var fixed = this.fixed;

      var result = {};
      var cacheId = rowIndex + '-' + columnIndex + '-' + (fixed || 'center');
      if (this.spanMethodCache[cacheId]) {
        return this.spanMethodCache[cacheId];
      }
      if (this.spanMethod) {
        result = this.spanMethod ? this.spanMethod({ row: row, column: column, rowIndex: rowIndex, columnIndex: columnIndex, fixed: fixed }) : {};
        var rowspan = 1;
        var colspan = 1;
        if (Array.isArray(result)) {
          rowspan = result[0];
          colspan = result[1];
        } else if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
          rowspan = result.rowspan;
          colspan = result.colspan;
        }
        result = {
          rowspan: rowspan,
          colspan: colspan
        };
      }
      this.spanMethodCache[cacheId] = result;
      return result;
    },
    showWithSpan: function showWithSpan(row, column, rowIndex, columnIndex) {
      var result = this.getSpan(row, column, rowIndex, columnIndex);
      return !('rowspan' in result && result.rowspan === 0 || 'colspan' in result && result.colspan === 0);
    }
  }

};

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ceil_vue__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ceil_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ceil_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ceil_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ceil_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_465d4092_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ceil_vue__ = __webpack_require__(460);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ceil_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_465d4092_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ceil_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_465d4092_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ceil_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expand = __webpack_require__(74);

var _expand2 = _interopRequireDefault(_expand);

var _checkbox = __webpack_require__(15);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _icon = __webpack_require__(6);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Ceil',
  components: {
    Expand: _expand2.default,
    BytedCheckbox: _checkbox2.default,
    BytedIcon: _icon2.default
  },
  props: {
    row: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    column: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    rowIndex: {
      type: Number,
      default: -1
    },
    fixed: {
      type: [Boolean, String],
      default: false
    }
  },
  methods: {
    getCeilClass: function getCeilClass(column) {
      var classArr = ['bui-table-ceil'];
      if (column.align === 'right') {
        classArr.push('bui-table-ceil-right');
      }
      if (column.align === 'center') {
        classArr.push('bui-table-ceil-center');
      }
      return classArr.join(' ');
    },
    getColumnClass: function getColumnClass(column) {
      return {
        'bui-table-td-hidden': this.fixed && this.fixed !== column.fixed || !this.fixed && column.fixed
      };
    },
    getExpandIconClass: function getExpandIconClass(row) {
      var classArr = ['bui-table-ceil-expand-icon'];
      if (row.isExpand) {
        classArr.push('bui-table-ceil-expand-icon-open');
      }
      return classArr;
    },
    handleSelectChange: function handleSelectChange(row) {
      var value = !row.isChecked;
      this.$parent.$parent.handleColumnSelect(value, row);
    },
    handleExpandClick: function handleExpandClick(row) {
      this.$parent.$parent.handleExpandClick(row);
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

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _expand = __webpack_require__(74);

var _expand2 = _interopRequireDefault(_expand);

var _ceil = __webpack_require__(218);

var _ceil2 = _interopRequireDefault(_ceil);

var _dom = __webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'TableBodyV',
  components: {
    Expand: _expand2.default,
    Ceil: _ceil2.default
  },
  props: {
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    columnsWidth: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    styles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    fixed: {
      type: String,
      default: ''
    },
    rowHeight: {
      type: String,
      default: ''
    },
    spanMethod: {
      type: Function,
      default: null
    }
  },
  data: function data() {
    return {
      spanMethodCache: {},
      posLeftCache: {}
    };
  },

  computed: {
    expandRender: function expandRender() {
      var render = function render() {
        return '';
      };
      for (var i = 0; i < this.columns.length; i++) {
        var column = this.columns[i];
        if (column.type && column.type === 'expand') {
          if (column.renderExpand) render = column.renderExpand;
        }
      }
      return render;
    },
    trExpandClass: function trExpandClass() {
      return {
        'bui-table-tr-expand-hidden': !!this.fixed
      };
    },
    renderColumns: function renderColumns() {
      return this.columns.slice(this.$parent.renderColumns.startIndex, this.$parent.renderColumns.endIndex);
    },
    hoverIndex: function hoverIndex() {
      return this.$parent.hoverIndex;
    }
  },
  watch: {
    hoverIndex: function hoverIndex(newVal, oldVal) {
      // rdata.isHover的方式会导致当前行重新渲染，滚动过程中hover会出现卡顿
      if (this.$refs.tr && this.$refs.tr[oldVal]) {
        (0, _dom.removeClass)(this.$refs.tr[oldVal], 'bui-table-tr-active');
      }
      if (this.$refs.tr && this.$refs.tr[newVal]) {
        (0, _dom.addClass)(this.$refs.tr[newVal], 'bui-table-tr-active');
      }
    }
  },
  methods: {
    isCeilShow: function isCeilShow(column) {
      if (!this.rowHeight) {
        return true;
      }
      return this.fixed && column.fixed === this.fixed || !this.fixed && !column.fixed;
    },
    handleRowClick: function handleRowClick(row, index) {
      // event.stopPropagation();
      this.$parent.handleRowClick(row, index);
    },
    handleRowMouseEnter: function handleRowMouseEnter(row, rowIndex) {
      this.$parent.handleRowMouseEnter(row, rowIndex);
    },
    handleRowMouseLeave: function handleRowMouseLeave(row, rowIndex) {
      this.$parent.handleRowMouseLeave(row, rowIndex);
    },
    getRowClass: function getRowClass(row) {
      var classArr = [].concat(row.rowClassName);
      // if (row.isHover) {
      //   classArr.push('bui-table-tr-active');
      // }
      return classArr;
    },
    getColumnClass: function getColumnClass(column) {
      return {
        'bui-table-td-hidden': this.fixed && this.fixed !== column.fixed || !this.fixed && column.fixed
      };
    },
    getColumnPosLeft: function getColumnPosLeft(column, columnIndex, colspan, width) {
      if (this.posLeftCache[columnIndex] && width) {
        this.posLeftCache[columnIndex + colspan] = this.posLeftCache[columnIndex] + parseInt(width);
        return this.posLeftCache[columnIndex];
      }
      this.posLeftCache[columnIndex + colspan] = this.columnsWidth[column._id] ? this.columnsWidth[column._id].width : '';
      return 0;
    },
    getColumnStyle: function getColumnStyle(row, column, rowIndex, columnIndex) {
      var width = this.columnsWidth[column._id] ? parseInt(this.columnsWidth[column._id].width) + 'px' : '';
      var height = this.rowHeight;
      if (!width) return {};
      if (this.spanMethod) {
        var result = this.getSpan(row, column, rowIndex, columnIndex);
        width = result.colspan ? this.getSpanColumnWidth(result.colspan, this.columns, columnIndex) : width;
        height = result.rowspan ? parseInt(this.rowHeight) * result.rowspan + 'px' : height;
        var left = this.getColumnPosLeft(column, columnIndex, result.colspan === undefined ? 1 : result.colspan, width);
        return {
          width: width,
          height: height,
          textAlign: column.align,
          position: 'absolute',
          top: 0,
          left: left + 'px',
          zIndex: 1
        };
      }
      var style = {
        width: width,
        height: height,
        textAlign: column.align
      };
      return style;
    },
    getSpanColumnWidth: function getSpanColumnWidth(colspan, columns, columnIndex) {
      var step = 0;
      var width = 0;

      if (!this.columnsWidth) return '';
      while (step < (colspan || 1)) {
        var id = columns[columnIndex + step]._id;
        width += this.columnsWidth[id] ? this.columnsWidth[id].width : '';
        step++;
      }
      return width + 'px';
    },
    getSpan: function getSpan(row, column, rowIndex, columnIndex) {
      var fixed = this.fixed;

      var isColumnHidden = this.fixed && this.fixed !== column.fixed || !this.fixed && column.fixed;
      var result = {};
      var cacheId = rowIndex + '-' + columnIndex + '-' + (fixed || 'center');
      if (this.spanMethodCache[cacheId]) {
        return this.spanMethodCache[cacheId];
      }
      if (this.spanMethod && !isColumnHidden) {
        result = this.spanMethod ? this.spanMethod({ row: row, column: column, rowIndex: rowIndex, columnIndex: columnIndex, fixed: fixed }) : {};
        var rowspan = 1;
        var colspan = 1;
        if (Array.isArray(result)) {
          rowspan = result[0];
          colspan = result[1];
        } else if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
          rowspan = result.rowspan;
          colspan = result.colspan;
        }
        result = {
          rowspan: rowspan,
          colspan: colspan
        };
      }
      this.spanMethodCache[cacheId] = result;
      return result;
    },
    showWithSpan: function showWithSpan(row, column, rowIndex, columnIndex) {
      var result = this.getSpan(row, column, rowIndex, columnIndex);
      return !('rowspan' in result && result.rowspan === 0 || 'colspan' in result && result.colspan === 0);
    }
  }

};

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

/**
 * Loops through the collection and calls the callback for each element. if the callback returns truthy, the loop is broken and returns the same value.
 * @public
 * @param {*} collection The collection to loop through. Needs to have a length property set and have indices set from 0 to length - 1.
 * @param {function} callback The callback to be called for each element. The element will be given as a parameter to the callback. If this callback returns truthy, the loop is broken and the same value is returned.
 * @returns {*} The value that a callback has returned (if truthy). Otherwise nothing.
 */
utils.forEach = function(collection, callback) {
    for(var i = 0; i < collection.length; i++) {
        var result = callback(collection[i]);
        if(result) {
            return result;
        }
    }
};


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var detector = module.exports = {};

detector.isIE = function(version) {
    function isAnyIeVersion() {
        var agent = navigator.userAgent.toLowerCase();
        return agent.indexOf("msie") !== -1 || agent.indexOf("trident") !== -1 || agent.indexOf(" edge/") !== -1;
    }

    if(!isAnyIeVersion()) {
        return false;
    }

    if(!version) {
        return true;
    }

    //Shamelessly stolen from https://gist.github.com/padolsey/527683
    var ieVersion = (function(){
        var undef,
            v = 3,
            div = document.createElement("div"),
            all = div.getElementsByTagName("i");

        do {
            div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->";
        }
        while (all[0]);

        return v > 4 ? v : undef;
    }());

    return version === ieVersion;
};

detector.isLegacyOpera = function() {
    return !!window.opera;
};


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __webpack_require__(2);

var _validator = __webpack_require__(24);

var _validator2 = _interopRequireDefault(_validator);

var _messages2 = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */
function Schema(descriptor) {
  this.rules = null;
  this._messages = _messages2.messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = (0, _util.deepMerge)((0, _messages2.newMessages)(), _messages);
    }
    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if ((typeof rules === 'undefined' ? 'undefined' : _typeof(rules)) !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    var z = void 0;
    var item = void 0;
    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_) {
    var _this = this;

    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var oc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return Promise.resolve();
    }

    function complete(results) {
      var i = void 0;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = (0, _util.convertFieldsError)(errors);
      }
      callback(errors, fields);
    }

    if (options.messages) {
      var messages = this.messages();
      if (messages === _messages2.messages) {
        messages = (0, _messages2.newMessages)();
      }
      (0, _util.deepMerge)(messages, options.messages);
      options.messages = messages;
    } else {
      options.messages = this.messages();
    }
    var arr = void 0;
    var value = void 0;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return (0, _util.asyncMap)(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (_typeof(rule.fields) === 'object' || _typeof(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullfield(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + '.' + key
        });
      }

      function cb() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map((0, _util.complementError)(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map((0, _util.complementError)(rule));
            } else if (options.error) {
              errors = [options.error(rule, (0, _util.format)(options.messages.required, rule.field))];
            } else {
              errors = [];
            }
            return doIt(errors);
          }

          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];
            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res = void 0;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + ' fails');
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !_validator2['default'].hasOwnProperty(rule.type)) {
      throw new Error((0, _util.format)('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return _validator2['default'].required;
    }
    return _validator2['default'][this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  _validator2['default'][type] = validator;
};

Schema.warning = _util.warning;

Schema.messages = _messages2.messages;

exports['default'] = Schema;

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _string = __webpack_require__(25);

var _string2 = _interopRequireDefault(_string);

var _method = __webpack_require__(31);

var _method2 = _interopRequireDefault(_method);

var _number = __webpack_require__(32);

var _number2 = _interopRequireDefault(_number);

var _boolean = __webpack_require__(33);

var _boolean2 = _interopRequireDefault(_boolean);

var _regexp = __webpack_require__(34);

var _regexp2 = _interopRequireDefault(_regexp);

var _integer = __webpack_require__(35);

var _integer2 = _interopRequireDefault(_integer);

var _float = __webpack_require__(36);

var _float2 = _interopRequireDefault(_float);

var _array = __webpack_require__(37);

var _array2 = _interopRequireDefault(_array);

var _object = __webpack_require__(38);

var _object2 = _interopRequireDefault(_object);

var _enum = __webpack_require__(39);

var _enum2 = _interopRequireDefault(_enum);

var _pattern = __webpack_require__(40);

var _pattern2 = _interopRequireDefault(_pattern);

var _date = __webpack_require__(41);

var _date2 = _interopRequireDefault(_date);

var _required = __webpack_require__(42);

var _required2 = _interopRequireDefault(_required);

var _type = __webpack_require__(43);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  string: _string2['default'],
  method: _method2['default'],
  number: _number2['default'],
  boolean: _boolean2['default'],
  regexp: _regexp2['default'],
  integer: _integer2['default'],
  float: _float2['default'],
  array: _array2['default'],
  object: _object2['default'],
  'enum': _enum2['default'],
  pattern: _pattern2['default'],
  date: _date2['default'],
  url: _type2['default'],
  hex: _type2['default'],
  email: _type2['default'],
  required: _required2['default']
};

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(4);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options, 'string');
    if (!(0, _util.isEmptyValue)(value, 'string')) {
      _rule2['default'].type(rule, value, source, errors, options);
      _rule2['default'].range(rule, value, source, errors, options);
      _rule2['default'].pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        _rule2['default'].whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}

exports['default'] = string;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(util.format(options.messages.whitespace, rule.fullField));
  }
}

exports['default'] = whitespace;

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

var _required = __webpack_require__(13);

var _required2 = _interopRequireDefault(_required);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};

var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float: function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  object: function object(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};

/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    (0, _required2['default'])(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
    // straight typeof check
  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== rule.type) {
    errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

exports['default'] = type;

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number';
  // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  }
  // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(util.format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(util.format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(util.format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(util.format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

exports['default'] = range;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var ENUM = 'enum';

/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(util.format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

exports['default'] = enumerable;

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

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

exports['default'] = pattern;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(4);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2['default'].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = method;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(4);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === '') {
      value = undefined;
    }
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2['default'].type(rule, value, source, errors, options);
      _rule2['default'].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = number;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(2);

var _rule = __webpack_require__(4);

var _rule2 = _interopRequireDefault(_rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2['default'].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = boolean;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(4);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (!(0, _util.isEmptyValue)(value)) {
      _rule2['default'].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = regexp;

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(4);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2['default'].type(rule, value, source, errors, options);
      _rule2['default'].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = integer;

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(4);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2['default'].type(rule, value, source, errors, options);
      _rule2['default'].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = floatFn;

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(4);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value, 'array') && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options, 'array');
    if (!(0, _util.isEmptyValue)(value, 'array')) {
      _rule2['default'].type(rule, value, source, errors, options);
      _rule2['default'].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = array;

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(4);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2['default'].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = object;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(4);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ENUM = 'enum';

/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (value) {
      _rule2['default'][ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = enumerable;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _required = __webpack_require__(13);

var _required2 = _interopRequireDefault(_required);

var _whitespace = __webpack_require__(26);

var _whitespace2 = _interopRequireDefault(_whitespace);

var _type = __webpack_require__(27);

var _type2 = _interopRequireDefault(_type);

var _range = __webpack_require__(28);

var _range2 = _interopRequireDefault(_range);

var _enum = __webpack_require__(29);

var _enum2 = _interopRequireDefault(_enum);

var _pattern = __webpack_require__(30);

var _pattern2 = _interopRequireDefault(_pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  required: _required2['default'],
  whitespace: _whitespace2['default'],
  type: _type2['default'],
  range: _range2['default'],
  'enum': _enum2['default'],
  pattern: _pattern2['default']
};

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(4);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (!(0, _util.isEmptyValue)(value, 'string')) {
      _rule2['default'].pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = pattern;

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(4);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  // console.log('validate on %s value', value);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (!(0, _util.isEmptyValue)(value)) {
      var dateObject = void 0;

      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }

      _rule2['default'].type(rule, dateObject, source, errors, options);
      if (dateObject) {
        _rule2['default'].range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}

exports['default'] = date;

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _rule = __webpack_require__(4);

var _rule2 = _interopRequireDefault(_rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : _typeof(value);
  _rule2['default'].required(rule, value, source, errors, options, type);
  callback(errors);
}

exports['default'] = required;

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(4);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value, ruleType) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options, ruleType);
    if (!(0, _util.isEmptyValue)(value, ruleType)) {
      _rule2['default'].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = type;

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newMessages = newMessages;
function newMessages() {
  return {
    'default': 'Validation error on field %s',
    required: '%s is required',
    'enum': '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}

var messages = exports.messages = newMessages();

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Any basic methods here .
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Copyright 2017 ByteDance, Inc.
                                                                                                                                                                                                                                                                               * Licensed under MIT
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               */

/* global window module*/


var _asyncValidator = __webpack_require__(23);

var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;

module.exports = {
  /**
   *
   * @param {object} source
   * @return {object}
   * Deep copy of any object .
   *
   *
   *
   *
   */
  copy: function copy(source) {
    var str = void 0;var newobj = void 0;
    try {
      newobj = source.constructor === Array ? [] : {};
    } catch (e) {
      return;
    }
    try {
      str = JSON.stringify(source);
      newobj = JSON.parse(str);
    } catch (e) {
      for (var i in source) {
        if (_typeof(source[i]) === 'object') {
          newobj[i] = this.copy(source[i]);
        } else {
          source[i];
        }
      }
    }
    return newobj;
  },
  // 深克隆
  deepCopy: function deepCopy(source) {
    // 如果source是对象
    if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) == 'object' && source !== null) {
      // 有必要区分数组和普通对象
      var o = Object.prototype.toString.call(source) == '[object Array]' ? [] : {};
      // 遍历source的自有属性
      for (var key in source) {
        // 如果key是source的自有属性
        if (source.hasOwnProperty(key)) {
          o[key] = this.deepCopy(source[key]);
          // arguments.callee调的是当前的deepCopy函数
        }
      }
      return o;
    } else {
      // 如果source是原始类型的值，直接返回
      return source;
    }
  },

  /**
   * 获取 url 参数
   *
   */
  urlParams: function urlParams(href) {
    href = href || window.location.search;
    var data = {};

    var reg = /([^?=&]+)(=([^&]*))?/g;
    if (href) {
      href.replace(reg, function ($0, $1, $2, $3) {
        data[$1] = $3;
      });
    }
    return data;
  },

  Validator: _asyncValidator2.default,

  /**
   * 获取指定长度的随机字符串
   * @param  {} length=0
   */
  getRandomStr: function getRandomStr() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var chars = 'asdfghjklzxcvbnmqwertyuiopASDFGHJKLZXCVBNMQWERTYUIOP1234567890';
    var str = '';
    for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  },
  hasOwn: function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  },

  // 补零
  addZero: function addZero(number) {
    return ('0' + number).substr(-2, 2);
  },

  /**
   * template
   *
   * @param {String} string
   * @param {Array} ...args
   * @return {String}
   */
  template: function template(string) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (args.length === 1 && _typeof(args[0]) === 'object') {
      args = args[0];
    }

    if (!args || !args.hasOwnProperty) {
      args = {};
    }

    if (typeof string !== 'string') {
      return string;
    }

    return string.replace(RE_NARGS, function (match, prefix, i, index) {
      var result = void 0;

      if (string[index - 1] === '{' && string[index + match.length] === '}') {
        return i;
      } else {
        result = Object.prototype.hasOwnProperty.call(args, i) ? args[i] : null;
        if (result === null || result === undefined) {
          return '';
        }

        return result;
      }
    });
  }
};

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = __webpack_require__(452);

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_table2.default.install = function (Vue) {
  Vue.component(_table2.default.name, _table2.default);
};

exports.default = _table2.default;

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4bf2fd90_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_vue__ = __webpack_require__(476);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4bf2fd90_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4bf2fd90_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_head_t_vue__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_head_t_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_head_t_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_head_t_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_head_t_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58b21444_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_head_t_vue__ = __webpack_require__(458);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_head_t_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58b21444_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_head_t_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58b21444_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_head_t_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_head_cell_vue__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_head_cell_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_head_cell_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_head_cell_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_head_cell_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cd96c50c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_head_cell_vue__ = __webpack_require__(455);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_head_cell_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cd96c50c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_head_cell_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cd96c50c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_head_cell_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.getCeilClass(_vm.column)},[(_vm.column.renderHeader)?[_c('expand',{attrs:{"row":_vm.column,"render":_vm.column.renderHeader,"column":_vm.column,"index":_vm.columnIndex}})]:[_vm._v("\n    "+_vm._s(_vm.column.title)+"\n  ")],_vm._v(" "),(_vm.column.type === 'selection')?[_c('byted-checkbox',{attrs:{"indeterminate":_vm.isIndeterminate,"value":_vm.isSelectAll,"disabled":(_vm.data&&!_vm.data.length) || _vm.isDisabledAll},on:{"change":_vm.handleSelectAll},nativeOn:{"click":function($event){$event.stopPropagation();}}})]:(_vm.column.sortable)?[_c('span',{staticClass:"bui-table-header-icon-wrapper",on:{"click":function($event){$event.stopPropagation();return _vm.handleSortClick(_vm.column)}}},[_c('byted-icon',{staticClass:"bui-table-sort-icon sort-icon-asc",class:{
          'bui-table-sort-icon-active': _vm.column.sortType==='asc'
        },attrs:{"name":"sort-asc"}}),_vm._v(" "),_c('byted-icon',{staticClass:"bui-table-sort-icon sort-icon-desc",class:{
          'bui-table-sort-icon-active': _vm.column.sortType==='desc'
        },attrs:{"name":"sort-asc"}})],1)]:_vm._e()],2)}
var staticRenderFns = []


/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_head_extra_cell_vue__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_head_extra_cell_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_head_extra_cell_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_head_extra_cell_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_head_extra_cell_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4811a6c8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_head_extra_cell_vue__ = __webpack_require__(457);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_head_extra_cell_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4811a6c8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_head_extra_cell_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4811a6c8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_head_extra_cell_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.getCellClass(_vm.column)},[(_vm.extra.render)?[_c('expand',{attrs:{"row":_vm.column,"render":_vm.extra.render,"column":_vm.column,"index":_vm.columnIndex}})]:[_vm._v("\n    "+_vm._s(_vm.extra.title)+"\n  ")]],2)}
var staticRenderFns = []


/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{style:(_vm.fixed&&_vm.headerHeight ? {} : _vm.styles),attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('colgroup',[_vm._l((_vm.columns),function(column){return [_c('col',{key:column.id,attrs:{"name":column.id,"width":_vm.columnsWidth[column._id]?_vm.columnsWidth[column._id].width:column.width||'',"align":column.align}})]})],2),_vm._v(" "),_c('thead',[_vm._l((_vm.headRows),function(rows,rindex){return _c('tr',{key:rindex},_vm._l((rows),function(column,cindex){return _c('th',{key:column._id,class:_vm.getThClass(column),attrs:{"colspan":column.colSpan,"rowspan":column.rowSpan,"id":column._id},on:{"click":function($event){return _vm.handleThClick(column)}}},[(_vm.isCeilShow(column))?[_c('head-cell',{style:(_vm.getCellStyle(column)),attrs:{"data":_vm.data,"column":column,"column-index":cindex}}),_vm._v(" "),(_vm.isColumnResizable&&(cindex !==rows.length -1 || _vm.isShowResizeBar(column)))?_c('div',{staticClass:"bui-table-th-resize",on:{"mousedown":function($event){$event.stopPropagation();return _vm.handleMouseDown(column, $event)},"mousemove":function($event){$event.stopPropagation();return _vm.handleMouseMove(column, $event)}}}):_vm._e()]:_vm._e()],2)}),0)}),_vm._v(" "),(_vm.extraHeaderRows&& _vm.extraHeaderRows.length)?_vm._l((_vm.extraHeaderRows),function(row,rowIndex){return _c('tr',{key:rowIndex + _vm.headRows.length},_vm._l((row),function(extraColumn,colIndex){return _c('th',{key:colIndex,attrs:{"colspan":extraColumn.colspan || 1}},[_c('head-extra-cell',{style:(_vm.getExtraCellStyle(extraColumn)),attrs:{"column-index":extraColumn.columnIndex,"extra":extraColumn}})],1)}),0)}):_vm._e()],2)])}
var staticRenderFns = []


/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_t_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_t_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_t_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_t_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_t_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b741860_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_body_t_vue__ = __webpack_require__(461);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_t_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b741860_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_body_t_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b741860_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_body_t_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.getCeilClass(_vm.column)},[(_vm.column.render)?[_c('expand',{attrs:{"row":_vm.row,"render":_vm.column.render,"column":_vm.column,"index":_vm.rowIndex}})]:(_vm.column.type === 'index')?[_vm._v("\n    "+_vm._s(parseInt(_vm.rowIndex) + 1)+"\n  ")]:(_vm.column.type === 'selection')?[_c('byted-checkbox',{attrs:{"value":_vm.row.isChecked,"disabled":_vm.row.isDisabled},on:{"change":function($event){return _vm.handleSelectChange(_vm.row)}},nativeOn:{"click":function($event){$event.stopPropagation();}}})]:(_vm.column.type === 'expand')?[_c('span',{on:{"click":function($event){$event.stopPropagation();return _vm.handleExpandClick(_vm.row)}}},[_c('byted-icon',{class:_vm.getExpandIconClass(_vm.row),attrs:{"name":"angle-right"}})],1)]:[_vm._v("\n    "+_vm._s(_vm.row[_vm.column.key])+"\n  ")]],2)}
var staticRenderFns = []


/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{style:(_vm.styles),attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('colgroup',[_vm._l((_vm.columns),function(column){return [_c('col',{key:column.id,attrs:{"name":column.id,"width":_vm.columnsWidth[column._id]?_vm.columnsWidth[column._id].width:column.width||'',"align":column.align}})]})],2),_vm._v(" "),_c('tbody',[_vm._l((_vm.data),function(rdata,rindex){return [_c('tr',{key:rindex,ref:"tr",refInFor:true,class:_vm.getRowClass(rdata),on:{"click":function($event){return _vm.handleRowClick(rdata, rindex)},"mouseenter":function($event){return _vm.handleRowMouseEnter(rdata, rindex)},"mouseleave":function($event){return _vm.handleRowMouseLeave(rdata, rindex)}}},[_vm._l((_vm.columns),function(column,cindex){return [(_vm.showWithSpan(rdata, column, rindex, cindex))?_c('td',_vm._b({key:column._id,class:_vm.getColumnClass(column),style:(_vm.getTdStyle(column))},'td',_vm.getSpan(rdata, column, rindex, cindex),false),[_c('ceil',{attrs:{"row":rdata,"column":column,"row-index":rindex,"fixed":_vm.fixed}})],1):_vm._e()]})],2),_vm._v(" "),(rdata.isExpand)?_c('tr',{key:rindex+'expand',class:_vm.trExpandClass},[_c('td',{staticClass:"bui-table-td-expand",attrs:{"colspan":_vm.columns.length}},[_c('expand',{attrs:{"row":rdata,"render":_vm.expandRender,"index":rindex}})],1)]):_vm._e()]})],2)])}
var staticRenderFns = []


/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_div_vue__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_div_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_div_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_div_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_div_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e33e984c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_body_div_vue__ = __webpack_require__(463);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_div_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e33e984c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_body_div_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e33e984c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_body_div_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:(_vm.fixed&&_vm.rowHeight ? {} : _vm.styles)},[_vm._l((_vm.data),function(rdata,rindex){return [_c('div',{key:rindex,ref:"tr",refInFor:true,staticClass:"bui-table-tr",class:_vm.getRowClass(rdata),style:({
        position: 'relative',
        height: _vm.rowHeight,
      }),on:{"click":function($event){return _vm.handleRowClick(rdata, rindex)},"mouseenter":function($event){return _vm.handleRowMouseEnter(rdata, rindex)},"mouseleave":function($event){return _vm.handleRowMouseLeave(rdata, rindex)}}},[_vm._l((_vm.columns),function(column,cindex){return [(_vm.showWithSpan(rdata, column, rindex, cindex))?_c('div',{key:column._id,staticClass:"bui-table-column",class:_vm.getColumnClass(column),style:(_vm.getColumnStyle(rdata, column, rindex, cindex))},[(_vm.isCeilShow(column))?[_c('ceil',{attrs:{"row":rdata,"column":column,"row-index":rindex,"fixed":_vm.fixed}})]:_vm._e()],2):_vm._e()]})],2),_vm._v(" "),(rdata.isExpand)?_c('div',{key:rindex+'expand',class:_vm.trExpandClass},[_c('div',{staticClass:"bui-table-column bui-table-td-expand"},[_c('expand',{attrs:{"row":rdata,"render":_vm.expandRender,"index":rindex}})],1)]):_vm._e()]})],2)}
var staticRenderFns = []


/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach                 = __webpack_require__(221).forEach;
var elementUtilsMaker       = __webpack_require__(465);
var listenerHandlerMaker    = __webpack_require__(466);
var idGeneratorMaker        = __webpack_require__(467);
var idHandlerMaker          = __webpack_require__(468);
var reporterMaker           = __webpack_require__(469);
var browserDetector         = __webpack_require__(222);
var batchProcessorMaker     = __webpack_require__(470);
var stateHandler            = __webpack_require__(472);

//Detection strategies.
var objectStrategyMaker     = __webpack_require__(473);
var scrollStrategyMaker     = __webpack_require__(474);

function isCollection(obj) {
    return Array.isArray(obj) || obj.length !== undefined;
}

function toArray(collection) {
    if (!Array.isArray(collection)) {
        var array = [];
        forEach(collection, function (obj) {
            array.push(obj);
        });
        return array;
    } else {
        return collection;
    }
}

function isElement(obj) {
    return obj && obj.nodeType === 1;
}

/**
 * @typedef idHandler
 * @type {object}
 * @property {function} get Gets the resize detector id of the element.
 * @property {function} set Generate and sets the resize detector id of the element.
 */

/**
 * @typedef Options
 * @type {object}
 * @property {boolean} callOnAdd    Determines if listeners should be called when they are getting added.
                                    Default is true. If true, the listener is guaranteed to be called when it has been added.
                                    If false, the listener will not be guarenteed to be called when it has been added (does not prevent it from being called).
 * @property {idHandler} idHandler  A custom id handler that is responsible for generating, setting and retrieving id's for elements.
                                    If not provided, a default id handler will be used.
 * @property {reporter} reporter    A custom reporter that handles reporting logs, warnings and errors.
                                    If not provided, a default id handler will be used.
                                    If set to false, then nothing will be reported.
 * @property {boolean} debug        If set to true, the the system will report debug messages as default for the listenTo method.
 */

/**
 * Creates an element resize detector instance.
 * @public
 * @param {Options?} options Optional global options object that will decide how this instance will work.
 */
module.exports = function(options) {
    options = options || {};

    //idHandler is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var idHandler;

    if (options.idHandler) {
        // To maintain compatability with idHandler.get(element, readonly), make sure to wrap the given idHandler
        // so that readonly flag always is true when it's used here. This may be removed next major version bump.
        idHandler = {
            get: function (element) { return options.idHandler.get(element, true); },
            set: options.idHandler.set
        };
    } else {
        var idGenerator = idGeneratorMaker();
        var defaultIdHandler = idHandlerMaker({
            idGenerator: idGenerator,
            stateHandler: stateHandler
        });
        idHandler = defaultIdHandler;
    }

    //reporter is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var reporter = options.reporter;

    if(!reporter) {
        //If options.reporter is false, then the reporter should be quiet.
        var quiet = reporter === false;
        reporter = reporterMaker(quiet);
    }

    //batchProcessor is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var batchProcessor = getOption(options, "batchProcessor", batchProcessorMaker({ reporter: reporter }));

    //Options to be used as default for the listenTo function.
    var globalOptions = {};
    globalOptions.callOnAdd     = !!getOption(options, "callOnAdd", true);
    globalOptions.debug         = !!getOption(options, "debug", false);

    var eventListenerHandler    = listenerHandlerMaker(idHandler);
    var elementUtils            = elementUtilsMaker({
        stateHandler: stateHandler
    });

    //The detection strategy to be used.
    var detectionStrategy;
    var desiredStrategy = getOption(options, "strategy", "object");
    var importantCssRules = getOption(options, "important", false);
    var strategyOptions = {
        reporter: reporter,
        batchProcessor: batchProcessor,
        stateHandler: stateHandler,
        idHandler: idHandler,
        important: importantCssRules
    };

    if(desiredStrategy === "scroll") {
        if (browserDetector.isLegacyOpera()) {
            reporter.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy.");
            desiredStrategy = "object";
        } else if (browserDetector.isIE(9)) {
            reporter.warn("Scroll strategy is not supported on IE9. Changing to object strategy.");
            desiredStrategy = "object";
        }
    }

    if(desiredStrategy === "scroll") {
        detectionStrategy = scrollStrategyMaker(strategyOptions);
    } else if(desiredStrategy === "object") {
        detectionStrategy = objectStrategyMaker(strategyOptions);
    } else {
        throw new Error("Invalid strategy name: " + desiredStrategy);
    }

    //Calls can be made to listenTo with elements that are still being installed.
    //Also, same elements can occur in the elements list in the listenTo function.
    //With this map, the ready callbacks can be synchronized between the calls
    //so that the ready callback can always be called when an element is ready - even if
    //it wasn't installed from the function itself.
    var onReadyCallbacks = {};

    /**
     * Makes the given elements resize-detectable and starts listening to resize events on the elements. Calls the event callback for each event for each element.
     * @public
     * @param {Options?} options Optional options object. These options will override the global options. Some options may not be overriden, such as idHandler.
     * @param {element[]|element} elements The given array of elements to detect resize events of. Single element is also valid.
     * @param {function} listener The callback to be executed for each resize event for each element.
     */
    function listenTo(options, elements, listener) {
        function onResizeCallback(element) {
            var listeners = eventListenerHandler.get(element);
            forEach(listeners, function callListenerProxy(listener) {
                listener(element);
            });
        }

        function addListener(callOnAdd, element, listener) {
            eventListenerHandler.add(element, listener);

            if(callOnAdd) {
                listener(element);
            }
        }

        //Options object may be omitted.
        if(!listener) {
            listener = elements;
            elements = options;
            options = {};
        }

        if(!elements) {
            throw new Error("At least one element required.");
        }

        if(!listener) {
            throw new Error("Listener required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        var elementsReady = 0;

        var callOnAdd = getOption(options, "callOnAdd", globalOptions.callOnAdd);
        var onReadyCallback = getOption(options, "onReady", function noop() {});
        var debug = getOption(options, "debug", globalOptions.debug);

        forEach(elements, function attachListenerToElement(element) {
            if (!stateHandler.getState(element)) {
                stateHandler.initState(element);
                idHandler.set(element);
            }

            var id = idHandler.get(element);

            debug && reporter.log("Attaching listener to element", id, element);

            if(!elementUtils.isDetectable(element)) {
                debug && reporter.log(id, "Not detectable.");
                if(elementUtils.isBusy(element)) {
                    debug && reporter.log(id, "System busy making it detectable");

                    //The element is being prepared to be detectable. Do not make it detectable.
                    //Just add the listener, because the element will soon be detectable.
                    addListener(callOnAdd, element, listener);
                    onReadyCallbacks[id] = onReadyCallbacks[id] || [];
                    onReadyCallbacks[id].push(function onReady() {
                        elementsReady++;

                        if(elementsReady === elements.length) {
                            onReadyCallback();
                        }
                    });
                    return;
                }

                debug && reporter.log(id, "Making detectable...");
                //The element is not prepared to be detectable, so do prepare it and add a listener to it.
                elementUtils.markBusy(element, true);
                return detectionStrategy.makeDetectable({ debug: debug, important: importantCssRules }, element, function onElementDetectable(element) {
                    debug && reporter.log(id, "onElementDetectable");

                    if (stateHandler.getState(element)) {
                        elementUtils.markAsDetectable(element);
                        elementUtils.markBusy(element, false);
                        detectionStrategy.addListener(element, onResizeCallback);
                        addListener(callOnAdd, element, listener);

                        // Since the element size might have changed since the call to "listenTo", we need to check for this change,
                        // so that a resize event may be emitted.
                        // Having the startSize object is optional (since it does not make sense in some cases such as unrendered elements), so check for its existance before.
                        // Also, check the state existance before since the element may have been uninstalled in the installation process.
                        var state = stateHandler.getState(element);
                        if (state && state.startSize) {
                            var width = element.offsetWidth;
                            var height = element.offsetHeight;
                            if (state.startSize.width !== width || state.startSize.height !== height) {
                                onResizeCallback(element);
                            }
                        }

                        if(onReadyCallbacks[id]) {
                            forEach(onReadyCallbacks[id], function(callback) {
                                callback();
                            });
                        }
                    } else {
                        // The element has been unisntalled before being detectable.
                        debug && reporter.log(id, "Element uninstalled before being detectable.");
                    }

                    delete onReadyCallbacks[id];

                    elementsReady++;
                    if(elementsReady === elements.length) {
                        onReadyCallback();
                    }
                });
            }

            debug && reporter.log(id, "Already detecable, adding listener.");

            //The element has been prepared to be detectable and is ready to be listened to.
            addListener(callOnAdd, element, listener);
            elementsReady++;
        });

        if(elementsReady === elements.length) {
            onReadyCallback();
        }
    }

    function uninstall(elements) {
        if(!elements) {
            return reporter.error("At least one element is required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        forEach(elements, function (element) {
            eventListenerHandler.removeAllListeners(element);
            detectionStrategy.uninstall(element);
            stateHandler.cleanState(element);
        });
    }

    function initDocument(targetDocument) {
        detectionStrategy.initDocument && detectionStrategy.initDocument(targetDocument);
    }

    return {
        listenTo: listenTo,
        removeListener: eventListenerHandler.removeListener,
        removeAllListeners: eventListenerHandler.removeAllListeners,
        uninstall: uninstall,
        initDocument: initDocument
    };
};

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var getState = options.stateHandler.getState;

    /**
     * Tells if the element has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is detectable or not.
     */
    function isDetectable(element) {
        var state = getState(element);
        return state && !!state.isDetectable;
    }

    /**
     * Marks the element that it has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to mark.
     */
    function markAsDetectable(element) {
        getState(element).isDetectable = true;
    }

    /**
     * Tells if the element is busy or not.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is busy or not.
     */
    function isBusy(element) {
        return !!getState(element).busy;
    }

    /**
     * Marks the object is busy and should not be made detectable.
     * @public
     * @param {element} element The element to mark.
     * @param {boolean} busy If the element is busy or not.
     */
    function markBusy(element, busy) {
        getState(element).busy = !!busy;
    }

    return {
        isDetectable: isDetectable,
        markAsDetectable: markAsDetectable,
        isBusy: isBusy,
        markBusy: markBusy
    };
};


/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(idHandler) {
    var eventListeners = {};

    /**
     * Gets all listeners for the given element.
     * @public
     * @param {element} element The element to get all listeners for.
     * @returns All listeners for the given element.
     */
    function getListeners(element) {
        var id = idHandler.get(element);

        if (id === undefined) {
            return [];
        }

        return eventListeners[id] || [];
    }

    /**
     * Stores the given listener for the given element. Will not actually add the listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The callback that the element has added.
     */
    function addListener(element, listener) {
        var id = idHandler.get(element);

        if(!eventListeners[id]) {
            eventListeners[id] = [];
        }

        eventListeners[id].push(listener);
    }

    function removeListener(element, listener) {
        var listeners = getListeners(element);
        for (var i = 0, len = listeners.length; i < len; ++i) {
            if (listeners[i] === listener) {
              listeners.splice(i, 1);
              break;
            }
        }
    }

    function removeAllListeners(element) {
      var listeners = getListeners(element);
      if (!listeners) { return; }
      listeners.length = 0;
    }

    return {
        get: getListeners,
        add: addListener,
        removeListener: removeListener,
        removeAllListeners: removeAllListeners
    };
};


/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
    var idCount = 1;

    /**
     * Generates a new unique id in the context.
     * @public
     * @returns {number} A unique id in the context.
     */
    function generate() {
        return idCount++;
    }

    return {
        generate: generate
    };
};


/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var idGenerator     = options.idGenerator;
    var getState        = options.stateHandler.getState;

    /**
     * Gets the resize detector id of the element.
     * @public
     * @param {element} element The target element to get the id of.
     * @returns {string|number|null} The id of the element. Null if it has no id.
     */
    function getId(element) {
        var state = getState(element);

        if (state && state.id !== undefined) {
            return state.id;
        }

        return null;
    }

    /**
     * Sets the resize detector id of the element. Requires the element to have a resize detector state initialized.
     * @public
     * @param {element} element The target element to set the id of.
     * @returns {string|number|null} The id of the element.
     */
    function setId(element) {
        var state = getState(element);

        if (!state) {
            throw new Error("setId required the element to have a resize detection state.");
        }

        var id = idGenerator.generate();

        state.id = id;

        return id;
    }

    return {
        get: getId,
        set: setId
    };
};


/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global console: false */

/**
 * Reporter that handles the reporting of logs, warnings and errors.
 * @public
 * @param {boolean} quiet Tells if the reporter should be quiet or not.
 */
module.exports = function(quiet) {
    function noop() {
        //Does nothing.
    }

    var reporter = {
        log: noop,
        warn: noop,
        error: noop
    };

    if(!quiet && window.console) {
        var attachFunction = function(reporter, name) {
            //The proxy is needed to be able to call the method with the console context,
            //since we cannot use bind.
            reporter[name] = function reporterProxy() {
                var f = console[name];
                if (f.apply) { //IE9 does not support console.log.apply :)
                    f.apply(console, arguments);
                } else {
                    for (var i = 0; i < arguments.length; i++) {
                        f(arguments[i]);
                    }
                }
            };
        };

        attachFunction(reporter, "log");
        attachFunction(reporter, "warn");
        attachFunction(reporter, "error");
    }

    return reporter;
};

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(471);

module.exports = function batchProcessorMaker(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var asyncProcess    = utils.getOption(options, "async", true);
    var autoProcess     = utils.getOption(options, "auto", true);

    if(autoProcess && !asyncProcess) {
        reporter && reporter.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true.");
        asyncProcess = true;
    }

    var batch = Batch();
    var asyncFrameHandler;
    var isProcessing = false;

    function addFunction(level, fn) {
        if(!isProcessing && autoProcess && asyncProcess && batch.size() === 0) {
            // Since this is async, it is guaranteed to be executed after that the fn is added to the batch.
            // This needs to be done before, since we're checking the size of the batch to be 0.
            processBatchAsync();
        }

        batch.add(level, fn);
    }

    function processBatch() {
        // Save the current batch, and create a new batch so that incoming functions are not added into the currently processing batch.
        // Continue processing until the top-level batch is empty (functions may be added to the new batch while processing, and so on).
        isProcessing = true;
        while (batch.size()) {
            var processingBatch = batch;
            batch = Batch();
            processingBatch.process();
        }
        isProcessing = false;
    }

    function forceProcessBatch(localAsyncProcess) {
        if (isProcessing) {
            return;
        }

        if(localAsyncProcess === undefined) {
            localAsyncProcess = asyncProcess;
        }

        if(asyncFrameHandler) {
            cancelFrame(asyncFrameHandler);
            asyncFrameHandler = null;
        }

        if(localAsyncProcess) {
            processBatchAsync();
        } else {
            processBatch();
        }
    }

    function processBatchAsync() {
        asyncFrameHandler = requestFrame(processBatch);
    }

    function clearBatch() {
        batch           = {};
        batchSize       = 0;
        topLevel        = 0;
        bottomLevel     = 0;
    }

    function cancelFrame(listener) {
        // var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
        var cancel = clearTimeout;
        return cancel(listener);
    }

    function requestFrame(callback) {
        // var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) { return window.setTimeout(fn, 20); };
        var raf = function(fn) { return setTimeout(fn, 0); };
        return raf(callback);
    }

    return {
        add: addFunction,
        force: forceProcessBatch
    };
};

function Batch() {
    var batch       = {};
    var size        = 0;
    var topLevel    = 0;
    var bottomLevel = 0;

    function add(level, fn) {
        if(!fn) {
            fn = level;
            level = 0;
        }

        if(level > topLevel) {
            topLevel = level;
        } else if(level < bottomLevel) {
            bottomLevel = level;
        }

        if(!batch[level]) {
            batch[level] = [];
        }

        batch[level].push(fn);
        size++;
    }

    function process() {
        for(var level = bottomLevel; level <= topLevel; level++) {
            var fns = batch[level];

            for(var i = 0; i < fns.length; i++) {
                var fn = fns[i];
                fn();
            }
        }
    }

    function getSize() {
        return size;
    }

    return {
        add: add,
        process: process,
        size: getSize
    };
}


/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

utils.getOption = getOption;

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var prop = "_erd";

function initState(element) {
    element[prop] = {};
    return getState(element);
}

function getState(element) {
    return element[prop];
}

function cleanState(element) {
    delete element[prop];
}

module.exports = {
    initState: initState,
    getState: getState,
    cleanState: cleanState
};


/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects objects to elements in order to detect resize events.
 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
 */



var browserDetector = __webpack_require__(222);

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;

    if(!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        function listenerProxy() {
            listener(element);
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support object, but supports the resize event directly on elements.
            getState(element).object = {
                proxy: listenerProxy
            };
            element.attachEvent("onresize", listenerProxy);
        } else {
            var object = getObject(element);

            if(!object) {
                throw new Error("Element is not detectable by this strategy.");
            }

            object.contentDocument.defaultView.addEventListener("resize", listenerProxy);
        }
    }

    function buildCssTextString(rules) {
        var seperator = options.important ? " !important; " : "; ";

        return (rules.join(seperator) + seperator).trim();
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};
        var debug = options.debug;

        function injectObject(element, callback) {
            var OBJECT_STYLE = buildCssTextString(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"]);

            //The target element needs to be positioned (everything except static) so the absolute positioned object will be positioned relative to the target element.

            // Position altering may be performed directly or on object load, depending on if style resolution is possible directly or not.
            var positionCheckPerformed = false;

            // The element may not yet be attached to the DOM, and therefore the style object may be empty in some browsers.
            // Since the style object is a reference, it will be updated as soon as the element is attached to the DOM.
            var style = window.getComputedStyle(element);
            var width = element.offsetWidth;
            var height = element.offsetHeight;

            getState(element).startSize = {
                width: width,
                height: height
            };

            function mutateDom() {
                function alterPositionStyles() {
                    if(style.position === "static") {
                        element.style.setProperty("position", "relative", options.important ? "important" : "");

                        var removeRelativeStyles = function(reporter, element, style, property) {
                            function getNumericalValue(value) {
                                return value.replace(/[^-\d\.]/g, "");
                            }

                            var value = style[property];

                            if(value !== "auto" && getNumericalValue(value) !== "0") {
                                reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                                element.style.setProperty(property, "0", options.important ? "important" : "");
                            }
                        };

                        //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                        //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                        removeRelativeStyles(reporter, element, style, "top");
                        removeRelativeStyles(reporter, element, style, "right");
                        removeRelativeStyles(reporter, element, style, "bottom");
                        removeRelativeStyles(reporter, element, style, "left");
                    }
                }

                function onObjectLoad() {
                    // The object has been loaded, which means that the element now is guaranteed to be attached to the DOM.
                    if (!positionCheckPerformed) {
                        alterPositionStyles();
                    }

                    /*jshint validthis: true */

                    function getDocument(element, callback) {
                        //Opera 12 seem to call the object.onload before the actual document has been created.
                        //So if it is not present, poll it with an timeout until it is present.
                        //TODO: Could maybe be handled better with object.onreadystatechange or similar.
                        if(!element.contentDocument) {
                            var state = getState(element);
                            if (state.checkForObjectDocumentTimeoutId) {
                                window.clearTimeout(state.checkForObjectDocumentTimeoutId);
                            }
                            state.checkForObjectDocumentTimeoutId = setTimeout(function checkForObjectDocument() {
                                state.checkForObjectDocumentTimeoutId = 0;
                                getDocument(element, callback);
                            }, 100);

                            return;
                        }

                        callback(element.contentDocument);
                    }

                    //Mutating the object element here seems to fire another load event.
                    //Mutating the inner document of the object element is fine though.
                    var objectElement = this;

                    //Create the style element to be added to the object.
                    getDocument(objectElement, function onObjectDocumentReady(objectDocument) {
                        //Notify that the element is ready to be listened to.
                        callback(element);
                    });
                }

                // The element may be detached from the DOM, and some browsers does not support style resolving of detached elements.
                // The alterPositionStyles needs to be delayed until we know the element has been attached to the DOM (which we are sure of when the onObjectLoad has been fired), if style resolution is not possible.
                if (style.position !== "") {
                    alterPositionStyles(style);
                    positionCheckPerformed = true;
                }

                //Add an object element as a child to the target element that will be listened to for resize events.
                var object = document.createElement("object");
                object.style.cssText = OBJECT_STYLE;
                object.tabIndex = -1;
                object.type = "text/html";
                object.setAttribute("aria-hidden", "true");
                object.onload = onObjectLoad;

                //Safari: This must occur before adding the object to the DOM.
                //IE: Does not like that this happens before, even if it is also added after.
                if(!browserDetector.isIE()) {
                    object.data = "about:blank";
                }

                if (!getState(element)) {
                    // The element has been uninstalled before the actual loading happened.
                    return;
                }

                element.appendChild(object);
                getState(element).object = object;

                //IE: This must occur after adding the object to the DOM.
                if(browserDetector.isIE()) {
                    object.data = "about:blank";
                }
            }

            if(batchProcessor) {
                batchProcessor.add(mutateDom);
            } else {
                mutateDom();
            }
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support objects properly. Luckily they do support the resize event.
            //So do not inject the object and notify that the element is already ready to be listened to.
            //The event handler for the resize event is attached in the utils.addListener instead.
            callback(element);
        } else {
            injectObject(element, callback);
        }
    }

    /**
     * Returns the child object of the target element.
     * @private
     * @param {element} element The target element.
     * @returns The object element of the target.
     */
    function getObject(element) {
        return getState(element).object;
    }

    function uninstall(element) {
        if (!getState(element)) {
            return;
        }

        var object = getObject(element);

        if (!object) {
            return;
        }

        if (browserDetector.isIE(8)) {
            element.detachEvent("onresize", object.proxy);
        } else {
            element.removeChild(object);
        }

        if (getState(element).checkForObjectDocumentTimeoutId) {
            window.clearTimeout(getState(element).checkForObjectDocumentTimeoutId);
        }

        delete getState(element).object;
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall
    };
};


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */



var forEach = __webpack_require__(221).forEach;

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;
    var hasState        = options.stateHandler.hasState;
    var idHandler       = options.idHandler;

    if (!batchProcessor) {
        throw new Error("Missing required dependency: batchProcessor");
    }

    if (!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    //TODO: Could this perhaps be done at installation time?
    var scrollbarSizes = getScrollbarSizes();

    var styleId = "erd_scroll_detection_scrollbar_style";
    var detectionContainerClass = "erd_scroll_detection_container";

    function initDocument(targetDocument) {
        // Inject the scrollbar styling that prevents them from appearing sometimes in Chrome.
        // The injected container needs to have a class, so that it may be styled with CSS (pseudo elements).
        injectScrollStyle(targetDocument, styleId, detectionContainerClass);
    }

    initDocument(window.document);

    function buildCssTextString(rules) {
        var seperator = options.important ? " !important; " : "; ";

        return (rules.join(seperator) + seperator).trim();
    }

    function getScrollbarSizes() {
        var width = 500;
        var height = 500;

        var child = document.createElement("div");
        child.style.cssText = buildCssTextString(["position: absolute", "width: " + width*2 + "px", "height: " + height*2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);

        var container = document.createElement("div");
        container.style.cssText = buildCssTextString(["position: absolute", "width: " + width + "px", "height: " + height + "px", "overflow: scroll", "visibility: none", "top: " + -width*3 + "px", "left: " + -height*3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);

        container.appendChild(child);

        document.body.insertBefore(container, document.body.firstChild);

        var widthSize = width - container.clientWidth;
        var heightSize = height - container.clientHeight;

        document.body.removeChild(container);

        return {
            width: widthSize,
            height: heightSize
        };
    }

    function injectScrollStyle(targetDocument, styleId, containerClass) {
        function injectStyle(style, method) {
            method = method || function (element) {
                targetDocument.head.appendChild(element);
            };

            var styleElement = targetDocument.createElement("style");
            styleElement.innerHTML = style;
            styleElement.id = styleId;
            method(styleElement);
            return styleElement;
        }

        if (!targetDocument.getElementById(styleId)) {
            var containerAnimationClass = containerClass + "_animation";
            var containerAnimationActiveClass = containerClass + "_animation_active";
            var style = "/* Created by the element-resize-detector library. */\n";
            style += "." + containerClass + " > div::-webkit-scrollbar { " + buildCssTextString(["display: none"]) + " }\n\n";
            style += "." + containerAnimationActiveClass + " { " + buildCssTextString(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + containerAnimationClass, "animation-name: " + containerAnimationClass]) + " }\n";
            style += "@-webkit-keyframes " + containerAnimationClass +  " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n";
            style += "@keyframes " + containerAnimationClass +          " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }";
            injectStyle(style);
        }
    }

    function addAnimationClass(element) {
        element.className += " " + detectionContainerClass + "_animation_active";
    }

    function addEvent(el, name, cb) {
        if (el.addEventListener) {
            el.addEventListener(name, cb);
        } else if(el.attachEvent) {
            el.attachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to add event listeners.");
        }
    }

    function removeEvent(el, name, cb) {
        if (el.removeEventListener) {
            el.removeEventListener(name, cb);
        } else if(el.detachEvent) {
            el.detachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to remove event listeners.");
        }
    }

    function getExpandElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[0];
    }

    function getShrinkElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[1];
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        var listeners = getState(element).listeners;

        if (!listeners.push) {
            throw new Error("Cannot add listener to an element that is not detectable.");
        }

        getState(element).listeners.push(listener);
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};

        function debug() {
            if (options.debug) {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(idHandler.get(element), "Scroll: ");
                if (reporter.log.apply) {
                    reporter.log.apply(null, args);
                } else {
                    for (var i = 0; i < args.length; i++) {
                        reporter.log(args[i]);
                    }
                }
            }
        }

        function isDetached(element) {
            function isInDocument(element) {
                return element === element.ownerDocument.body || element.ownerDocument.body.contains(element);
            }

            if (!isInDocument(element)) {
                return true;
            }

            // FireFox returns null style in hidden iframes. See https://github.com/wnr/element-resize-detector/issues/68 and https://bugzilla.mozilla.org/show_bug.cgi?id=795520
            if (window.getComputedStyle(element) === null) {
                return true;
            }

            return false;
        }

        function isUnrendered(element) {
            // Check the absolute positioned container since the top level container is display: inline.
            var container = getState(element).container.childNodes[0];
            var style = window.getComputedStyle(container);
            return !style.width || style.width.indexOf("px") === -1; //Can only compute pixel value when rendered.
        }

        function getStyle() {
            // Some browsers only force layouts when actually reading the style properties of the style object, so make sure that they are all read here,
            // so that the user of the function can be sure that it will perform the layout here, instead of later (important for batching).
            var elementStyle            = window.getComputedStyle(element);
            var style                   = {};
            style.position              = elementStyle.position;
            style.width                 = element.offsetWidth;
            style.height                = element.offsetHeight;
            style.top                   = elementStyle.top;
            style.right                 = elementStyle.right;
            style.bottom                = elementStyle.bottom;
            style.left                  = elementStyle.left;
            style.widthCSS              = elementStyle.width;
            style.heightCSS             = elementStyle.height;
            return style;
        }

        function storeStartSize() {
            var style = getStyle();
            getState(element).startSize = {
                width: style.width,
                height: style.height
            };
            debug("Element start size", getState(element).startSize);
        }

        function initListeners() {
            getState(element).listeners = [];
        }

        function storeStyle() {
            debug("storeStyle invoked.");
            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getStyle();
            getState(element).style = style;
        }

        function storeCurrentSize(element, width, height) {
            getState(element).lastWidth = width;
            getState(element).lastHeight  = height;
        }

        function getExpandChildElement(element) {
            return getExpandElement(element).childNodes[0];
        }

        function getWidthOffset() {
            return 2 * scrollbarSizes.width + 1;
        }

        function getHeightOffset() {
            return 2 * scrollbarSizes.height + 1;
        }

        function getExpandWidth(width) {
            return width + 10 + getWidthOffset();
        }

        function getExpandHeight(height) {
            return height + 10 + getHeightOffset();
        }

        function getShrinkWidth(width) {
            return width * 2 + getWidthOffset();
        }

        function getShrinkHeight(height) {
            return height * 2 + getHeightOffset();
        }

        function positionScrollbars(element, width, height) {
            var expand          = getExpandElement(element);
            var shrink          = getShrinkElement(element);
            var expandWidth     = getExpandWidth(width);
            var expandHeight    = getExpandHeight(height);
            var shrinkWidth     = getShrinkWidth(width);
            var shrinkHeight    = getShrinkHeight(height);
            expand.scrollLeft   = expandWidth;
            expand.scrollTop    = expandHeight;
            shrink.scrollLeft   = shrinkWidth;
            shrink.scrollTop    = shrinkHeight;
        }

        function injectContainerElement() {
            var container = getState(element).container;

            if (!container) {
                container                   = document.createElement("div");
                container.className         = detectionContainerClass;
                container.style.cssText     = buildCssTextString(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]);
                getState(element).container = container;
                addAnimationClass(container);
                element.appendChild(container);

                var onAnimationStart = function () {
                    getState(element).onRendered && getState(element).onRendered();
                };

                addEvent(container, "animationstart", onAnimationStart);

                // Store the event handler here so that they may be removed when uninstall is called.
                // See uninstall function for an explanation why it is needed.
                getState(element).onAnimationStart = onAnimationStart;
            }

            return container;
        }

        function injectScrollElements() {
            function alterPositionStyles() {
                var style = getState(element).style;

                if(style.position === "static") {
                    element.style.setProperty("position", "relative",options.important ? "important" : "");

                    var removeRelativeStyles = function(reporter, element, style, property) {
                        function getNumericalValue(value) {
                            return value.replace(/[^-\d\.]/g, "");
                        }

                        var value = style[property];

                        if(value !== "auto" && getNumericalValue(value) !== "0") {
                            reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                            element.style[property] = 0;
                        }
                    };

                    //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                    //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                    removeRelativeStyles(reporter, element, style, "top");
                    removeRelativeStyles(reporter, element, style, "right");
                    removeRelativeStyles(reporter, element, style, "bottom");
                    removeRelativeStyles(reporter, element, style, "left");
                }
            }

            function getLeftTopBottomRightCssText(left, top, bottom, right) {
                left = (!left ? "0" : (left + "px"));
                top = (!top ? "0" : (top + "px"));
                bottom = (!bottom ? "0" : (bottom + "px"));
                right = (!right ? "0" : (right + "px"));

                return ["left: " + left, "top: " + top, "right: " + right, "bottom: " + bottom];
            }

            debug("Injecting elements");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            alterPositionStyles();

            var rootContainer = getState(element).container;

            if (!rootContainer) {
                rootContainer = injectContainerElement();
            }

            // Due to this WebKit bug https://bugs.webkit.org/show_bug.cgi?id=80808 (currently fixed in Blink, but still present in WebKit browsers such as Safari),
            // we need to inject two containers, one that is width/height 100% and another that is left/top -1px so that the final container always is 1x1 pixels bigger than
            // the targeted element.
            // When the bug is resolved, "containerContainer" may be removed.

            // The outer container can occasionally be less wide than the targeted when inside inline elements element in WebKit (see https://bugs.webkit.org/show_bug.cgi?id=152980).
            // This should be no problem since the inner container either way makes sure the injected scroll elements are at least 1x1 px.

            var scrollbarWidth          = scrollbarSizes.width;
            var scrollbarHeight         = scrollbarSizes.height;
            var containerContainerStyle = buildCssTextString(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]);
            var containerStyle          = buildCssTextString(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(getLeftTopBottomRightCssText(-(1 + scrollbarWidth), -(1 + scrollbarHeight), -scrollbarHeight, -scrollbarWidth)));
            var expandStyle             = buildCssTextString(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]);
            var shrinkStyle             = buildCssTextString(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]);
            var expandChildStyle        = buildCssTextString(["position: absolute", "left: 0", "top: 0"]);
            var shrinkChildStyle        = buildCssTextString(["position: absolute", "width: 200%", "height: 200%"]);

            var containerContainer      = document.createElement("div");
            var container               = document.createElement("div");
            var expand                  = document.createElement("div");
            var expandChild             = document.createElement("div");
            var shrink                  = document.createElement("div");
            var shrinkChild             = document.createElement("div");

            // Some browsers choke on the resize system being rtl, so force it to ltr. https://github.com/wnr/element-resize-detector/issues/56
            // However, dir should not be set on the top level container as it alters the dimensions of the target element in some browsers.
            containerContainer.dir              = "ltr";

            containerContainer.style.cssText    = containerContainerStyle;
            containerContainer.className        = detectionContainerClass;
            container.className                 = detectionContainerClass;
            container.style.cssText             = containerStyle;
            expand.style.cssText                = expandStyle;
            expandChild.style.cssText           = expandChildStyle;
            shrink.style.cssText                = shrinkStyle;
            shrinkChild.style.cssText           = shrinkChildStyle;

            expand.appendChild(expandChild);
            shrink.appendChild(shrinkChild);
            container.appendChild(expand);
            container.appendChild(shrink);
            containerContainer.appendChild(container);
            rootContainer.appendChild(containerContainer);

            function onExpandScroll() {
                getState(element).onExpand && getState(element).onExpand();
            }

            function onShrinkScroll() {
                getState(element).onShrink && getState(element).onShrink();
            }

            addEvent(expand, "scroll", onExpandScroll);
            addEvent(shrink, "scroll", onShrinkScroll);

            // Store the event handlers here so that they may be removed when uninstall is called.
            // See uninstall function for an explanation why it is needed.
            getState(element).onExpandScroll = onExpandScroll;
            getState(element).onShrinkScroll = onShrinkScroll;
        }

        function registerListenersAndPositionElements() {
            function updateChildSizes(element, width, height) {
                var expandChild             = getExpandChildElement(element);
                var expandWidth             = getExpandWidth(width);
                var expandHeight            = getExpandHeight(height);
                expandChild.style.setProperty("width", expandWidth + "px", options.important ? "important" : "");
                expandChild.style.setProperty("height", expandHeight + "px", options.important ? "important" : "");
            }

            function updateDetectorElements(done) {
                var width           = element.offsetWidth;
                var height          = element.offsetHeight;

                // Check whether the size has actually changed since last time the algorithm ran. If not, some steps may be skipped.
                var sizeChanged = width !== getState(element).lastWidth || height !== getState(element).lastHeight;

                debug("Storing current size", width, height);

                // Store the size of the element sync here, so that multiple scroll events may be ignored in the event listeners.
                // Otherwise the if-check in handleScroll is useless.
                storeCurrentSize(element, width, height);

                // Since we delay the processing of the batch, there is a risk that uninstall has been called before the batch gets to execute.
                // Since there is no way to cancel the fn executions, we need to add an uninstall guard to all fns of the batch.

                batchProcessor.add(0, function performUpdateChildSizes() {
                    if (!sizeChanged) {
                        return;
                    }

                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    if (options.debug) {
                        var w = element.offsetWidth;
                        var h = element.offsetHeight;

                        if (w !== width || h !== height) {
                            reporter.warn(idHandler.get(element), "Scroll: Size changed before updating detector elements.");
                        }
                    }

                    updateChildSizes(element, width, height);
                });

                batchProcessor.add(1, function updateScrollbars() {
                    // This function needs to be invoked event though the size is unchanged. The element could have been resized very quickly and then
                    // been restored to the original size, which will have changed the scrollbar positions.

                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    positionScrollbars(element, width, height);
                });

                if (sizeChanged && done) {
                    batchProcessor.add(2, function () {
                        if (!getState(element)) {
                            debug("Aborting because element has been uninstalled");
                            return;
                        }

                        if (!areElementsInjected()) {
                          debug("Aborting because element container has not been initialized");
                          return;
                        }

                        done();
                    });
                }
            }

            function areElementsInjected() {
                return !!getState(element).container;
            }

            function notifyListenersIfNeeded() {
                function isFirstNotify() {
                    return getState(element).lastNotifiedWidth === undefined;
                }

                debug("notifyListenersIfNeeded invoked");

                var state = getState(element);

                // Don't notify if the current size is the start size, and this is the first notification.
                if (isFirstNotify() && state.lastWidth === state.startSize.width && state.lastHeight === state.startSize.height) {
                    return debug("Not notifying: Size is the same as the start size, and there has been no notification yet.");
                }

                // Don't notify if the size already has been notified.
                if (state.lastWidth === state.lastNotifiedWidth && state.lastHeight === state.lastNotifiedHeight) {
                    return debug("Not notifying: Size already notified");
                }


                debug("Current size not notified, notifying...");
                state.lastNotifiedWidth = state.lastWidth;
                state.lastNotifiedHeight = state.lastHeight;
                forEach(getState(element).listeners, function (listener) {
                    listener(element);
                });
            }

            function handleRender() {
                debug("startanimation triggered.");

                if (isUnrendered(element)) {
                    debug("Ignoring since element is still unrendered...");
                    return;
                }

                debug("Element rendered.");
                var expand = getExpandElement(element);
                var shrink = getShrinkElement(element);
                if (expand.scrollLeft === 0 || expand.scrollTop === 0 || shrink.scrollLeft === 0 || shrink.scrollTop === 0) {
                    debug("Scrollbars out of sync. Updating detector elements...");
                    updateDetectorElements(notifyListenersIfNeeded);
                }
            }

            function handleScroll() {
                debug("Scroll detected.");

                if (isUnrendered(element)) {
                    // Element is still unrendered. Skip this scroll event.
                    debug("Scroll event fired while unrendered. Ignoring...");
                    return;
                }

                updateDetectorElements(notifyListenersIfNeeded);
            }

            debug("registerListenersAndPositionElements invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            getState(element).onRendered = handleRender;
            getState(element).onExpand = handleScroll;
            getState(element).onShrink = handleScroll;

            var style = getState(element).style;
            updateChildSizes(element, style.width, style.height);
        }

        function finalizeDomMutation() {
            debug("finalizeDomMutation invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getState(element).style;
            storeCurrentSize(element, style.width, style.height);
            positionScrollbars(element, style.width, style.height);
        }

        function ready() {
            callback(element);
        }

        function install() {
            debug("Installing...");
            initListeners();
            storeStartSize();

            batchProcessor.add(0, storeStyle);
            batchProcessor.add(1, injectScrollElements);
            batchProcessor.add(2, registerListenersAndPositionElements);
            batchProcessor.add(3, finalizeDomMutation);
            batchProcessor.add(4, ready);
        }

        debug("Making detectable...");

        if (isDetached(element)) {
            debug("Element is detached");

            injectContainerElement();

            debug("Waiting until element is attached...");

            getState(element).onRendered = function () {
                debug("Element is now attached");
                install();
            };
        } else {
            install();
        }
    }

    function uninstall(element) {
        var state = getState(element);

        if (!state) {
            // Uninstall has been called on a non-erd element.
            return;
        }

        // Uninstall may have been called in the following scenarios:
        // (1) Right between the sync code and async batch (here state.busy = true, but nothing have been registered or injected).
        // (2) In the ready callback of the last level of the batch by another element (here, state.busy = true, but all the stuff has been injected).
        // (3) After the installation process (here, state.busy = false and all the stuff has been injected).
        // So to be on the safe side, let's check for each thing before removing.

        // We need to remove the event listeners, because otherwise the event might fire on an uninstall element which results in an error when trying to get the state of the element.
        state.onExpandScroll && removeEvent(getExpandElement(element), "scroll", state.onExpandScroll);
        state.onShrinkScroll && removeEvent(getShrinkElement(element), "scroll", state.onShrinkScroll);
        state.onAnimationStart && removeEvent(state.container, "animationstart", state.onAnimationStart);

        state.container && element.removeChild(state.container);
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall,
        initDocument: initDocument
    };
};


/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleColumns2Rows = exports.getFlattenColumns = exports.setColumnsData = exports.getAllColumns = exports.handleColumnsOrder = undefined;

var _utils = __webpack_require__(45);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 初始化的列按照fixed属性进行排序
var handleColumnsOrder = exports.handleColumnsOrder = function handleColumnsOrder(columns) {
  var left = [];
  var right = [];
  var center = [];
  columns.forEach(function (column) {
    if (column.fixed && column.fixed === 'left') {
      left.push(column);
    } else if (column.fixed && column.fixed === 'right') {
      right.push(column);
    } else {
      center.push(column);
    }
  });
  return {
    left: left.concat(center).concat(right),
    right: right.concat(center).concat(left)
  };
};
/**
 * 获取所有列
 * 初始列选项
 * @param  {} cols
 * // 如果是在table head使用，对于有子列的选项也需要返回
 * @param  {} forTableHead = false
 *
 */
var getAllColumns = exports.getAllColumns = function getAllColumns(columns) {
  var forTableHead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var result = [];
  columns.forEach(function (column) {
    if (column.children) {
      if (forTableHead) {
        result.push(column);
      }
      result.push.apply(result, _toConsumableArray(getAllColumns(column.children, forTableHead)));
    } else {
      result.push(column);
    }
  });

  return result;
};
var setColumnsData = exports.setColumnsData = function setColumnsData(columns) {
  var cloneColumns = _utils2.default.deepCopy(columns);
  cloneColumns.forEach(function (column, index) {
    // column._index = index;
    // 为每列增加一个id标识符,作用？？？
    column._id = 'bui_id' + _utils2.default.getRandomStr(6);
    if (column.children) {
      column.children = setColumnsData(column.children);
    }
  });
  return cloneColumns;
};
// 获取body所需要的列
var getFlattenColumns = exports.getFlattenColumns = function getFlattenColumns(columns, fixedType) {
  var left = [];
  var right = [];
  var center = [];
  // const maxLevel = 1;

  var allColumns = getAllColumns(columns);
  // const allColumnsForHead = getAllColumns(columns, true);
  allColumns.forEach(function (column, index) {
    if (column.fixed && column.fixed === 'left') {
      left.push(column);
    } else if (column.fixed && column.fixed === 'right') {
      right.push(column);
    } else {
      center.push(column);
    }
  });
  return fixedType === 'right' ? right.concat(center).concat(left) : left.concat(center).concat(right);
};
// 获取head所需要的行
var handleColumns2Rows = exports.handleColumns2Rows = function handleColumns2Rows(columns) {
  var maxLevel = 1;
  // 设置还有子列的选项的列可横跨的列数和层级
  var setColumnColSpan = function setColumnColSpan(column, parent) {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    var colSpan = 0;
    if (column.children) {
      column.children.forEach(function (subColumn) {
        setColumnColSpan(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };
  columns.forEach(function (column, index) {
    column.level = 1;
    setColumnColSpan(column, '');
  });
  var rows = Array.from({ length: maxLevel }, function () {
    return [];
  });
  var allColumns = getAllColumns(columns, true);
  allColumns.forEach(function (column) {
    if (column.children) {
      column.rowSpan = 1;
    } else {
      column.rowSpan = maxLevel - column.level + 1;
    }
    rows[column.level - 1].push(column);
  });

  return rows;
};

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.baseClass},[_c('div',{staticClass:"bui-table-wrapper"},[_c('div',{ref:"headerWrapper",staticClass:"bui-table-header",class:{
        'bui-table-overflow-y': _vm.scrollY,
      },style:(_vm.headerStyles.headerWrapper),on:{"mousewheel":_vm.handleMouseWheel,"DOMMouseScroll":_vm.handleMouseWheel}},[_c('table-head',{ref:"head",attrs:{"columns":_vm.allColumns,"data":_vm.rebuildData,"column-rows":_vm.columnRows,"styles":_vm.tableStyles,"columns-width":_vm.columnsWidth,"extra-header-rows":_vm.extraHeaderRows,"header-height":_vm.isTableBodyDiv ? _vm.turbo.headerHeight : ''}})],1),_vm._v(" "),(_vm.touchCeiling)?_c('div',{staticClass:"bui-table-header",class:{
        'bui-table-overflow-y': _vm.scrollY,
      }},[_c('table-head',{attrs:{"columns":_vm.allColumns,"data":_vm.rebuildData,"column-rows":_vm.columnRows,"styles":_vm.tableStyles,"columns-width":_vm.columnsWidth,"extra-header-rows":_vm.extraHeaderRows,"header-height":_vm.isTableBodyDiv ? _vm.turbo.headerHeight : ''}})],1):_vm._e(),_vm._v(" "),(_vm.data && _vm.data.length)?_c('div',{ref:"bodyWrapper",staticClass:"bui-table-body",class:{
        'bui-table-overflow-x': _vm.scrollX,
        'bui-table-overflow-y': _vm.scrollY,
        'bui-table-scrolling-left': _vm.scrollPosition === 'left',
        'bui-table-scrolling-right': _vm.scrollPosition === 'right',
        'bui-table-scrolling-middle': _vm.scrollPosition === 'middle',
      },style:(_vm.bodyWrapperStyles),on:{"&scroll":function($event){return _vm.handleBodyScroll($event)}}},[(_vm.isTableBodyDiv)?_c('table-body-div',{ref:"body",attrs:{"columns":_vm.allColumns,"columns-width":_vm.columnsWidth,"styles":_vm.tableStyles,"data":_vm.rebuildData,"span-method":_vm.spanMethod,"row-height":_vm.turbo.rowHeight}}):_c('table-body',{ref:"body",attrs:{"columns":_vm.allColumns,"columns-width":_vm.columnsWidth,"styles":_vm.tableStyles,"span-method":_vm.spanMethod,"data":_vm.rebuildData}})],1):_vm._e(),_vm._v(" "),(!_vm.data || !_vm.data.length)?_c('div',{staticClass:"bui-table-no-data"},[_vm._t("no-data",[_c('table',{attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('tbody',[_c('tr',[_c('td',{attrs:{"colspan":_vm.allColumns.length}},[_c('div',{staticClass:"bui-table-no-data-text",style:(_vm.bodyWrapperStyles)},[_vm._v("\n                  "+_vm._s(_vm._noDataText)+"\n                ")])])])])])])],2):_vm._e(),_vm._v(" "),(_vm.isLeftFixed )?_c('div',{class:{
        'bui-table-fixed-left': true,
        'bui-table-fixed-left__ceiling': _vm.touchCeiling,
      },style:(_vm.fixedLeftTableStyles),on:{"mousewheel":_vm.handleFixedMouseWheel,"DOMMouseScroll":_vm.handleFixedMouseWheel}},[_c('div',{ref:"leftHeaderWrapper",staticClass:"bui-table-fixed-header",style:(_vm.headerStyles.leftHeaderWrapper)},[_c('table-head',{attrs:{"columns":_vm.leftColumns,"data":_vm.rebuildData,"column-rows":_vm.leftFixedColumnRows,"styles":_vm.tableStyles,"columns-width":_vm.columnsWidth,"extra-header-rows":_vm.extraHeaderRows,"header-height":_vm.isTableBodyDiv ? _vm.turbo.headerHeight : '',"fixed":"left"}})],1),_vm._v(" "),(_vm.touchCeiling)?_c('div',{staticClass:"bui-table-fixed-header"},[_c('table-head',{attrs:{"columns":_vm.leftColumns,"data":_vm.rebuildData,"column-rows":_vm.leftFixedColumnRows,"styles":_vm.tableStyles,"columns-width":_vm.columnsWidth,"extra-header-rows":_vm.extraHeaderRows,"header-height":_vm.isTableBodyDiv ? _vm.turbo.headerHeight : '',"fixed":"left"}})],1):_vm._e(),_vm._v(" "),( _vm.data && _vm.data.length)?_c('div',{ref:"leftBodyWrapper",staticClass:"bui-table-fixed-body",style:(_vm.fixedBodyWrapperStyles)},[(_vm.isTableBodyDiv)?_c('table-body-div',{attrs:{"columns":_vm.leftColumns,"columns-width":_vm.columnsWidth,"styles":_vm.tableStyles,"data":_vm.rebuildData,"row-height":_vm.turbo.rowHeight,"span-method":_vm.spanMethod,"fixed":"left"}}):_c('table-body',{attrs:{"columns":_vm.leftColumns,"columns-width":_vm.columnsWidth,"styles":_vm.tableStyles,"data":_vm.rebuildData,"span-method":_vm.spanMethod,"fixed":"left"}})],1):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.isRightFixed )?_c('div',{class:{
        'bui-table-fixed-right': true,
        'bui-table-fixed-right__ceiling': _vm.touchCeiling,
      },style:(_vm.fixedRightTableStyles),on:{"mousewheel":_vm.handleFixedMouseWheel,"DOMMouseScroll":_vm.handleFixedMouseWheel}},[_c('div',{ref:"rightHeaderWrapper",staticClass:"bui-table-fixed-header",style:(_vm.headerStyles.rightHeaderWrapper)},[_c('table-head',{attrs:{"columns":_vm.rightColumns,"data":_vm.rebuildData,"column-rows":_vm.rightFixedColumnRows,"styles":_vm.tableStyles,"columns-width":_vm.columnsWidth,"extra-header-rows":_vm.extraHeaderRightRows,"header-height":_vm.isTableBodyDiv ? _vm.turbo.headerHeight : '',"fixed":"right"}})],1),_vm._v(" "),(_vm.touchCeiling)?_c('div',{staticClass:"bui-table-fixed-header"},[_c('table-head',{attrs:{"columns":_vm.rightColumns,"data":_vm.rebuildData,"column-rows":_vm.rightFixedColumnRows,"styles":_vm.tableStyles,"columns-width":_vm.columnsWidth,"extra-header-rows":_vm.extraHeaderRightRows,"header-height":_vm.isTableBodyDiv ? _vm.turbo.headerHeight : '',"fixed":"right"}})],1):_vm._e(),_vm._v(" "),(_vm.data && _vm.data.length)?_c('div',{ref:"rightBodyWrapper",staticClass:"bui-table-fixed-body",style:(_vm.fixedBodyWrapperStyles)},[(_vm.isTableBodyDiv)?_c('table-body-div',{attrs:{"data":_vm.rebuildData,"columns":_vm.rightColumns,"columns-width":_vm.columnsWidth,"styles":_vm.tableStyles,"row-height":_vm.turbo.rowHeight,"span-method":_vm.spanMethod,"fixed":"right"}}):_c('table-body',{attrs:{"data":_vm.rebuildData,"columns":_vm.rightColumns,"columns-width":_vm.columnsWidth,"styles":_vm.tableStyles,"span-method":_vm.spanMethod,"fixed":"right"}})],1):_vm._e()]):_vm._e()]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showResizeLine),expression:"showResizeLine"}],ref:"resizeLine",staticClass:"bui-table-resizeline"})])}
var staticRenderFns = []


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/mixins/emitter");

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

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

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_expand_vue__ = __webpack_require__(215);
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

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/mixins/locale");

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports = require("@byted/byted-design/lib/utils/dom");

/***/ })

/******/ });