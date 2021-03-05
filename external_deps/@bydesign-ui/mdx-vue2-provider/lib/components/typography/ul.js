/**
 * Component
 */
import createBEM from '../../utils/bem';
var bem = createBEM('ul');

var Ul = function Ul() {
  return {
    render: function render() {
      var h = arguments[0];
      return h("ul", {
        "class": bem()
      }, [this.$slots.default]);
    }
  };
};

export default Ul;