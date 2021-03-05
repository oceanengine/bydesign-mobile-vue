import postcss, { Root, PluginInitializer, ChildNode } from 'postcss'

import { Options } from './types'
import getConfig from './getConfig'
import getValue from './getValue'

const initializer: PluginInitializer<Options> = function(options) {
  const config: { [key: string]: string } = {}
  const hasConfig = options !== undefined

  if (hasConfig) {
    for (const key in options) {
      config[options[key]] = key
    }
  }

  return function (css: Root): void {
    options = options || {}
  
    css.walk(function (node: ChildNode, index: number) {
      if (node.type === 'comment') {
        const config = getConfig(node.text)

        if (config !== null) {
          const parent = node.parent
          const brothers = parent.nodes
          if (brothers) {
            const target = brothers[index - 1]

            if (target.type === 'decl') {
              target.value = getValue(config, target.value)
            }

            parent.removeChild(node)
          }
        }
      }
    })
  }
}

export = postcss.plugin('postcss-var', initializer)
