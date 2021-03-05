<template>
  <div class="demo">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>

    <demo-title :title="t('name')" style="padding-left: 16px">
      <byted-icon-module-message theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('basicUsage')" :title-style="titleStyle">
      <byted-notice-bar type="primary" :text="t('title1')" />
      <byted-notice-bar type="success" :text="t('title1')" />
      <byted-notice-bar type="warning" :text="t('title1')" />
      <byted-notice-bar type="danger" :text="t('title1')" />
    </demo-cell>

    <demo-cell :title="t('linkStyle')" :title-style="titleStyle">
      <byted-notice-bar is-link type="primary" :text="t('title1')" />
      <byted-notice-bar is-link type="success" :text="t('title1')" />
      <byted-notice-bar is-link type="warning" :text="t('title1')" />
      <byted-notice-bar is-link type="danger" :text="t('title1')" />
    </demo-cell>

    <demo-cell :title="t('showClose')" :title-style="titleStyle">
      <byted-notice-bar show-close type="primary" :text="t('title1')" />
      <byted-notice-bar show-close type="success" :text="t('title1')" />
      <byted-notice-bar show-close type="warning" :text="t('title1')" />
      <byted-notice-bar show-close type="danger" :text="t('title1')" />
    </demo-cell>

    <demo-cell :title="t('triggerStyle')" :title-style="titleStyle">
      <byted-notice-bar type="primary">
        <span>{{ t('title1') }}</span>
        <a slot="right" class="right-slot" @click="send">
          <img :src="sendSvg" />
          重新发送
        </a>
      </byted-notice-bar>

      <byted-notice-bar type="success" :text="t('title1')">
        <span>{{ t('title1') }}</span>
        <a slot="right" class="right-slot" @click="send">
          <img :src="sendSvg" />
          重新发送
        </a>
      </byted-notice-bar>
      <byted-notice-bar type="warning" :text="t('title1')">
        <span>{{ t('title1') }}</span>
        <a slot="right" class="right-slot" @click="send">
          <img :src="sendSvg" />
          重新发送
        </a>
      </byted-notice-bar>
      <byted-notice-bar type="danger" :text="t('title1')">
        <span>{{ t('title1') }}</span>
        <a slot="right" class="right-slot" @click="send">
          <img :src="sendSvg" />
          重新发送
        </a>
      </byted-notice-bar>
    </demo-cell>

    <demo-cell :title="t('ellipsis')" :title-style="titleStyle">
      <byted-notice-bar :text="t('title2')" show-close :ellipsis="1" />
      <byted-notice-bar :text="t('title2') + t('title2')" :ellipsis="2" />
    </demo-cell>
  </div>
</template>
<script>
import { BytedIconModuleMessage } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
import sendSvg from '../../../../docs/site/components/svg/send.svg';
export default {
  i18n: {
    'zh-CN': {
      name: '通知栏',
      title1: '字节跳动ByDesign',
      title2: '字节跳动ByDesign字节跳动ByDesign字节跳动ByDesign字节跳动ByDesign',
      basicUsage: '基础用法',
      showClose: '关闭用法',
      ellipsis: '溢出省略',
      typeStyle: '风格样式',
      linkStyle: '链接跳转',
      triggerStyle: '触发功能',
    },
    'en-US': {
      name: 'noticeBar',
      title1: '字节跳动ByDesign',
      title2: '字节跳动ByDesign字节跳动字节跳动ByDesign字节跳动ByDesign',
      basicUsage: 'Basic Usage',
      showClose: 'showClose',
      ellipsis: 'ellipsis',
      typeStyle: 'type style',
      linkStyle: 'link',
      triggerStyle: 'trigger',
    },
  },
  components: {
    demoCell,
    demoTitle,
    BytedIconModuleMessage,
  },
  data() {
    return {
      sendSvg,
      titleStyle: {
        'padding-left': '16px',
      },
    };
  },
  methods: {
    send() {
      this.$toast({
        message: 'success',
        type: 'success',
      });
    },
  },
};
</script>
<style lang="less" scoped>
.demo {
  padding: 0 0 24px 0;
  h4 {
    padding: 0 10px;
  }
  .byted-notice-bar {
    margin-top: 4px;
  }
  .right-slot {
    display: inline-flex;
    align-items: center;
    img {
      margin-right: 8px;
    }
  }
}
</style>
