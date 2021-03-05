import HL from '../highlight';
import createBEM from '../../utils/bem';
import { copyToClipboard } from '../../utils/editor';
var bem = createBEM('code');

var Code = function Code() {
  return {
    props: {
      className: {
        type: String,
        default: ''
      }
    },
    render: function render() {
      var h = arguments[0];
      var text = '';

      if (this.$slots.default) {
        text = this.$slots.default[0].text;
      }

      text = text.trim();
      return h("code", {
        "class": this.className + ' ' + bem()
      }, [h("span", {
        "class": bem('copy-btn'),
        "domProps": {
          "innerHTML": require('!html-loader!../../components/icons/copy.svg')
        },
        "on": {
          "click": function click() {
            copyToClipboard(text);
          }
        }
      }), h(HL, {
        "attrs": {
          "code": text,
          "showLineNumber": false
        }
      })]);
    }
  };
};

export default Code;