<template>
  <div class="demo">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>

    <demo-title :title="t('name')" style="padding-left: 0.8rem">
      <byted-icon-module-search theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('basicUsage')" :title-style="titleStyle">
      <byted-search v-model="value1" />
    </demo-cell>

    <demo-cell :title="t('cancelUsage')" :title-style="titleStyle">
      <byted-search v-model="value2" cancelable @cancel="cancel" />
    </demo-cell>

    <demo-cell :title="t('slotsUsage')" :title-style="titleStyle">
      <byted-search v-model="value4">
        <template #left>
          <span class="fz-16">{{ t('left') }}</span>
        </template>
        <template #icon> Icon </template>
        <template #right>
          <span class="fz-16">{{ t('right') }}</span>
        </template>
      </byted-search>
    </demo-cell>

    <demo-cell :title="t('radiusUsage')" :title-style="titleStyle">
      <byted-search v-model="value3" border-radius="22px" />
    </demo-cell>
  </div>
</template>
<script>
import { BytedIconModuleSearch } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '搜索栏',
      basicUsage: '基础用法',
      cancelUsage: '取消类型',
      radiusUsage: '圆角类型',
      slotsUsage: '插槽用法',
      left: '左边',
      right: '右边',
    },
    'en-US': {
      name: 'search',
      basicUsage: 'Basic Usage',
      cancelUsage: 'Cancel Usage',
      radiusUsage: 'Radius Usage',
      slotsUsage: 'Slots Usage',
      left: 'left',
      right: 'right',
    },
  },
  components: {
    demoCell,
    demoTitle,
    BytedIconModuleSearch,
  },
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      titleStyle: {
        'padding-left': '16px',
      },
    };
  },

  methods: {
    cancel() {
      this.$toast('cancel');
    },
  },
};
</script>
<style lang="less" scoped>
.demo {
  min-height: 100vh;
  padding: 0;
  .dome-title {
    margin-left: 16px;
  }
  .fz-16 {
    font-size: 16px;
  }
  h4 {
    padding-left: 10px;
  }
}
</style>
