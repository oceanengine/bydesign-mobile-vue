# Color Palette
提供一组内置主题颜色变量，包含五个彩色和一个暗色，每个颜色扩展出一组渐变色；
提供calculator进行色彩计算；
包含js和less版本
## 安装
`npm install --save @byte-design/color-palette`
## 使用
### 方式一：

修改webpack.config.js文件中的less-loader的options`javascriptEnabled: true`
```
  {
    loader: 'less-loader',
    options: {
      javascriptEnabled: true, 
      strictMath: true,
      noIeCompat: true,
    },
  }
```
然后就可以在less文件中使用内置颜色变量@{color}-{scale}和生成函数`colorPalette`了
style.less
```
  @import '~@byte-design/color-palette/lib/colors.less';

  .bar{
    color: @blue-1; // @{color}-{scale} color取值blue、green、red、yellow、cyan、gray scale取值1-11
  } 

  .menu{ background-color: color(~`colorPalette('#989090', 1) `); 
  }
```

### 方式二：
```
import { generate, presetPalettes } from '@byte-design/color-palette';
// Generate color palettes by a given color
const colors = generate('#6ABF40');

console.log(colors); // [ '#223d14','#30571d','#3f7126','#4d8b2f','#5ca537','#6abf40',
'#6ABF40','#a1d786','#bce2a9','#d8eecd','#f3faf0' ]

conosle.log(presetPalettes);
/*
{
  blue: [...],
  green: [...],
  red: [...],
  yellow: [...],
  cyan: [...],
  gray: [...]
}
*/

conosle.log(presetPalettes.blue); // ['#002352','#00377e','#004aab','#005ed8','#0672ff','#338AFF','#58a0ff','#7cb5ff','#a1caff','#c6dfff','#ebf3ff']
```
## 色彩
目前包含蓝色、绿色、红色、黄色、青色五种色彩，每种颜色的6号色为主色，根据主色生成共11个由深至浅的色号，其中1号色最深，11号最浅，生成规律符合js中`generate`函数/less中`colorPalette`函数。

暗色主题有11个灰度色号，其中1号色最深，11号最浅，生成规律为内置固定。

## 开发
```
npm run dev
// open http://localhost:8030/dev/index.html
```
