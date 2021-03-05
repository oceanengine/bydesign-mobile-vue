'use strict';

exports.__esModule = true;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _dom = require('@byted/byted-design/lib/utils/dom.js');

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