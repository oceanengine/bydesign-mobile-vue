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
      <byted-icon-module-collapse theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('basicUsage')" :title-style="{ 'padding-left': '0.8rem' }">
      <byted-collapse v-model="active1">
        <byted-collapse-item :title="t('title')" :message="t('content')" />
        <byted-collapse-item
          :title="t('title')"
          :is-link="false"
          clickable
          :message="t('content')"
        />
        <byted-collapse-item disabled :title="t('disabled')" />
      </byted-collapse>
    </demo-cell>
    <demo-cell :title="t('accordion')" :title-style="{ 'padding-left': '0.8rem' }">
      <byted-collapse v-model="active2" accordion>
        <byted-collapse-item :title="t('title')" :message="t('content')" name="1" />
        <byted-collapse-item :title="t('title')" :message="t('content')" name="2" />
        <byted-collapse-item :title="t('title')" :message="t('content')" name="3" />
      </byted-collapse>
    </demo-cell>
    <demo-cell :title="t('advancedUsage')" :title-style="{ 'padding-left': '0.8rem' }">
      <byted-collapse v-model="active3">
        <byted-collapse-item>
          <template #title>
            {{ t('title') }}
          </template>
          <p style="margin: 0">{{ t('content') }}</p>
        </byted-collapse-item>
      </byted-collapse>
    </demo-cell>
  </div>
</template>
<script>
import { BytedIconModuleCollapse } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '折叠面板',
      title: '标题',
      content: '内容',
      basicUsage: '基础用法',
      accordion: '手风琴',
      basicSize: '尺寸大小',
      disabled: '禁用状态',
      advancedUsage: '插槽用法',
    },
    'en-US': {
      name: 'Collapse',
      title: 'title',
      content: 'i am content',
      basicUsage: 'Basic Usage',
      accordion: 'Accordion',
      basicSize: 'Basic Size',
      disabled: 'Disabled Status',
      advancedUsage: 'Slot Usage',
    },
  },
  components: {
    demoCell,
    demoTitle,
    BytedIconModuleCollapse,
  },
  data() {
    return {
      active1: [],
      active2: '1',
      active3: [0],
    };
  },
};
</script>
<style lang="less" scoped>
.demo {
  padding: 0;
}
.byted-collapse {
  margin: 10px 0;
  p {
    font-size: 12px;
    padding: 12px;
  }
}
</style>
