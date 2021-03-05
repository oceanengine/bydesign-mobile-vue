<template>
  <div class="demo toast">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>
    <demo-title :title="t('name')">
      <byted-icon-module-loading theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('loading')">
      <byted-button @click="updata('')">
        {{ t('updata') }}
      </byted-button>
    </demo-cell>

    <demo-cell :title="t('text')">
      <byted-button @click="updata('some message')">
        {{ t('updata') }}
      </byted-button>
    </demo-cell>
  </div>
</template>
<script>
import { BytedIconModuleLoading } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
import { setTimeout } from 'timers';
export default {
  i18n: {
    'zh-CN': {
      name: '加载中',
      loading: '加载',
      updata: '提交',
      text: '文字设置',
    },
    'en-US': {
      name: 'OnLoading',
      loading: 'Loading',
      updata: 'Updata',
      text: 'Text',
    },
  },
  components: {
    demoCell,
    demoTitle,
    BytedIconModuleLoading,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    updata(message) {
      const instance = this.$loading(message);
      setTimeout(() => {
        instance.clear();
      }, 3000);
    },
  },
};
</script>
<style lang="less">
.demo.toast {
  .byted-button {
    margin-right: 10px;
  }
}
</style>
