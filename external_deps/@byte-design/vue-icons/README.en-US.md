# ByteDesign Icons
> Vue Icons for ByteDesign

## Introduction

### Features
* Provide more than 1300 icons
* Provide 4 themes:
    * outline
    * filled
    * two-tone
    * multi-color


### More
Please visit [ByteDesign Icon Website](http://design.bytedance.net/icon), to discover more features：
* Copy SVG
* Copy React Icon component
* Copy Vue Icon component
* Download PNG
* Download SVG

## Getting Started
### Install

```
npm install @byte-design/vue-icons --save
```

### Include Component
Import an icon from `@byte-design/vue-icons`at the top of a component and then use it in the render function:

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


If you don't want to refer to it, you can install icons globally.

```typescript
import {install} from '@byte-design/vue-icons';

// install icons
install();
```

### Style Sheet
Import the icon style:
```typescript
import '@byte-design/vue-icons/runtime/index.css';
```

### Global Config
You can use the static methods `setConfig` in `@byte-design/vue-icons/runtime` to set the default config globally:

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

### Import on Demand
If you need a few icon, you can import it on demand, like this:

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

You can also manually encapsulate the above functions to simplify code writing.

### Import all icons
Here are two differences:
1. path：`'@byte-design/vue-icons/all'`
2. type

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


## Props
|    prop	 | description  | type  | default | note |
| ---------- | --- | --- | --- | --- |
| theme |  Theme of the ByteDesign icons.  | 'outline' &#124; 'filled' &#124; 'two-tone' &#124; 'multi-color' | 'outline'  |
| size |  The width/height of the icon | number &#124; string |  '1em' |
| spin |  Rotate icon with animation | boolean | false |
| fill |  Colors of theme | string  &#124; string[] |  'currentColor' |
| strokeLinecap |  the stroke-linecap prop of svg element | 'butt' &#124; 'round' &#124; 'square' |  'round' |
| strokeLinejoin |  the stroke-linejoin prop of svg element | 'miter' &#124; 'round' &#124; 'bevel' |  'round' |
| strokeWidth |  the stroke-width prop of svg element | number |  4 |

