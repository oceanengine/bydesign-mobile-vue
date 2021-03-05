import createBEM from '../utils/bem';
import HL from './highlight';
import { copyToClipboard } from '../utils/editor';
var bem = createBEM('card');

function transformDesc(desc) {
  return desc.replace(/`([^`]+?)`/g, "<span class=\"".concat(bem('keyword'), "\">$1</span>"));
}

var Card = function Card() {
  return {
    props: {
      title: {
        type: String,
        default: ''
      },
      desc: {
        type: String,
        default: ''
      },
      code: {
        type: String,
        default: ''
      }
    },
    render: function render() {
      var h = arguments[0];
      var title = this.title,
          desc = this.desc,
          code = this.code;
      title = unescape(title);
      desc = transformDesc(unescape(desc));
      code = unescape(code);
      return h("div", {
        "class": bem()
      }, [title && h("div", {
        "class": bem('title'),
        "attrs": {
          "id": title.toString()
        }
      }, [title]), h("div", {
        "class": bem('box')
      }, [desc && h("div", {
        "class": bem('desc'),
        "domProps": {
          "innerHTML": desc
        }
      }), h("div", {
        "class": bem('code')
      }, [h("span", {
        "class": bem('copy-btn'),
        "domProps": {
          "innerHTML": require('!html-loader!../components/icons/copy.svg')
        },
        "on": {
          "click": function click() {
            copyToClipboard(code);
          }
        }
      }), h(HL, {
        "attrs": {
          "code": code,
          "showLineNumber": false
        }
      })])])]);
    }
  };
};

export default Card;