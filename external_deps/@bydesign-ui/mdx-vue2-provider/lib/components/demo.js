/**
 * Component Demo
 */
import createBEM from '../utils/bem';
import HL from './highlight';
import { openCodepen, openSandbox, copyToClipboard } from '../utils/editor';
var bem = createBEM('demo');

var Demo = function Demo() {
  return {
    props: {
      title: [String, Number],
      desc: [String, Number],
      code: String,
      src: String,
      srcRender: Function,
      maxHeight: Number
    },
    data: function data() {
      return {
        unfolded: false
      };
    },
    methods: {
      setUnfolded: function setUnfolded(value) {
        this.unfolded = value;
      }
    },
    render: function render() {
      var h = arguments[0];
      var title = this.title,
          desc = this.desc,
          code = this.code,
          srcRender = this.srcRender,
          unfolded = this.unfolded,
          setUnfolded = this.setUnfolded,
          _this$maxHeight = this.maxHeight,
          maxHeight = _this$maxHeight === void 0 ? 200 : _this$maxHeight;
      var containerStyle = {
        maxHeight: "".concat(maxHeight, "px")
      };
      return h("div", {
        "class": bem()
      }, [h("div", {
        "class": bem('title'),
        "attrs": {
          "id": title.toString()
        }
      }, [title]), srcRender !== undefined && h("div", {
        "class": bem('box')
      }, [h("div", {
        "class": bem('show')
      }, [srcRender()]), desc && h("div", {
        "class": bem('desc')
      }, [desc]), code !== undefined && h("div", {
        "class": bem('code-tool')
      }, [h("div", {
        "class": bem('operations')
      }, [h("span", {
        "class": bem('operation-btn'),
        "on": {
          "click": function click() {
            openCodepen(unescape(code));
          }
        },
        "domProps": {
          "innerHTML": require('!html-loader!../components/icons/codepen.svg')
        }
      }), h("span", {
        "class": bem('operation-btn'),
        "on": {
          "click": function click() {
            openSandbox(unescape(code));
          }
        },
        "domProps": {
          "innerHTML": require('!html-loader!../components/icons/sandbox.svg')
        }
      }), h("span", {
        "class": bem('operation-btn'),
        "on": {
          "click": function click() {
            copyToClipboard(unescape(code));
          }
        },
        "domProps": {
          "innerHTML": require('!html-loader!../components/icons/copy.svg')
        }
      }), h("span", {
        "class": bem('operation-btn'),
        "on": {
          "click": function click() {
            setUnfolded(!unfolded);
          }
        },
        "domProps": {
          "innerHTML": require('!html-loader!../components/icons/code.svg')
        }
      })])]), code !== undefined && unfolded && h("div", {
        "class": bem('code'),
        "style": containerStyle
      }, [h(HL, {
        "attrs": {
          "code": unescape(code)
        }
      })])])]);
    }
  };
};

export default Demo;