<template>
  <div class="demo step">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>

    <demo-title :title="t('name')">
      <byted-icon-arrow-circle-right theme="outline" size="20" fill="#333" />
    </demo-title>
    <demo-cell :title="t('basicUsage')">
      <div class="bui-doc-demo-block__card">
        <byted-cell :title="t('basicUsage')" :size="currentSize">
          <template #right-icon>
            <byted-stepper v-model="value1" :size="currentSize" />
          </template>
        </byted-cell>
      </div>
    </demo-cell>

    <demo-cell :title="t('min&max')">
      <div class="bui-doc-demo-block__card">
        <byted-cell :title="t('min&max')" :size="currentSize">
          <template #right-icon>
            <byted-stepper v-model="value2" :min="2" :size="currentSize" :max="4" />
          </template>
        </byted-cell>
      </div>
    </demo-cell>
    <demo-cell :title="t('disabled')">
      <div class="bui-doc-demo-block__card">
        <byted-cell :title="t('disabled')" :size="currentSize">
          <template #right-icon>
            <byted-stepper v-model="value3" disabled :size="currentSize" />
          </template>
        </byted-cell>
      </div>
    </demo-cell>

    <dom-size :current-size="currentSize" :sizes="sizes" @changeSize="changeSize" />
  </div>
</template>

<script>
import { BytedIconArrowCircleRight } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
import DomSize from '../../../../docs/site/components/DomSize.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '步进器',
      basicUsage: '基础用法',
      'min&max': '边界值',
      disabled: '禁用状态',
      size: '尺寸大小',
    },
    'en-US': {
      name: 'stepper',
      basicUsage: 'Basic Usage',
      'min&max': 'Min & Max',
      disabled: 'Disabled',
      size: 'Size',
    },
  },
  components: {
    demoCell,
    DomSize,
    demoTitle,
    BytedIconArrowCircleRight,
  },
  data() {
    return {
      sizes: ['small', 'normal', 'large'],
      currentSize: 'normal',
      value1: 1,
      value2: 3,
      value3: 1,
      value4: 1,
    };
  },
  methods: {
    changeSize(val) {
      this.currentSize = val;
    },
  },
};
</script>

<style lang="less">
.demo.step {
  .byted-cell__title {
    display: flex;
    align-items: center;
  }
}
</style>
