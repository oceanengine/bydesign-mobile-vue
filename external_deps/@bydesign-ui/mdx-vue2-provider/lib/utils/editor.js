"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyToClipboard = exports.openSandbox = exports.openCodepen = void 0;
// @ts-ignore
var lz_string_1 = __importDefault(require("lz-string"));
function stripScript(content) {
    var result = content.match(/<(script).*?>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}
function stripStyle(content) {
    var result = content.match(/<(style).*?>([\s\S]+)<\/\1>/);
    return result && result[result.length - 1] ? result[result.length - 1].trim() : '';
}
function stripTemplate(content) {
    content = content.trim();
    if (!content) {
        return content;
    }
    var result = content.match(/<(template)\s*?>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}
// 传参时对字符串进行压缩，需要安装 lz-string 依赖
function compress(string) {
    return lz_string_1.default.compressToBase64(string)
        .replace(/\+/g, '-') // Convert '+' to '-'
        .replace(/\//g, '_') // Convert '/' to '_'
        .replace(/=+$/, ''); // Remove ending '='
}
function sendForm(data, type) {
    var form = document.createElement('form');
    form.method = 'POST';
    form.action =
        type === 'codepen' // type为调用公共js的函数时传递的参数，用来区分 codepen和codesandbox
            ? 'https://codepen.io/pen/define/'
            : 'https://codesandbox.io/api/v1/sandboxes/define';
    form.target = '_blank';
    form.style.display = 'none';
    // 创建input，并给name 和 value 设置值
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    if (type === 'codepen') {
        input.setAttribute('name', 'data'); // codepen name值为data
        input.setAttribute('value', JSON.stringify(data));
    }
    else if (type === 'codesandbox') {
        input.setAttribute('name', 'parameters'); // codesandbox name值为parameters
        input.setAttribute('value', compress(JSON.stringify(data))); //compress对提交的json数据进行压缩
    }
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    return;
}
function parseFragment(code) {
    var script = stripScript(code);
    script = script.replace(/export default/, 'var Main =');
    var style = stripStyle(code);
    var template = stripTemplate(code);
    var scriptFrags = [];
    scriptFrags.push(script);
    if (script) {
        scriptFrags.push("const app = Vue.createApp(Main);");
    }
    else {
        scriptFrags.push("const app = Vue.createApp({});");
    }
    scriptFrags.push("app.use(BUI);\napp.mount('#app');");
    var resourcesTpl = [
        "<script src=\"https://unpkg.com/vue@next\"></script>",
        '<script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js"></script>',
        '<script src="https://unpkg.com/dayjs@1.8.21/plugin/weekday.js"></script>',
        '<script src="https://unpkg.com/dayjs@1.8.21/plugin/weekOfYear.js"></script>',
        '<script src="https://unpkg.com/dayjs@1.8.21/plugin/weekYear.js"></script>',
        '<script src="https://unpkg.com/dayjs@1.8.21/plugin/advancedFormat.js"></script>',
        '<script src="https://unpkg.com/dayjs@1.8.21/plugin/customParseFormat.js"></script>',
        '<script>',
        'window.weekday = window.dayjs_plugin_weekday;',
        'window.weekOfYear = window.dayjs_plugin_weekOfYear;',
        'window.weekYear = window.dayjs_plugin_weekYear;',
        'window.advancedFormat = window.dayjs_plugin_advancedFormat;',
        'window.customParseFormat = window.dayjs_plugin_customParseFormat;',
        '</script>',
        "<script src=\"https://unpkg.com/@popperjs/core@2\"></script>",
        "<script>PopperJS = Popper;</script>",
        "<script src=\"https://unpkg.pstatp.com/bydesign-ui/vue/0.1.12/dist/global/index.prod.js\"></script>",
    ].join('\n');
    return {
        style: style,
        script: scriptFrags.join('\n'),
        template: template,
        resourcesTpl: resourcesTpl,
    };
}
function openCodepen(code) {
    var _a = parseFragment(code), script = _a.script, template = _a.template, style = _a.style, resourcesTpl = _a.resourcesTpl;
    var codepenTpl = resourcesTpl + "\n<div id=\"app\">\n" + template.trim() + "\n</div>\n";
    var data = {
        js: script,
        css: style,
        html: codepenTpl,
        css_external: 'https://unpkg.pstatp.com/bydesign-ui/vue/0.1.12/dist/by-design-ui.min.css',
        css_pre_processor: "less",
        js_pre_processor: "typescript"
    };
    console.log('codepen string:', JSON.stringify(data, null, 2));
    sendForm(data, 'codepen');
}
exports.openCodepen = openCodepen;
function openSandbox(code) {
    var _a = parseFragment(code), script = _a.script, template = _a.template, style = _a.style, resourcesTpl = _a.resourcesTpl;
    //导入js文件
    var vueJs = '<script src="./index.js"></script>';
    //html代码段（包括截取到的html代码段和需要引入的资源）
    var codeSandboxhtml = "<!DOCTYPE html>\n    <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n        <meta name=\"theme-color\" content=\"#000000\">\n        <style>\n          @import url(index.css);\n        </style>\n        <link href=\"https://unpkg.pstatp.com/bydesign-ui/vue/0.1.12/dist/by-design-ui.min.css\" rel=\"stylesheet\">\n        " + resourcesTpl + "\n      </head>\n      <body>\n        <div id=\"app\">\n" + template.trim() + "\n</div>\n        " + vueJs + "\n      </body>\n    </html>";
    // 提交的数据格式
    var data = {
        files: {
            'index.css': { content: style },
            'index.js': { content: script },
            'index.html': { content: codeSandboxhtml },
        },
    };
    console.log('codesandbox string:', JSON.stringify(data, null, 2));
    sendForm(data, 'codesandbox');
}
exports.openSandbox = openSandbox;
// https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
function copyToClipboard(text) {
    // @ts-ignore
    if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        // @ts-ignore
        return clipboardData.setData("Text", text);
    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy"); // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}
exports.copyToClipboard = copyToClipboard;
