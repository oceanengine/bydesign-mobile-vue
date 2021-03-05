#### 本地运行 node 8+

```
npm i
npm run dev
```

这样项目就在
http://0.0.0.0:8080/下运行了
文档路径对应目录路径
例如: components/button/demo 访问 http://0.0.0.0:8080/button

#### 目录说明

> src: 项目文件

- components/ -----组件目录
- locale/ -----国际化语言设置
- mixins/ -----公有 mixins
- style/ -----less 全局变量入口
- util/ -----工具库
- index.less -----入口 css 文件, 自动生成(由 build/build-entry.js)
- index.ts -----入口 js 文件, 自动生成(由 build/build-entry.js)

> components: 组件名同目录名成

- demo/ -----使用展示说明
- index.less -----组件 less
- index.(tsx|js) --组件入口
- README.md -----组件说明文档

  注意:demo 和 README.md 尽量补充其一说明组件使用规范

> style: 公有 less 目录

- mixin/ 为全局 less 函数
- rem reset 已完成
- var animation transition 等待开发中补充
- root 不用处理

#### 代码规范说明

- eslint 校验 src/ext .js,.ts,.tsx,.vue
- stylelint 校验 src/\*_/_.less

检验规则配置 分别在 .eslintrc.js 和 .stylelintrc
规则可以改变-开发者商议决定

#### px 转 rem

说明: 开发使用 px,编译会自动转 rem 比例配置 postcss.config.js 中 remUnit
不需要转换的增加备注 /_ no _/

#### 提交代码

使用 npm run ct 提交代码，以统一 commit message 格式
