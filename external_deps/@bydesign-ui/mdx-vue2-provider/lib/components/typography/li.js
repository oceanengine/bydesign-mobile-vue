/**
 * Component
 */
import createBEM from '../../utils/bem';
var bem = createBEM('li');

var Li = function Li() {
  return {
    render: function render() {
      var h = arguments[0];
      return h("li", {
        "class": bem()
      }, [this.$slots.default]);
    }
  };
};

export default Li;