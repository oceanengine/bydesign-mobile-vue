import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";

/**
 * index
 */
import P from './p';
import Ul from './ul';
import Li from './li';
import Hr from './hr';
import Table from './table';
import AnchorTitle from './anchorTitle';
import Code from './code';

function geneHn(n) {
  return function () {
    return {
      render: function render() {
        var h = arguments[0];
        return h(AnchorTitle, _mergeJSXProps([{
          "attrs": {
            "level": n
          }
        }, this.$attrs]), [this.$slots.default]);
      }
    };
  };
}

export default {
  h1: geneHn(1),
  h2: geneHn(2),
  h3: geneHn(3),
  h4: geneHn(4),
  h5: geneHn(5),
  h6: geneHn(6),
  p: P,
  ul: Ul,
  li: Li,
  hr: Hr,
  table: Table,
  code: Code
};