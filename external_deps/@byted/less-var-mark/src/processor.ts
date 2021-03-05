/**
 * Processor
 */
import 'less'
import { Options, MapType } from './types'

interface GatherItem {
  key: string;
  value: string;
  index: number;
}

const RegExpCalc = /\s(\+|\-|\*|\/)\s/
const RegExpValue = new RegExp(':.*(?=;)')

export default class Processor {
  static markBefore = 'ByDesignVarMarkJson'
  private options: Options
  private keys: string[]
  private map: MapType
  private mapKeys: string[]
  constructor (options: Options, map: MapType) {
    this.options = options
    this.map = map
    this.keys = options ? Object.keys(options) : []
    this.mapKeys = options ? Object.keys(map) : []
  }
  check (line: string): boolean {
    /**
     * 检验字符是否需要处理
     */
    line = line.trim()

    if (line[0] === '/') {
      return false
    }

    if (line.indexOf('@') <= 0) {
      return false
    }

    if (!RegExpValue.test(line)) {
      return false
    }

    return true
  }
  isOperator(str: string): boolean {
    /**
     * 运算符号断定
     */
    return str === '+' || str === '-' || str === '*' || str === '/'
  }
  addCalc (line: string): string {
    /**
     * 增加计算属性运算符号calc()
     * 例如 `padding: 0 calc(width - 2px) height * 2 0;`
     * 转成 `padding: 0 calc(width - 2px) calc(height * 2) 0;`
     */
    if (!RegExpCalc.test(line)) {
      return line
    }

    const value = line.match(RegExpValue)
    if (value === null) {
      return line
    }

    const valueStr = value[0].substring(1, value[0].length)

    let next = ''
    let start = -1
    const arr = valueStr.split(' ')

    arr.forEach((item, index) => {
      next = arr[index + 1]
  
      if (
        !this.isOperator(item) && next &&
        this.isOperator(next) && start === -1
      ) {
        start = index
      }
    
      if (
        arr[start] !== undefined &&
        (
          next === undefined ||
          (!this.isOperator(item) && !this.isOperator(next))
        )
      ) {
        if (arr[start][0] === '@') {
          arr[start] = `calc(${arr[start]}`
          arr[index] = `${arr[index]})`
        }

        start = -1
      }
    })

    return line.replace(valueStr, arr.join(' '))
  }
  getRgbValue (key: string): string {
    return this.options[key] ? `@${key}` : `var(--${key})`
  }
  addRgba (line: string): string {
    /**
     * rgba颜色变量转r g b
     * 例如 `rgba(color, 0.1)`
     * 转成 `rgba(color-r, color-g, colot-b, 0.1)`
     */
    if (line.indexOf('rgb') <= 0) {
      return line
    }

    const arr = line.split(' ')
    arr.forEach((item: string, index: number) => {
      if (item.match('rgb')) {
        this.keys.forEach((key: string) => {
          if (item.match(`@${key}`)) {
            arr[index] = item.replace(
              `@${key}`,
              `${this.getRgbValue(`${key}-r`)}, ${this.getRgbValue(`${key}-g`)}, ${this.getRgbValue(`${key}-b`)}`
            )
          }
        })
      }
    })
    return arr.join(' ')
  }
  private gather: GatherItem[] = []
  getRemark (line: string): string {
    /**
     * 备注设置
     */
    line = line.trim()
    const value = line.match(RegExpValue)

    if (value === null) {
      return ''
    }

    this.gather = []

    const arr = value[0].substring(1, value[0].length).trim().split(' ')

    this.keys.forEach((key: string) => {
      arr.forEach((item: string, index: number) => {
        if (item[item.length - 1] === ',') {
          item = item.substring(0, item.length - 1)
        }

        if (
          item.indexOf(key) > -1 && 
          item.indexOf(key) + key.length === item.length
        ) {
          this.gather.push({
            key, value: this.options[key].toString(), index,
          })
        }
      })
    })

    this.mapKeys.forEach((key: string) => {
      arr.forEach((item: string, index: number) => {
        if (item[item.length - 1] === ',') {
          item = item.substring(0, item.length - 1)
        }

        if (
          item.indexOf(key) > -1 && 
          item.indexOf(key) + key.length === item.length
        ) {

          this.gather.push({
            key: this.map[key], 
            value: this.options[this.map[key]].toString(),
            index,
          })
        }
      })
    })

    if (this.gather.length) {
      return JSON.stringify({
        data: this.gather
      })
    }

    return ''
  }

  process (str: string): string {
    // skip if keys is empty
    if (!this.keys.length) {
      return str
    }

    const lines = str.split('\n')
    let remark = ''

    lines.forEach((line: string, index: number) => {
      if (this.check(line)) {
        line = this.addCalc(line)
        line = this.addRgba(line)
        remark = this.getRemark(line)

        if (remark) {
          lines[index] = line.replace(';', `;/* ${Processor.markBefore}: ${remark} */`)
        }
      }
    })

    return lines.join('\n')
  }
}