function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Highlight
 */
import createBEM from '../utils/bem';
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
var bem = createBEM('hl');
var HL = {
  props: {
    code: String,
    showLineNumber: {
      type: Boolean,
      default: true
    }
  },
  components: {
    PrismEditor: PrismEditor
  },
  methods: {
    highlighter: function highlighter(code) {
      return highlight(code, _objectSpread(_objectSpread(_objectSpread({}, languages['markup']), languages['js']), languages['css']), 'markup'); // languages.<insert language> to return html with markup
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("prism-editor", {
      "class": bem(),
      "attrs": {
        "highlight": this.highlighter,
        "line-numbers": this.showLineNumber,
        "readonly": true
      },
      "model": {
        value: _this.code,
        callback: function callback($$v) {
          _this.code = $$v;
        }
      }
    });
  }
};
export default HL;