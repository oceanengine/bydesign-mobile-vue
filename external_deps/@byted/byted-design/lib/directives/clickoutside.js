'use strict';

exports.__esModule = true;
exports.default = {
  bind: function bind(el, binding, vnode) {
    function documentHandler(e) {
      if (el && el.contains && el.contains(e.target)) {
        return false;
      }
      if (binding.value || binding.expression) {
        binding.value(e);
      }
    }
    var modifiers = binding.modifiers || {};
    var capture = modifiers.capture || false;

    el.__vueClickOutside__ = documentHandler;
    el.__vueCapture__ = capture;
    document.addEventListener('click', documentHandler, capture);
  },
  update: function update() {},
  unbind: function unbind(el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__, el.__vueCapture__);
    delete el.__vueClickOutside__;
    delete el.__vueCapture__;
  }
};