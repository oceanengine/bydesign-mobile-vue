<template>
  <div class="demo button">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>

    <demo-title :title="t('name')">
      <byted-icon-module-button theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('type')">
      <byted-button :text="t('default')" :size="currentSize" />
      <byted-button :text="t('primary')" type="primary" :size="currentSize" @click="onClick" />
      <byted-button :text="t('success')" type="success" :size="currentSize" />
      <byted-button :text="t('warning')" type="warning" :size="currentSize" />
      <byted-button :text="t('danger')" type="danger" :size="currentSize" />
    </demo-cell>
    <!-- plain -->
    <demo-cell :title="t('plain')">
      <byted-button :text="t('plain')" :size="currentSize" type="primary" plain />
      <byted-button :text="t('plain')" type="success" :size="currentSize" plain />
      <byted-button :text="t('plain')" type="warning" :size="currentSize" plain />
      <byted-button :text="t('plain')" type="danger" :size="currentSize" plain />
    </demo-cell>
    <!-- fade -->
    <demo-cell :title="t('fade')">
      <byted-button :text="t('fade')" type="primary" :size="currentSize" fade />
      <byted-button :text="t('fade')" type="success" :size="currentSize" fade />
      <byted-button :text="t('fade')" type="warning" :size="currentSize" fade />
      <byted-button :text="t('fade')" type="danger" :size="currentSize" fade />
    </demo-cell>
    <!-- hairline -->
    <demo-cell :title="t('hairline')">
      <byted-button :text="t('hairline')" type="primary" :size="currentSize" hairline />
      <byted-button :text="t('hairline')" type="success" :size="currentSize" hairline />
      <byted-button :text="t('hairline')" type="warning" :size="currentSize" hairline fade />
      <byted-button :text="t('hairline')" type="danger" :size="currentSize" hairline fade />
    </demo-cell>
    <!-- shape -->
    <demo-cell :title="t('shape')">
      <byted-button :text="t('square')" type="primary" :size="currentSize" square />
      <byted-button :text="t('round')" type="primary" :size="currentSize" round />
    </demo-cell>
    <!-- disabled -->
    <demo-cell :title="t('disabled')">
      <byted-button :text="t('disabled')" plain :size="currentSize" disabled />
      <byted-button :text="t('disabled')" type="primary" plain :size="currentSize" disabled />
      <byted-button :text="t('disabled')" type="primary" :size="currentSize" disabled />
    </demo-cell>
    <demo-cell :title="t('loading')">
      <byted-button :text="t('loading')" plain :size="currentSize" loading />
      <byted-button :text="t('loading')" type="primary" plain :size="currentSize" loading />
      <byted-button :text="t('loading')" type="primary" :size="currentSize" loading />
      <byted-button :text="t('loading')" type="primary" size="midget" loading />
    </demo-cell>
    <!-- text -->
    <demo-cell :title="t('text')">
      <byted-button :text="t('text')" :size="currentSize" type="text" />
    </demo-cell>

    <demo-size :current-size="currentSize" :sizes="sizes" @changeSize="changeSize" />
  </div>
</template>
<script>
import { BytedIconModuleButton } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
import demoSize from '../../../../docs/site/components/DomSize.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '按钮',
      type: '基础用法',
      default: '默认',
      primary: '主要',
      success: '成功',
      warning: '警告',
      danger: '危险',
      plain: '描边类型',
      fade: '透明类型',
      hairline: '细边类型',
      shape: '形状类型',
      square: '直角',
      round: '圆角',
      disabled: '禁用类型',
      size: '尺寸',
      text: '文字类型',
      loading: '加载状态',
    },
    'en-US': {
      name: 'button',
      type: 'Type',
      default: 'Default',
      primary: 'Primary',
      success: 'Success',
      warning: 'Warning',
      danger: 'Danger',
      plain: 'Plain',
      fade: 'Fade',
      hairline: 'Hairline',
      shape: 'Shape',
      square: 'Square',
      round: 'Round',
      disabled: 'Disabled',
      size: 'Size',
      text: 'Text',
      loading: 'Loading',
    },
  },
  components: {
    BytedIconModuleButton,
    demoCell,
    demoSize,
    demoTitle,
  },
  data() {
    return {
      sizes: ['tiny', 'mini', 'small', 'normal', 'large'],
      currentSize: 'large',
    };
  },
  methods: {
    onClick(event) {
      console.log(`click: event:${event}`);
    },
    changeSize(val) {
      this.currentSize = val;
    },
  },
};
</script>
<style lang="less">
.demo {
  &.button {
    .byted-button {
      margin-right: 12px;
      margin-bottom: 12px;
    }
    p {
      margin: 10px 0;
    }
  }
  &-header-icon {
    width: 88px;
    height: 100%;
    display: inline-flex;
    align-items: center;
  }
  .img-icon {
    height: 22px;
  }
}
</style>
