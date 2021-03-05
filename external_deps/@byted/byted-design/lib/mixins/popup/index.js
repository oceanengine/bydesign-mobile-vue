'use strict';

exports.__esModule = true;

var _popupManager = require('./popup-manager.js');

var _popupManager2 = _interopRequireDefault(_popupManager);

var _dom = require('@byted/byted-design/lib/utils/dom.js');

var _setScrollEffect = require('./setScrollEffect.js');

var _emitter = require('@byted/byted-design/lib/mixins/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _base = require('@byted/byted-design/lib/components/base.js');

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