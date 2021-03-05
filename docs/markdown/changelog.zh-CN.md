# 更新日志

### 详细

:::card

```topic
`v0.1.1`

2021-02-25
```

```desc
功能: 
1. add unit tests
2. update docs
3. fix bugs about components
```

:::

:::card

```topic
`v0.0.37`

2020-12-17
```

```desc
功能: 
1. add ts type support for all components
2. add vue-i18n support
3. add brand customization
新增组件: steps
修复: upload wake up camera without album
```

:::

:::card

```topic
`v0.0.36`

2020-10-26
```

```desc
修复: header event click-left still be emited while left-arrow is false
```

:::

:::card

```topic
`v0.0.35`

2020-09-18
```

```desc
功能：swipe support controlled mode (two-way binding)
修复：field clear button incorrect size when type is textarea
```

:::

:::card

```topic
`v0.0.34`

2020-08-25
```

```desc
修复：Field 输入框使用 getLength 时不重制 length
```

:::

:::card

```topic
`v0.0.33`

2020-08-14
```

```desc
修复：按需引入（TreeShaking）不生效，原因：发布包时 `es` 目录因为 `.gitignore` 被忽略
```

:::

:::card

```topic
`v0.0.32`

2020-08-12
```

```desc
优化组件反馈：
  - Field 输入框
    1. 新增属性`minlength`
    2. 新增属性`getLength`，自定义输入字数计算
    3. 新增作用域插槽`length`，自定义输入字数的显示内容
```

:::

:::card

```topic
`v0.0.31`

2020-07-30
```

```desc
优化组件反馈：
  - PullRefresh 上拉刷新
    1. 新增`size`为`large`大小。
    2. 类型`type`变更，原先类型`primary`和`white`为不同主题的巨量logo刷新 变更为loading加载图标，新增`circle`类型。
    3. 增加`icon`插槽。
  - ActionSheet 上拉菜单
    1. 新增具名插槽 `extra`
    2. 新增属性 `align`，项的内容的对齐方式
    3. 新增属性 `divider`，是否显示分割线
    4. 修复部分样式数值：item-height、padding等
```

:::

:::card

```topic
`v0.0.30`

2020-07-14
```

```desc
新增表单组件：Stepper 步进器

优化组件反馈：Dropdown 下拉菜单 - 增加`title`插槽
```

:::

:::card

```topic
`v0.0.29`

2020-07-01
```

```desc
新增组件

1. Progress 进度条

Bug修复

1. Popup - 弹出层 当`appendToBody`设置为`true`并且`popup`作为组件顶级DOM时，当destroy时报错

抖音主题样式优化`@byted/byted-ui-m-theme`最新版本 `0.0.8`

文档页面做了样式优化

```

:::

:::card

```topic
`v0.0.28`

2020-06-20
```

```desc
组件优化

1. Upload 文件上传 默认icon 由css:background-image修改为内联svg
2. Dialog 自定义对话框 事件`cancel`的触发由`touchstart`修改为`click`

Bug修复

1. Picker 选择器
  表现为：标题文字过长覆盖左右操作按钮文字
  修正后：标题文字过长时显示省略号
2. Calendar 日历
  touch 事件使用 preventDefault 导致 slots 内按钮无法使用 click 事件
```

:::

:::card

```topic
`v0.0.27`

2020-06-11
```

```desc
新增特性

1. MessageBox 对话框 新增内置函数`$dialog`

样式修正

1. Picker 选择器 英文状态下 确认按钮右方安全距离不准确
2. Search 搜索框 圆角调整 2px => 4px
3. Toast 轻提示 英文单词发生折行
```

:::

:::card

```topic
`v0.0.26`

2020-06-4
```

```desc
新增特性

1. Tree 树 支持不完整的绑定值
2. Calendar 日历 支持作用域插槽，范围模式下相同的起止日期

bug修复

1. Header 导航栏 抖音主题标签下划线颜色不正确
2. Switch 开关 抖音主题背景颜色不正确
3. Calendar 日历
  - 未提供`title`时，i18n的标题无法显示的问题
  - 抖音主题取消按钮颜色不正确
```

