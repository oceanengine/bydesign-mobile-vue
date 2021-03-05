'use strict';

exports.__esModule = true;
exports.setScrollBar = setScrollBar;
exports.resetScrollBar = resetScrollBar;

var _dom = require('@byted/byted-design/lib/utils/dom.js');

function setScrollBar() {
  var bodyIsOverflowing = document.body.clientWidth < window.innerWidth;
  var scrollBarWidth = 0;
  if (bodyIsOverflowing) {
    scrollBarWidth = (0, _dom.getScrollBarWidth)();
    if (bodyIsOverflowing && scrollBarWidth !== 0) {
      document.body.style.paddingRight = scrollBarWidth + 'px';
    }
  }
}
function resetScrollBar() {
  document.body.style.paddingRight = '';
}