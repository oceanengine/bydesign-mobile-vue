import { Config } from '../lib/index'
// @ts-ignore
import langIcon from './i18n.svg'

const config: Config =  {
  logo: 'https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/byted-logo.svg',
  navs: [{
    label: '更新日志',
    path: '/log',
    activeIcon: langIcon,
    defaultIcon: langIcon,
  }, {
    label: '组件',
    list: [{
      label: '基础组件',
      list: [{
        label: '布局',
        path: '/layout'
      }, 
      {
        label: '按钮1',
        path: '/some'
      }
    ]
    }]
  },
  {
    label: '组件1',
    activeIcon: 'https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/byted-logo.svg',
    defaultIcon: langIcon,
    list: [
      {
        label: '基础组件',
        list: [
          {
            label: 'Button 按钮',
            path: '/button',
            anchors: [
              { id: '按钮', label: '按钮' },
              { id: '安装', label: '安装' },
              { id: '代码演示', label: '代码演示' },
              { id: '类型', label: '类型' },
              { id: '描边', label: '描边' },
              { id: '半透明', label: '半透明' },
              { id: '细边框', label: '细边框' },
              { id: '禁用态', label: '禁用态' },
              { id: '形状', label: '形状' },
              { id: '尺寸', label: '尺寸' },
              { id: '文字按钮', label: '文字按钮' },
              { id: 'API', label: 'API' },
              { id: 'Props', label: 'Props' },
              { id: 'Events', label: 'Events' },
            ],
          },
          {
            label: 'Popup 弹出层',
            path: '/popup',
            anchors: [
              { id: '弹出层', label: '弹出层' },
              { id: '安装', label: '安装' },
              { id: '代码演示', label: '代码演示' },
              { id: '基础用法', label: '基础用法' },
              { id: '插入body节点', label: '插入body节点' },
              { id: '弹出位置', label: '弹出位置' },
              { id: '指定挂载位置', label: '指定挂载位置' },
              { id: 'API', label: 'API' },
              { id: 'Props', label: 'Props' },
              { id: 'Events', label: 'Events' },
            ],
          }]
        }
    ]
        
  }]
  // navs: [
  //   {
  //     label: '更新日志',
  //     path: '/zh-CN/log',
  //     activeIcon: 'http://p1-bui.byteimg.com/tos-cn-i-43qsastzqa/76d2e07876f647b6965e734fd30fa65c.png~tplv-43qsastzqa-image.image',
  //     defaultIcon: 'http://p1-bui.byteimg.com/tos-cn-i-43qsastzqa/e04bb3bd5ae43522408a53ae8d097e34.png~tplv-43qsastzqa-image.image'
  //   },
  //   {
  //     label: '组件',
  //     activeIcon: 'http://p1-bui.byteimg.com/tos-cn-i-43qsastzqa/7058c2caf4739fe50300488bb2e39151.png~tplv-43qsastzqa-image.image',
  //     defaultIcon: 'http://p1-bui.byteimg.com/tos-cn-i-43qsastzqa/194c0cfc4037f64241d10fbb8b9a560e.png~tplv-43qsastzqa-image.image',
  //     list: [
  //       {
  //         label: '基础组件',
  //         list: [
  //           {
  //             label: 'Layout 布局',
  //             path: '/zh-CN/layout',
  //           },
  //           {
  //             label: 'Button 按钮',
  //             path: '/zh-CN/button',
  //           },
  //           {
  //             label: 'Input 输入框',
  //             path: '/zh-CN/input',
  //           },
  //           {
  //             label: 'Select 选择框',
  //             path: '/zh-CN/select',
  //           },
  //           {
  //             label: 'DatePicker 日期选择器',
  //             path: '/zh-CN/date-picker',
  //           },
  //           {
  //             label: 'Cascader 级联选择器',
  //             path: '/zh-CN/cascader',
  //           },
  //           {
  //             label: 'Switch 开关',
  //             path: '/zh-CN/switch',
  //           },
  //           {
  //             label: 'Tag 标签',
  //             path: '/zh-CN/tag',
  //           },
  //           {
  //             label: 'Menu 菜单',
  //             path: '/zh-CN/menu',
  //           },
  //           {
  //             label: 'Tabs 选项卡',
  //             path: '/zh-CN/tabs',
  //           },
  //           {
  //             label: 'Radio 单选',
  //             path: '/zh-CN/radio',
  //           },
  //           {
  //             label: 'Checkbox 多选',
  //             path: '/zh-CN/checkbox',
  //           },
  //           {
  //             label: 'Message 信息提示',
  //             path: '/zh-CN/message',
  //           },
  //           {
  //             label: 'Pagination 分页',
  //             path: '/zh-CN/pagination',
  //           },
  //           {
  //             label: 'Popover 气泡',
  //             path: '/zh-CN/popover',
  //           },
  //           {
  //             label: 'Modal 模态框',
  //             path: '/zh-CN/modal',
  //           },
  //           {
  //             label: 'Alert 警告提示',
  //             path: '/zh-CN/alert',
  //           }
  //         ],
  //       },
  //     ],
  //   },
  // ],
  // onLinkTo(item: any) {
  //   if (item.path) {
  //     history.pushState({}, '', `#${item.path}`);
  //   }
  //   return item.path
  // },
}

export default config
