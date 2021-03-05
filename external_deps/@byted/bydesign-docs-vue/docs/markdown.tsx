/**
 * Markdwn Component Object
 */
const md = require('./README.md').default

export default {
  render (createElement) {
    return createElement('div', {
      class: 'by-docs-markdown',
      domProps:{ 
        innerHTML: md
      }
    })
  }
}
