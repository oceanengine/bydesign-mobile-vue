require('../lib/index.css')

const content = require('./README.md').default

const root = document.getElementById('root')

if (root !== null) {
  root.innerHTML = content
}
