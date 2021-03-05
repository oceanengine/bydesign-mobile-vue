/**
 * Component
 */
import createBEM from '../../utils/bem';
var bem = createBEM('p');

var P = function P() {
  return {
    render: function render() {
      var h = arguments[0];
      return h("p", {
        "class": bem()
      }, [this.$slots.default]);
    }
  };
};

export default P;