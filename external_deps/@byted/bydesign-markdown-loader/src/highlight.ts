/**
 * 代码高亮处理函数
 */
import hljs from 'highlight.js'

import { PREFIX } from './const'

function wrapLang (str: string, lang: string): string {
  return `<pre class="${PREFIX}-${lang}"><code>${str}</code></pre>`
}

const customLangRegExp = /(topic|desc)?$/

function wrapCustom (str: string, lang: string): string {
  return `<pre class="${PREFIX}-${lang}">${str}</pre>`
}

export default function highlight (str: string, lang: string): string {
  if (lang) {
    if (hljs.getLanguage(lang)) {
      return  wrapLang(hljs.highlight(lang, str, true).value, lang)
    }

    if (customLangRegExp.test(lang)) {
      return wrapCustom(str, lang)
    }

    return str
  }
  return str
}