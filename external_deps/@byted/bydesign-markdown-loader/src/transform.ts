/**
 * 处理特殊文件中特殊标记
 */
import { PREFIX } from './const'

// mark
const markReg = new RegExp(/`/g)

export default function transform (content: string): string {
  let num = 0
  let domStr = ''

  while (markReg.test(content)) {
    domStr = (num % 2 === 0) ? `<code class="${PREFIX}-mark">` : '</code>'

    num++

    content = content.replace('`', domStr)
  }
  return content
}

