/**
 * Component
 */
import createBEM from '../../utils/bem';
var bem = createBEM('hr');

var Hr = function Hr() {
  return {
    render: function render() {
      var h = arguments[0];
      return h("hr", {
        "class": bem()
      });
    }
  };
};

export default Hr;