<template>
  <div class="demo-box">
    <div class="demo image-preview">
      <byted-header fixed @click-left="$router.back()">
        <span class="demo-header-icon">
          <img
            class="img-icon"
            src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
        /></span>
      </byted-header>

      <demo-title :title="t('name')" />

      <demo-cell :title="t('basic')">
        <div class="bui-doc-demo-block__card">
          <byted-cell :title="t('basic')" is-link @click="showPreviewImage" />
        </div>
      </demo-cell>

      <demo-cell :title="t('numberIndicator')">
        <div class="bui-doc-demo-block__card">
          <byted-cell :title="t('numberIndicator')" is-link @click="showPreviewImageNum" />
        </div>
      </demo-cell>

      <demo-cell :title="t('moreOptions')">
        <div class="bui-doc-demo-block__card">
          <byted-cell :title="t('closeLoop')" is-link @click="showPreviewImage({ loop: false })" />
          <byted-cell
            :title="t('showClose')"
            is-link
            @click="showPreviewImage({ showCloseButton: true })"
          />
          <byted-cell
            :title="t('hiddleIndicator')"
            is-link
            @click="showPreviewImage({ showIndicators: false })"
          />
        </div>
      </demo-cell>

      <demo-cell :title="t('componentCall')">
        <div class="bui-doc-demo-block__card">
          <byted-cell :title="t('componentCall')" is-link @click="show = !show" />
        </div>
        <byted-image-preview v-model="show" :images="images" :change="change" @change="change" />
      </demo-cell>
    </div>
  </div>
</template>
<script>
import ImagePreview from '..';

const images = [
  'https://s3.pstatp.com/ies/bytedance_official/_next/static/images/zh-1-de7f5f4876bc1fda19028283676573b1.jpg',
  'https://s3.pstatp.com/ies/bytedance_official/_next/static/images/zh-2-912fee913a62b12222a4604b5da5010a.jpg',
  'https://s3.pstatp.com/ies/bytedance_official/_next/static/images/zh-3-5dbfa39699d9bbf71d42a40186595419.jpg',
  'https://s3.pstatp.com/ies/bytedance_official/_next/static/images/zh-4-26c4957719a3e65eb6054907f14fde98.jpg',
  'https://s3.pstatp.com/ies/bytedance_official/_next/static/images/zh-5-ae0af3f048628a4a6703d58084a28014.jpg',
  'https://s3.pstatp.com/ies/bytedance_official/_next/static/images/zh-0-1523846a065bd70e69a6462eeabb59d3.jpg',
];

import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell';
export default {
  i18n: {
    'zh-CN': {
      name: '图片预览',
      basic: '基础用法',
      numberIndicator: '数字类型',
      moreOptions: '更多选项',
      componentCall: '组件调用',
      closeLoop: '关闭切换循环',
      showClose: '显示关闭按钮',
      hiddleIndicator: '隐藏指示器',
    },
    'en-US': {
      name: 'Image Preview',
      basic: 'Basic Usage',
      moreOptions: 'More Options',
      componentCall: 'Component Call',
      numberIndicator: 'Number Indicator',
      closeLoop: 'No loop',
      showClose: 'Show Close Button',
      hiddleIndicator: 'Hiddle Indicator',
    },
  },
  components: {
    demoCell,
    demoTitle,
  },
  data() {
    return {
      images,
      show: false,
    };
  },
  methods: {
    showPreviewImage(props) {
      const instance = this.$imagePreview({
        images,
        ...props,
      });
    },
    change(val) {
      console.log(val);
    },
    showPreviewImageNum() {
      let activeIndex = 1;
      const instance = this.$imagePreview({
        images,
        loop: false,
        onChange: val => {
          console.log(val);
          activeIndex = val + 1;
        },
        indicators: ({ active }) => (
          <div staticClass="byted-image-preview__indicators">
            {activeIndex}/{images.length}
          </div>
        ),
      });
    },
  },
};
</script>
<style lang="less">
.demo.image-preview {
  .byted-button {
    margin-right: 12px;
    margin-bottom: 12px;
  }
}
.byted-image-preview__indicators {
  color: #ffffff;
}
</style>
