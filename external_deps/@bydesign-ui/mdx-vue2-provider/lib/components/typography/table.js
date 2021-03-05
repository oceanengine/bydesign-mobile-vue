/**
 * Component
 */
import createBEM from '../../utils/bem';
var bem = createBEM('table');

var Table = function Table() {
  return {
    render: function render() {
      var h = arguments[0];
      return h("table", {
        "class": bem()
      }, [this.$slots.default]);
    }
  };
};

export default Table;