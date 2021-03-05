/**
 * markdown-it 实例
 */
import MarkdownIt from 'markdown-it'

import highlight from './highlight'

import markdownItAnchor from 'markdown-it-anchor'
import { slugify } from 'transliteration'

import markdownItContainer from 'markdown-it-container'
import Token = require('markdown-it/lib/token')

import { PREFIX } from './const'

const md = new MarkdownIt({
  html: true,
  xhtmlOut: true,
  linkify: true, 
  highlight
}).use(
  markdownItAnchor, 
  {
    slugify
  }
).use(
  markdownItContainer, 'card' , {
    validate: function(params: string) {
      return params.trim().match(/^card\s*(.*)$/)
    },
    render: function wrapper (tokens: Token[], idx: number) {
      if (tokens[idx].nesting === 1) {
        return `<div class="${PREFIX}-card">`
      } else {
        return '</div>'
      }
    }
  }
)

export default md