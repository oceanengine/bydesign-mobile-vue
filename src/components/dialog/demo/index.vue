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
      <byted-icon-module-modal theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('basic')">
      <byted-cell :title="t('basic')" is-link @click="show = true" />
      <byted-dialog
        v-model="show"
        :callback="callback"
        title="ByDesign"
        message="ByDesign"
        show-cancel-button
      />
    </demo-cell>

    <demo-cell :title="t('async')">
      <byted-cell :title="t('async')" is-link @click="showAsync = true" />
      <byted-dialog
        v-model="showAsync"
        message="tel: ************"
        :before-close="beforeClose"
        :confirm-button-text="confirmButtonText"
      />
    </demo-cell>

    <demo-cell :title="t('slot')">
      <byted-cell :title="t('slot')" is-link @click="showSlot = true" />
      <byted-dialog v-model="showSlot">
        <img
          class="demo-dialog-img"
          src="https://s1.pstatp.com/cdn/expire-1-M/byted-creative-app/static/app_iconstore_1024pt@2x.png"
        />
        <template slot="title"> oceanengine </template>
      </byted-dialog>
    </demo-cell>
  </div>
</template>
<script>
import { BytedIconModuleModal } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '弹出框',
      basic: '基础用法',
      async: '异步用法',
      slot: '插槽 default & title',
      updata: '提交信息',
      wait: '请稍后...',
      success: '提交成功',
      show: '点击查看',
    },
    'en-US': {
      name: 'Dialog',
      basic: 'Basic',
      async: 'Async',
      slot: 'Slot includes default & title',
      updata: 'Updata',
      wait: 'Waiting...',
      success: 'Success',
      show: 'show',
    },
  },
  components: {
    demoCell,
    demoTitle,
    BytedIconModuleModal,
  },
  data() {
    return {
      show: false,
      showAsync: false,
      showSlot: false,
      loading: false,
    };
  },
  computed: {
    confirmButtonText() {
      return this.loading ? this.t('wait') : this.t('updata');
    },
  },
  methods: {
    beforeClose(a, b) {
      this.loading = true;
      setTimeout(() => {
        b(true);
        this.$toast(this.t('success'));
        setTimeout(() => {
          this.loading = false;
        }, 500);
      }, 2000);
    },
    callback() {
      console.log('After dialog closed');
    },
  },
};
</script>
<style lang="less">
.demo {
  &-dialog-img {
    width: 100%;
  }
}
</style>
