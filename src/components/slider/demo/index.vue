<template>
  <div class="demo">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>
    <demo-title :title="t('name')">
      <byted-icon-module-slider theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('basicUsage')">
      <byted-slider v-model="value1" @change="onChange" />
    </demo-cell>

    <demo-cell :title="t('rangeUsage')">
      <byted-slider v-model="value2" :min="-50" :max="50" @change="onChange" />
    </demo-cell>
    <demo-cell :title="t('stepUsage')">
      <byted-slider v-model="value3" :step="10" @change="onChange" />
    </demo-cell>
    <demo-cell :title="t('setSteps')">
      <byted-slider v-model="value4" :steps="[0, 50, 70, 77, 90, 120]" @change="onChange" />
    </demo-cell>
    <demo-cell :title="t('disabledUsage')">
      <byted-slider v-model="value5" disabled />
    </demo-cell>
  </div>
</template>
<script>
import { BytedIconModuleSlider } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '滑块',
      title: '标题',
      basicUsage: '基础用法',
      rangeUsage: '指定范围',
      stepUsage: '指定步长',
      setSteps: '指定步长值',
      disabledUsage: '禁用状态',
    },
    'en-US': {
      name: 'slider',
      title: 'title',
      basicUsage: 'Basic Usage',
      rangeUsage: 'Range Usage',
      stepUsage: 'Step Usage',
      setSteps: 'Set Steps',
      disabledUsage: 'Disabled Usage',
    },
  },
  components: {
    BytedIconModuleSlider,
    demoCell,
    demoTitle,
  },
  data() {
    return {
      value1: 50,
      value2: 0,
      value3: 50,
      value4: 70,
      value5: 50,
      steps: [0, 50, 70, 77, 90, 120],
    };
  },
  methods: {
    onChange(val) {
      this.$toast(val);
    },
  },
};
</script>

<style lang="less" scoped>
.demo .byted-slider {
  margin: 4px;
}
</style>
