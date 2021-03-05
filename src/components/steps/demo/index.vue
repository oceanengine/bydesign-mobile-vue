<template>
  <div class="demo steps">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>
    <demo-title :title="t('name')">
      <byted-icon-module-search theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('horizontal')">
      <byted-steps style="margin-bottom: 24px" :current="current" @change="handleClick">
        <byted-step v-for="item in steps" :key="item.title" v-bind="item"></byted-step>
      </byted-steps>

      <byted-steps :current="current" @change="handleClick" labelDirection="vertical">
        <byted-step v-for="item in steps" :key="item.title" v-bind="item"></byted-step>
      </byted-steps>
    </demo-cell>

    <demo-cell :title="t('vertical')">
      <div class="steps-vertical-layout">
        <byted-steps
          style="height: 300px; margin-right: 100px"
          direction="vertical"
          :current="current"
          @change="handleClick"
        >
          <byted-step v-for="item in steps" :key="item.title" v-bind="item"></byted-step>
        </byted-steps>

        <byted-steps
          style="height: 300px"
          direction="vertical"
          labelDirection="vertical"
          :current="current"
          @change="handleClick"
        >
          <byted-step v-for="item in steps" :key="item.title" v-bind="item"></byted-step>
        </byted-steps>
      </div>
    </demo-cell>
  </div>
</template>

<script>
import { BytedIconModuleSearch } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
export default {
  data() {
    return {
      current: 2,
      steps: [
        {
          title: '已完成',
        },
        {
          title: '进行中',
          inProgress: true,
        },
        {
          title: '待完成',
        },
        {
          title: '未完成',
          status: 'error',
        },
      ],
    };
  },

  i18n: {
    'zh-CN': {
      name: '步骤条',
      horizontal: '水平版',
      vertical: '垂直版',
    },
    'en-US': {
      name: 'steps',
      horizontal: 'horizontal',
      vertical: 'vertical',
    },
  },
  components: {
    demoTitle,
    demoCell,
    BytedIconModuleSearch,
  },
  methods: {
    handleClick(index) {
      console.log(index);
      this.current = index;
    },
  },
};
</script>

<style lang="less">
.steps {
  .steps-vertical-layout {
    display: flex;
  }
}
</style>
