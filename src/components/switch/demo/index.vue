<template>
  <div class="demo switch">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>

    <demo-title :title="t('name')">
      <byted-icon-module-switch theme="outline" size="20" fill="#333" />
    </demo-title>
    <demo-cell :title="t('basicUsage')">
      <byted-switch v-model="valueBase" :size="currentSize" @change="change" />
    </demo-cell>
    <demo-cell :title="t('disabledUsage')">
      <byted-switch v-model="valueBase" disabled :size="currentSize" />
    </demo-cell>
    <demo-cell :title="t('controlledUsage')">
      <byted-switch
        :value="valueControlled"
        :loading="isLoading"
        :size="currentSize"
        @input="changeValue"
      />
    </demo-cell>

    <dom-size :current-size="currentSize" :sizes="sizes" @changeSize="changeSize" />
  </div>
</template>
<script>
import { BytedIconModuleSwitch } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
import DomSize from '../../../../docs/site/components/DomSize.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '开关',
      basicUsage: '基础用法',
      disabledUsage: '禁用状态',
      largeSize: '大尺寸',
      controlledUsage: '受控状态',
    },
    'en-US': {
      name: 'switch',
      basicUsage: 'Basic Usage',
      disabledUsage: 'Disabled Usage',
      largeSize: 'Large Size',
      controlledUsage: 'Controlled Usage',
    },
  },
  components: {
    demoCell,
    DomSize,
    demoTitle,
    BytedIconModuleSwitch,
  },
  data() {
    return {
      valueBase: false,
      valueDiasbledTrue: true,
      valueControlled: true,
      isLoading: false,
      sizes: ['normal', 'large'],
      currentSize: 'normal',
    };
  },
  methods: {
    change(value) {
      console.log(`new value ${value}`);
    },
    changeValue(value) {
      this.isLoading = true;
      setTimeout(() => {
        // alert(`new value ${value}`)
        this.isLoading = false;
        this.valueControlled = !this.valueControlled;
      }, 1000);
    },
    changeSize(val) {
      this.currentSize = val;
    },
  },
};
</script>
<style lang="less">
.demo.switch {
  height: 100vh;
  .byted-switch {
    margin-right: 10px;
  }
}
</style>
