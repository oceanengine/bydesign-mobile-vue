/**
 * vue 注册组件 by-doc
 */
// @ts-ignore
import App from '@byted/bydesign-docs-svelte'

let app: App | null = null

const install = (Vue: any): void => {
  Vue.component('by-doc', {
    props: {
      config: [Object]
    },
    data() {
      return {
        inited: false
      }
    },
    computed: {
      id (): string {
        // @ts-ignore
        return `by-doc-${this._uid}`
      },
      defaultSlotId (): string {
        // @ts-ignore
        return `by-doc-${this._uid}-slot`
      },
      headerSlotId (): string {
        // @ts-ignore
        return `by-doc-${this._uid}-header`
      },
      rightSlotId (): string {
        // @ts-ignore
        return `by-doc-${this._uid}-right`
      },
      adSlotId (): string {
        // @ts-ignore
        return `by-doc-${this._uid}-ad`
      }
    },
    watch: {
      config (newValue) {
        app && app.$set({
          config: newValue
        })
      }
    },
    mounted () {
      const { id, defaultSlotId, headerSlotId, rightSlotId, adSlotId, config } = this

      // 在根节点上初始化 svelte App 入口文件
      app = new App({
        target: document.getElementById(id),
        props: {
          defaultSlotId,
          headerSlotId,
          rightSlotId,
          adSlotId,
          hasRight: Boolean(this.$slots.right),
          config
        }
      })

      const ids = [defaultSlotId, headerSlotId, rightSlotId, adSlotId]

      ids.forEach((id) => {
        const slotDOM = document.getElementById(id)
        if (slotDOM !== null) {
          slotDOM.appendChild(this.$refs[id])
        }
      })

      this.inited = true
    },
    render () {
      const { id, defaultSlotId, headerSlotId, rightSlotId, adSlotId, inited } = this
      
      return (
        <div id={id} v-show={inited}>
          <div ref={defaultSlotId}>
            {this.$slots.default}
          </div>
          <div ref={headerSlotId}>
            {this.$slots.header}
          </div>
          <div ref={rightSlotId}>
            {this.$slots.right}
          </div>
          <div ref={adSlotId}>
            {this.$slots.ad}
          </div>
        </div>
      )
    },
  })
}

export default { install }