:::

:::card

```topic
`v0.0.25`

2020-05-29
```

```desc
新增特性

1. Tree 树 支持树状结构的绑定值

bug修复

1. Calendar 日历 布局样式编译错误

2. Tree 树
  - 部分选择的交互默认行为修正为选择所有
  - 布局样式在chrome中的错误
  - 无子节点的选项应直接触发改动事件

3. Tab 标签页 当lineWidth设置成字符时 切换tab 标示条不滑动

国际化支持 语言包增加至16种 详情请查看导航`国际化`
```

:::

:::card

```topic
`v0.0.24`

2020-05-26
```

````desc
新增组件

1. Tree 及联 展示组件

组件优化

1. Search 搜索 增加插槽 `icon` 可自定义搜索图标

2. Picker 选择器 滑动动画优化，动态设置滑动速率，整体动画更流畅

3. Field 输入框 增加插槽 `label` 可自设置标题内容

4. Tabs 标签页 消除了标示条滑动时抖动问题

5. MessageBox & Toast 允许自定义内置函数名称

bug修复

1. Picker 选择器 多列value类型为数组类型时，修改value无法触发滚动动画

2. Calendar 日历 在 Chrome Mobile 中使用属性 min、max 不生效

抖音主题 UI样式优化

:::

:::card
```topic
`v0.0.23`

2020-05-21
````

````desc
组件优化

1. Toast 轻提示 支持自定义vue原型对象属性名

2. Slider 滑块 可定制步长

bug修复

1. Calendar 日历组件 选择时间段时，先选开始时间和先选结束时间date不一致问题
:::

:::card
```topic
`v0.0.22`

2020-05-06
````

````desc
抖音主题 - 可手机扫码演示

新增组件
1. image-preview 图片预览

bug修复
1. Tab标签页 接口touchable: true时，滑动到最后一页后，滑动效果异常

优化组件
1. Upload 文件上传 支持上传前修改action
:::

:::card
```topic
`v0.0.21`

2020-04-21
````

````desc
新增抖音主题 - 可在线演示

新增组件
1. Calendar 日历

优化组件
1. Header 导航栏 新增接口border: boolean (默认类型时，是否显示边框)
:::

:::card
```topic
`v0.0.19`

2020-04-09
````

````desc
1. 按需引入优化, 各个组件引入css文件瘦身近40%
2. 按需引入使用优化, 更方便的接入, 使用说明参考'快速上手'
3. 主题设置使用说明文档上线
4. 组件接口优化和Bug修复请参考详细记录
:::

:::card
```topic
`v0.0.18`

2020-03-11
````

````desc
新增组件
1. Upload 文件上传
2. Slider 滑块

优化组件
1. ActionSheet 上拉菜单 选中态样式文字颜色变蓝 => 选中态样式文字颜色无变化
1. MessageBox 对话框 content内容区文字对齐方式 靠左对齐 => 居中对齐

Bug修复
1. Cascader级联组件加默认值回显后，没有触发input事件导致选中值为空问题修复
:::

:::card
```topic
`v0.0.17`

2020-02-26
````

````desc
新增组件
1. Picker 选择器
2. DatatimePicker 时间选择器

新增功能
1. Cascader 级联组件：a.支持默认值回显；b.支持异步加载子节点
:::

:::card
```topic
`v0.0.16`

2020-02-07
````

````desc
新增功能
1. Tab-标签页：增加接口`info`设置tab项右上角信息(数字或文字)

样式调整
1. Button-按钮 `size`: `midget` 文字行高调整
2. Checker-选择项 选中态文字加粗 `font-weight`：400 => 500
3. Badge-徽标 设置最小宽度16px

Bug修复
1. Field-输入框 `diabled`下 placeholder文字显示颜色加深
2. Checker-选择项 安卓系统的部分手机文字显示偏上或下
:::

:::card
```topic
`v0.0.15`

