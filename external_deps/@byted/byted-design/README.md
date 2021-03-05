# bytedanceUI

## 基于 vue2.0 进行的开发

## 目录结构

```js
├── README.md
├── build                       // webpack 打包脚本
│   ├── index.js
│   ├── webpack.config.base.js
│   ├── webpack.config.dev.js
│   └── webpack.config.prod.js
├── components                  // 所有组件
├── directives                  // 所有指令
├── docs                        // 文档存放
│   ├── app.vue
│   ├── components
│   ├── index.html
│   ├── main.js
│   ├── markdown                // 文档中嵌入的markdown存放
│   └── pages                   // 文档页面
├── images
│   └── README.md
├── index.js                    // webpack打包的入口文件
├── less
│   ├── bytedanceui.less        // less文件统一入口
│   ├── message.less
│   ├── radio-group.less
│   └── table.less
├── mixins
│   └── emitter.js
├── node_modules
├── package-lock.json
├── package.json
└── utils                       // 通用
    ├── logger.js
    └── utils.js
```

## 运行文档

在项目根目录运行

```shell
npm run dev
```
##线上文档更新
在本地执行 npm run doc
push master
scm完成打包，搜索ad/fe/bytedance_ui
tce完成上线，搜索ad.fe.bui 升级ad/fe/bytedance_ui包即可

