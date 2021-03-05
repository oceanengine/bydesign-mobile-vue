# ByteDesign 图标
> ByteDesign图标体系

## 介绍

### 新特性
* 提供超过1300图标
* 支持4种主题:
    * 线性
    * 填充
    * 双色
    * 四色

### 更多图标
请访问[ByteDesign图标网站](http://design.bytedance.net/icon), 去探索更多便捷的操作，比如：
* 复制SVG源文件
* 复制React图标组件
* 复制Vue图标组件
* 下载PNG
* 下载SVG

## 快速上手
### 安装

```
npm install @byte-design/vue-icons --save
```

### 引用图标
在组件的上方引用`@byte-design/vue-icons`，并在组件的模板函数中使用:

``` vue
<template>
<byted-icon-home theme="fill"/>
</template>
<script>
import {BytedIconHome} from '@byte-design/vue-icons';

export default {
    components: {
        BytedIconHome
    }
}
</script>
```

如果你不想引用，那么你可以全局安装图标
```typescript
import {install} from '@byte-design/vue-icons';

// 安装图标
install();
```

### Style Sheet
引用预设样式
```typescript
import '@byte-design/vue-icons/runtime/index.css';
```

### 全局
你可以使用 `@byte-design/vue-icons/runtime` 中的 `setConfig`方法来设置全局配置。

```typescript
import {setConfig} from '@byte-design/vue-icons/runtime'

setConfig({
    prefix: 'byte',
    theme: 'outline',
    size: '1em',
    strokeWidth: 4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    outStrokeColor: '#000',
    outFillColor: '#2F88FF',
    innerStrokeColor: '#FFF',
    innerFillColor: '#43CCF8'
})
```

### 按需加载
如果只想用部分图标，可以按需加载，具体如下：

``` vue
<template>
<byted-icon-home theme="fill"/>
</template>
<script>
import BytedIconHome from '@byte-design/vue-icons/icons/Home';

export default {
    components: {
        BytedIconHome
    }
}
</script>
```
你也可以手工封装以上函数，以简化代码书写。

### 全量引入icon
1. 注意路径有变，是：`'@byte-design/vue-icons/all'`
2. type：标识不同图标，传递icon小写英文名称

``` vue
<template>
<byted-icon type="home" theme="fill"/>
</template>
<script>
import {BytedIcon} from '@byte-design/vue-icons/all';

export default {
    components: {
        BytedIcon
    }
}
</script>
```

## 属性
|    属性名称	 | 介绍  | 类型  | 默认值 | 注释 |
| ---------- | --- | --- | --- | --- |
| theme |  图标主题 | 'outline' &#124; 'filled' &#124; 'two-tone' &#124; 'multi-color' | 'outline'  |
| size | 图标的大小，宽高相同 | number &#124; string |  '1em' |
| spin |  给图标加旋转效果 | boolean | false |
| fill |  图标的颜色，不超过4个颜色，默认为当前颜色 | string &#124; string[]|  'currentColor' |
| strokeLinecap |  svg元素的stroke-linecap属性 | 'butt' &#124; 'round' &#124; 'square' |  'round' |
| strokeLinejoin |  svg元素的stroke-linejoin属性 | 'miter' &#124; 'round' &#124; 'bevel' |  'round' |
| strokeWidth |  svg元素的stroke-width属性 | number |  4 |
