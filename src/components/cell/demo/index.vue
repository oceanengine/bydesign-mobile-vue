<template>
  <div class="demo cell">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>
    <demo-title :title="t('name')" style="padding-left: 0.8rem" />

    <demo-cell1 :title="t('basicUsage')" :title-style="titleStyle">
      <byted-cell-group>
        <byted-cell :title="t('title')" :value="t('showValue')" :size="currentSize" clickable />
        <byted-cell
          :title="t('title')"
          :label="t('showLabel')"
          :value="t('showValue')"
          :size="currentSize"
          clickable
        />
        <byted-cell
          :title="t('title')"
          :label="t('showLabel')"
          :value="t('showValue')"
          :size="currentSize"
          clickable
          middle
        />
      </byted-cell-group>
    </demo-cell1>

    <demo-cell1 :title="t('arrowDirection')" :title-style="titleStyle">
      <byted-cell-group>
        <byted-cell :title="t('title')" :value="t('showValue')" :size="currentSize" is-link />
        <byted-cell
          :title="t('title')"
          :value="t('showValue')"
          is-link
          arrow-direction="down"
          :size="currentSize"
        />
      </byted-cell-group>
    </demo-cell1>

    <!-- <demo-cell1 :title="t('valueOnly')" :titleStyle="titleStyle">
      <byted-cell-group>
        <byted-cell 
          :value="t('showValue')" 
          :size="currentSize"
        />
      </byted-cell-group>
    </demo-cell1> -->

    <demo-cell1 :title="t('groupTitle')" :title-style="titleStyle">
      <byted-cell-group :title="t('group') + 1">
        <byted-cell :title="t('title')" :value="t('showValue')" :size="currentSize" />
      </byted-cell-group>
      <byted-cell-group :title="t('group') + 2">
        <byted-cell :title="t('title')" :value="t('showValue')" :size="currentSize" />
      </byted-cell-group>
    </demo-cell1>

    <demo-cell1 :title="t('advancedUsage')" :title-style="titleStyle">
      <byted-cell :value="t('showValue')" :size="currentSize" is-link>
        <template #title>
          <span>{{ t('slot') }}</span>
        </template>
      </byted-cell>
      <byted-cell :title="t('title')" :size="currentSize">
        <template #right-icon>
          <byted-icon name="check-one" size="1rem" />
        </template>
      </byted-cell>
      <!-- 开关 -->
      <byted-cell :title="t('title')" :size="currentSize">
        <template #right-icon>
          <byted-switch v-model="valueBase" />
        </template>
      </byted-cell>
    </demo-cell1>

    <dom-size :current-size="currentSize" :sizes="sizes" @changeSize="changeSize" />
  </div>
</template>
<script>
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell';
import DomSize from '../../../../docs/site/components/DomSize.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '单元格',
      title: '标题',
      basicUsage: '基础用法',
      arrowDirection: '箭头方向',
      cellSize: '单元格大小',
      valueOnly: '只设置 value',
      showValue: '内容',
      showLabel: '副标题',
      showIcon: '展示图标',
      showArrow: '展示箭头',
      largeSize: '单元格大小',
      group: '分组',
      groupTitle: '分组标题',
      router: '页面跳转',
      advancedUsage: '插槽用法',
      slot: '插槽',
    },
    'en-US': {
      name: 'cell',
      title: 'title',
      basicUsage: 'Basic Usage',
      arrowDirection: 'Arrow Direction',
      cellSize: 'Cell Size',
      valueOnly: 'Value only',
      showValue: 'I am Value',
      showLabel: 'I am sec Title',
      showIcon: 'Left Icon',
      showArrow: 'Link',
      largeSize: 'Size',
      group: 'Group',
      groupTitle: 'Group Title',
      router: 'Router',
      advancedUsage: 'Advanced Usage',
      slot: 'slot',
    },
  },
  components: {
    'demo-cell1': demoCell,
    demoTitle,
    DomSize,
  },
  data() {
    return {
      valueBase: false,
      sizes: ['small', 'normal', 'large'],
      currentSize: 'normal',
      titleStyle: {
        'padding-left': '0.8rem',
      },
    };
  },
  created() {},
  methods: {
    changeSize(val) {
      this.currentSize = val;
    },
  },
};
</script>
<style lang="less" scoped>
.demo.cell {
  padding: 0 0 80px 0;
  .demo-cell {
    h4 {
      padding: 0 10px;
    }
  }
}
</style>
