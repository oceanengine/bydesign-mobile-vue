import 'less'
import Processor from './processor'
import { Options, MapType } from './types'

const RegExpValue = new RegExp(':.*(?=;)')
const RegExpKey = new RegExp('@.*(?=:)')

class LessPluginVarMark {
  private minVersion = [3, 0, 0]
  private options: Options
  private map: MapType
  constructor(options: Options, map?: MapType) {
    this.options = options
    this.map = map ? map : {}
  }
  install (less: LessStatic, pluginManager: Less.PluginManager): void {
    pluginManager.addPreProcessor(new Processor(this.options, this.map))
  }
  setOptions (options: Options): void {
    this.options = options
  }
  printUsage (): void {
    console.log('make less var marks')
  }
  variables2Json (less: string): Options {
    /**
     * less的变量文件转变成json格式
     */
    const json: Options = {}
    const lines = less.split('\n')

    lines.forEach((line) => {
      line = line.trim()
      if (line[0] === '@') {
        const key = line.match(RegExpKey)
        const value = line.match(RegExpValue)
        if (key !== null && value !== null) {
          const k = key[0].substring(1, key[0].length).trim()
          const v = value[0].substring(1, value[0].length).trim()
          json[k] = v
        }
      }
    })

    return json
  }
  getVariablesMap (options: Options, source: Options): MapType {
    const map: MapType = {}

    Object.keys(source).forEach((key: string) => {
      let value = source[key]
      if (typeof value === 'string' && value[0] === '@') {
        value = value.replace('@', '')

        if (options[value] && !options[key]) {
          map[key] = value
        }
      }
    })

    return map
  }
}

export = LessPluginVarMark
