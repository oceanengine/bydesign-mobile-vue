<template>
  <by-doc :config="config">
    <header-menu slot="header" @menu-click="handleMenuClick" />
    <div slot="right" class="docs-show-phone-box">
      <div class="docs-show-phone">
        <iframe
          id="doc-phone"
          frameborder="0"
          :src="phoneSrc"
          :width="phoneWidth"
          :height="phoneHeight"
        />
      </div>
    </div>
    <div
      :class="[
        'global-params',
        {
          motion: visitThemeConfig,
        },
      ]"
    >
      <edit-theme
        :is-show="visitThemeConfig"
        @preview="handlePreview"
        @export="handleExport"
        @close="handleClose"
      />
      <div class="global-params-item" @click="showThemeConfig">
        <img :src="colorSvg" alt="" />
      </div>
      <div class="global-params-item">
        <byted-popover
          placement="left"
          trigger="hover"
          popper-class="docs-show-code_popover"
          width="144px"
          :show-delay="200"
          :arrow="false"
          transfer
        >
          <template slot="body">
            <img
              :src="`https://s0.pstatp.com/cdn/expire-1-h/byted-ui-m/static/${imageName}.png`"
              alt="扫码预览"
              style="width: 100%"
            />
          </template>
          <div slot="reference" style="margin: 0 -16px; width: 52px; text-align: center">
            <byted-icon-two-dimensional-code-one theme="outline" size="24" fill="#333" />
          </div>
        </byted-popover>
      </div>
    </div>
    <router-view />
  </by-doc>
</template>

<script>
import config from '../config';
import _ from 'lodash';
import colorSvg from '../components/svg/color.svg';

import editTheme from '../components/theme/Index';

import { createPalette, pickPalette } from '../utils/palette';
import { setCSSVariableObject, downloadObjectAsJson, setCSSVariable } from '../utils/css';

import { BytedIconTwoDimensionalCodeOne } from '@byte-design/vue-icons';

import HeaderMenu from './HeaderMenu';

import './index.less';

export default {
  components: {
    editTheme,
    BytedIconTwoDimensionalCodeOne,
    HeaderMenu,
  },
  data() {
    return {
      phoneWidth: 375,
      phoneHeight: '100%',
      colorSvg,
      visitThemeConfig: false,
      aweme: false,
      imageName: 'online',
      langObj: {
        'zh-CN': {
          lang: 'English',
          theme: '主题',
          aweme: '抖音',
          scan: '扫码预览',
        },
        'en-US': {
          lang: '中文',
          theme: 'Theme',
          aweme: 'Aweme',
          scan: 'Scan QR Code',
        },
      },
    };
  },
  computed: {
    config() {
      /**
       * 文档页面配置
       */
      const nav = config[this.$bytedLang]['navs'];
      this.dealWithPath(nav);
      return config[this.$bytedLang];
    },
    phoneSrc() {
      /**
       * 文档页面配置
       */
      const l = window.location;
      return `${l.protocol}//${l.host}${l.pathname}online.html${l.hash}`;
    },
    lang() {
      return this.langObj[this.$bytedLang];
    },
  },
  mounted() {
    /**
     * 监听hash变化
     */
    this.$nextTick(() => {
      let phoneIframe = document.getElementById('doc-phone');
      window.addEventListener('hashchange', function (event) {
        phoneIframe.contentWindow.postMessage({ hash: window.location.hash }, '*');
      });
    });
  },
  methods: {
    dealWithPath(nav) {
      /**
       * 路径处理函数
       */
      nav.forEach(item => {
        if (item.path && item.path.indexOf(this.$bytedLang) === -1) {
          item.path = `/${this.$bytedLang}${item.path}`;
        }
        if (item.list) {
          this.dealWithPath(item.list);
        }
      });
    },
    changeLang(value) {
      /**
       * 切换中英文
       */
      const bytedLang = this.$bytedLang;
      switch (value) {
        case 'en':
          this.$bytedLang = 'en-US';
          document.documentElement.lang = 'en';
          break;
        case 'zh':
          this.$bytedLang = 'zh-CN';
          document.documentElement.lang = 'zh';
      }

      document
        .getElementById('doc-phone')
        .contentWindow.postMessage({ bytedLang: this.$bytedLang }, '*');

      const path = window.location.hash.replace(bytedLang, this.$bytedLang);
      window.location.href = `${window.location.protocol}//${window.location.host}${window.location.pathname}${path}`;
    },
    changeTheme(value) {
      /**
       * 切换主题
       */
      this.aweme = !this.aweme;

      document.getElementById('doc-phone').contentWindow.postMessage(
        {
          theme: value === 'default' ? '' : value,
        },
        '*',
      );

      this.imageName = value === 'default' ? 'online' : 'online-aweme';
    },
    handlePreview(val) {
      // 取出 backgroundColor
      const backgroundColor = val.backgroundColor;
      delete val.backgroundColor;

      // 取出颜色外的属性
      const attrsWithoutColor = Object.keys(val)
        .filter(item => !/color/i.test(item))
        .reduce((pre, attr) => {
          pre[attr] = val[attr];
          delete val[attr];
          return pre;
        }, {});

      const pickedPalette = pickPalette(val, createPalette(val, backgroundColor));
      const element = document.getElementById('preview-doc-phone').contentWindow.document
        .documentElement;
      setCSSVariableObject(element, pickedPalette);

      Object.keys(attrsWithoutColor).forEach(attrKey => {
        setCSSVariable(element, attrKey, attrsWithoutColor[attrKey]);
      });
    },
    handleExport(val) {
      const backgroundColor = val.backgroundColor;
      delete val.backgroundColor;

      // 取出颜色外的属性
      const attrsWithoutColor = Object.keys(val)
        .filter(item => !/color/i.test(item))
        .reduce((pre, attr) => {
          pre[attr] = val[attr];
          delete val[attr];
          return pre;
        }, {});

      const pickedPalette = pickPalette(val, createPalette(val, backgroundColor));
      const element = document.getElementById('preview-doc-phone').contentWindow.document
        .documentElement;

      const varJson = {};
      setCSSVariableObject(element, pickedPalette, (element, property, value) => {
        const cssVariableKey = _.kebabCase(property);
        varJson[cssVariableKey] = value;
      });

      Object.keys(attrsWithoutColor).forEach(attrKey => {
        varJson[_.kebabCase(attrKey)] = attrsWithoutColor[attrKey];
      });

      downloadObjectAsJson(varJson, 'var');
    },
    showThemeConfig() {
      this.visitThemeConfig = !this.visitThemeConfig;
    },
    handleClose() {
      this.visitThemeConfig = false;
    },
    handleMenuClick(menuValue, value) {
      switch (menuValue) {
        case 'lang':
          this.changeLang(value);
          return;
        case 'theme':
          this.changeTheme(value);
          return;
        case 'component':
          window.location.href = `/mobile/${value}`;
          return;
        case 'version':
          if (value === 'default') {
            window.location.href = '/mobile/vue/';
          } else {
            window.location.href = `/mobile/vue/version/${value}`;
          }
          return;
      }
    },
  },
};
</script>
