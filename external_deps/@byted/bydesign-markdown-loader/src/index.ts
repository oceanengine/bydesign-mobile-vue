/**
 * loader entry
 */
import md from './markdown'
import transform from './transform'

function loader (content: string): string {
  return `
    const content = ${JSON.stringify(transform(md.render(content)))}
    export default content
  `
}

export default loader
