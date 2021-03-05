/**
 * Component
 */
import createBEM from "../../utils/bem";
var bem = createBEM("h");
var AnchorTitle = {
  props: {
    level: Number
  },
  render: function render() {
    var h = arguments[0];
    var level = this.level;
    var children = this.$slots.default;
    var id = children && children[0] && children[0].text || null;

    switch (level) {
      case 2:
        return h("h2", {
          "class": bem(),
          "attrs": {
            "id": id
          }
        }, [children]);

      case 3:
        return h("h3", {
          "class": bem(),
          "attrs": {
            "id": id
          }
        }, [children]);

      case 4:
        return h("h4", {
          "class": bem(),
          "attrs": {
            "id": id
          }
        }, [children]);

      case 5:
        return h("h5", {
          "class": bem(),
          "attrs": {
            "id": id
          }
        }, [children]);

      case 6:
        return h("h6", {
          "class": bem(),
          "attrs": {
            "id": id
          }
        }, [children]);

      default:
        return h("h1", {
          "class": bem(),
          "attrs": {
            "id": id
          }
        }, [children]);
    }
  }
};
export default AnchorTitle;