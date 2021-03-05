# Button
# 按钮

### Install

``` html
<div>Some Message</div>
```

``` javascript
import '@byted/by-design-m/lib/index.css'
import bui from '@byted/by-design-m'

Vue.use(bui)
```

:::card
```topic
基础用法
```
```desc
单列`value`类型可为 `String` or `Number`
单列`options`数组中的每一项为`Object`, key值为`label`、`value` 
```

```html
<byted-picker
  title="标题"
  :value="value"
  :options="options"
/>
```
