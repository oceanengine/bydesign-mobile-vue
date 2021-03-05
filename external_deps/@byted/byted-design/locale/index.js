import defaultMessages from './lang/zh-CN';
import Vue from 'vue';
import {template} from 'utils/utils.js';
import deepmerge from 'deepmerge';

let proto;
let merged;

const DEFAULT_LANG = 'zh-CN';


const bytedMessage = {
  [DEFAULT_LANG]: defaultMessages,
};

const TRANSLATION_ABSENT = `Translation is not registered correctly, ` +
                           `you can call Locale.use() to install it.`;

function isUndefined(o) {
  const toString = Object.prototype.toString;
  return toString.call(o) === '[object Undefined]';
}
// https://github.com/TehShrike/deepmerge
const deepMergeOptions = {
  arrayMerge: (destinationArray, sourceArray, options) => destinationArray,
};

const locale = {
  name: 'locale',
  install(Vue) {
    if (locale.installed) return;
    proto = Vue.prototype;
    Vue.util.defineReactive(proto, '$bytedLang', DEFAULT_LANG);
    locale.installed = true;
  },
  use(lang, messages) {
    proto['$bytedLang'] = lang;
    locale.register(lang, messages);
  },
  register(lang, messages) {
    if (!(lang in bytedMessage)) {
      bytedMessage[[lang]] = messages;
      return;
    }
    bytedMessage[[lang]] = deepmerge(bytedMessage[[lang]], messages, deepMergeOptions);
  },
  i18nHandler(...arg) {
    const currentMessage = bytedMessage[proto.$bytedLang];
    const vuei18n = Object.getPrototypeOf(this || Vue).$t;
    if (typeof vuei18n === 'function' && !!Vue.locale) {
      if (!merged) {
        merged = true;
        Vue.locale(
            Vue.config.lang,
            deepmerge(currentMessage, Vue.locale(Vue.config.lang) || {}, {clone: true}, deepMergeOptions)
        );
      }
      return vuei18n.apply(this, arg);
    }
  },
  i18n(fn) {
    locale.i18nHandler = fn || locale.i18nHandler;
  },
  getMessage(lang, path = '', options) {
    const currentMessage = bytedMessage[lang];
    if (isUndefined(currentMessage)) {
      console.error(TRANSLATION_ABSENT);
      return '';
    }
    let value = locale.i18nHandler.call(this, path, options);
    if (value !== null && value !== undefined) return value;

    const array = path.split('.');
    let current = currentMessage;
    for (let i = 0, j = array.length; i < j; i++) {
      const property = array[i];
      value = current[property];
      if (i === j - 1) return template(value, options);
      if (!value) return '';
      current = value;
    }
    return '';
  },
};

module.exports = locale;
