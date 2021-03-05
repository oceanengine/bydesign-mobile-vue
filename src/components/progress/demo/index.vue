<template>
  <div class="demo progress">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>
    <demo-title :title="t('name')">
      <byted-icon-module-progress theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('basicUsage')">
      <byted-progress :percentage="val" :color="color" />
    </demo-cell>

    <demo-cell :title="t('NumberUsage')">
      <byted-progress :percentage="val" :color="color" :text-in-middle="true" />
      <byted-progress :percentage="100" color="#6ABF40" :text-in-middle="true" />
    </demo-cell>
  </div>
</template>

<script>
import { BytedIconModuleProgress } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '进度条',
      basicUsage: '默认样式',
      NumberUsage: '数字展示',
      add: '增加',
      subtract: '减少',
    },
    'en-US': {
      name: 'progress bar',
      basicUsage: 'basic Usage',
      NumberUsage: 'Number Usage',
      add: 'add',
      subtract: 'subtract',
    },
  },
  components: {
    demoTitle,
    demoCell,
    BytedIconModuleProgress,
  },
  data() {
    return {
      val: 60,
    };
  },
  computed: {
    color() {
      return this.val >= 100 ? '#00d2d5' : '#0278ff';
    },
  },
  methods: {
    add() {
      if (this.val < 100) {
        this.val++;
      }
    },
    reduce() {
      if (this.val > 0) {
        this.val--;
      }
    },
  },
};
</script>

<style lang="less">
.demo.progress {
  position: relative;
  height: 100vh;
  margin-bottom: 0;
  padding-bottom: 20px;
  .byted-progress {
    margin-bottom: 16px;
  }
  .progress-btn {
    box-sizing: border-box;
    width: 100%;
    padding: 0 16px;
    position: absolute;
    bottom: 24px;
    left: 0;
    right: 0;
  }
}
</style>