2020-01-10
````

````desc
Button 按钮
  - 新增size 新增 `midget` 高度 `36px`

onLoding 加载中
  - 样式修正

对话框 Vue.$confirm
  - 样式修正

Field 输入框
  - disabled和readonly 状态下的样式修正
:::

:::card
```topic
`v0.0.14`

2020-01-07
````

````desc
Field 输入框
  - bug - fix iOS 12系统 - 唤起键盘后 页面下沉
:::

:::card
```topic
`v0.0.13`

2019-12-15
````

````desc
新增组件
  - 表单组件 search(搜索框)
  - 反馈组件 loading加载显示

Field 输入框
  - 新增接口 label 标题 unit 单位 error-text 报错信息 size 尺寸
  - 输入框 clearable的关闭icon由常驻更改为聚焦时展示

Cell 单元格
  - size接口新增值 small 增加小尺寸
  - 尺寸高度调整 请查看详情
:::


:::card
```topic
`v0.0.12`

2019-12-15
````

```desc
新增组件
  - 表单组件 input(输入框)
  - 显示组件 badge(徽标)

Button 按钮
  - 新增文字按钮 接口`type`= `text`
  - `type`=`default` 默认按钮的禁用态背景色调整

Header 导航栏
  - 新增接口 `z-index` 固定定位设置 z-index

CheckerItem 选择项
  - 增加接口 `info` 设置右上角徽标
  - 新增接口 `disabled` 设置禁用态

NoticeBar 通知栏
  - 高度改变，59px => 36px
  - 新增接口 `is-link` 展示箭头
  - 新增接口 `type` - 四种样式风格 `primary`、`success`、`warning`、`danger`，默认为`warning`

Switch 开关
  - 阴影值改变
  - 尺寸大小改变 详细记录见详情

Dropdown
  - 新增点击事件 点击cell时触发
  - 交互优化: 下拉菜单弹出时点击内容区及蒙层外区域收起事件由`click`改为`touchstart`
```

:::

:::card

```topic
`v0.0.11`

2019-11-28
```

```desc
Checker 选择项
  - 新增单选异步用法实现
  - 新增事件接口 `input` `click`
  - 修复样式 - 默认样式下多选情况，未选中时显示右下面对勾

Checkbox 复选框
  - 新增 `number` 样式风格
  - 尺寸大小改变

Radio 单选框
  - 新增 `hook` 样式风格
  - 新增单选异步用法实现
  - 新增事件接口`input`、`touchstart`
  - 新增 `labelPosition` 接口，可以设置文字相对图标的位置，默认为右边。
  - 尺寸大小改变
```

:::

:::card

```topic
`v0.0.10`

2019-11-24
```

```desc
button 按钮
  - 尺寸接口 `size` 新增 `tiny`
  - 新增半透明样式, 接口 `fade`
  - 禁用态透明度调整 opacity: 0.4 => opacity: 0.3
  - 按钮左右内边距和宽度调整

Tab 标签页
  - 新增接口 `size` 可选值 `normal`、`large`
  - 新增接口 `gutter` 设置tab标签间距，默认值为24px
  - 标题下划线距离文字距离默认值由 4px -> 6px
  - 修复 异步状态下值未改变却触发change事件问题
  - 修复 v-model 下绑定初始值无效问题

Checker 选择项
  - 修改了多选样式 右下角增加‘对勾’icon
  - 新增了样式接口 `round` 圆角设置
  - 新增了样式类型, 纯色背景 接口 `type`: `primry` 类型
  - 新增加了尺寸设置 两个尺寸当前 normal 和 small
  - 增加了类型验证
    * `inputType`为`checkbox`时 value必须为`Array`
    * `inputType`为`radio`时 value必须为`String`或者`number`
```

:::
