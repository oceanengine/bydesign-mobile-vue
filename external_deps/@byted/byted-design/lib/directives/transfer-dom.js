'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Thanks to: https://github.com/airyland/vux/blob/v2/src/directives/transfer-dom/index.js
// Thanks to: https://github.com/calebroseland/vue-dom-portal

/**
 * Get target DOM Node
 * @param {(Node|string|Boolean)} [node=document.body]
 * DOM Node, CSS selector, or Boolean
 * @return {Node} The target that the el will be appended to
 */
function getTarget(node) {
  if (node === void 0) {
    node = document.body;
  }
  if (node === true) {
    return document.body;
  }
  return node instanceof window.Node ? node : document.querySelector(node);
}

var directive = {
  inserted: function inserted(el, _ref, vnode) {
    var value = _ref.value;

    if (el.dataset && el.dataset.transfer !== 'true') {
      return false;
    }
    el.className = el.className ? el.className + ' v-transfer-dom' : 'v-transfer-dom';
    var parentNode = el.parentNode;
    if (!parentNode) return;
    var home = document.createComment('');
    var hasMovedOut = false;

    if (value !== false) {
      // moving out, el is no longer in the document
      parentNode.replaceChild(home, el);
      getTarget(value).appendChild(el); // moving into new place
      hasMovedOut = true;
    }
    if (!el.__transferDomData) {
      el.__transferDomData = {
        parentNode: parentNode,
        home: home,
        target: getTarget(value),
        hasMovedOut: hasMovedOut
      };
    }
  },
  componentUpdated: function componentUpdated(el, _ref2) {
    var value = _ref2.value;

    if (el.dataset && el.dataset.transfer !== 'true') return false;
    // need to make sure children are done updating (vs. `update`)
    var ref$1 = el.__transferDomData;
    if (!ref$1) return;
    // homes.get(el)
    var parentNode = ref$1.parentNode;
    var home = ref$1.home;
    var hasMovedOut = ref$1.hasMovedOut; // recall where home is

    if (!hasMovedOut && value) {
      // remove from document and leave placeholder
      parentNode.replaceChild(home, el);
      // append to target
      getTarget(value).appendChild(el);
      el.__transferDomData = _extends({}, el.__transferDomData, { hasMovedOut: true, target: getTarget(value) });
    } else if (hasMovedOut && value === false) {
      // previously moved, coming back home
      parentNode.replaceChild(el, home);
      el.__transferDomData = _extends({}, el.__transferDomData, { hasMovedOut: false, target: getTarget(value) });
    } else if (value) {
      // already moved, going somewhere else
      getTarget(value).appendChild(el);
    }
  },
  unbind: function unbind(el) {
    if (el.dataset && el.dataset.transfer !== 'true') return false;
    el.className = el.className.replace('v-transfer-dom', '');
    var ref$1 = el.__transferDomData;
    if (!ref$1) return;
    if (el.__transferDomData.hasMovedOut === true) {
      el.__transferDomData.parentNode && el.__transferDomData.parentNode.appendChild(el);
    }
    el.__transferDomData = null;
  }
};

exports.default = directive;