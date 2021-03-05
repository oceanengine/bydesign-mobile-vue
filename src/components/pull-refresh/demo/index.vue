<template>
  <div class="demo">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>
    <demo-title :title="t('name')" style="padding-left: 0.8rem" />

    <demo-cell :title="t('pullDownTitle')" :title-style="titleStyle">
      <byted-pull-refresh
        v-model="isLoading"
        :load-end-status="loadEndStatus"
        type="primary"
        size="large"
        foot-disabled
        style="background: #fff"
        @pull-down="pullDown"
      >
        <div class="content" style="justify-content: flex-start">
          <!-- <span>{{ t('refreshStatus') }}： {{ isLoading }}</span> -->
          <span>{{ t('pullDownStatus') }}</span>
        </div>
      </byted-pull-refresh>
    </demo-cell>

    <demo-cell :title="t('pullUpTitle')" :title-style="titleStyle">
      <byted-pull-refresh
        v-model="isPullUpLoading"
        :load-end-status="loadEndStatus"
        headDisabled
        type="primary"
        size="large"
        style="background: #fff"
        @pull-up="pullUp"
      >
        <div class="content" style="justify-content: flex-end; padding: 32px 0">
          <!-- <span>{{ t('refreshStatus') }}： {{ isLoading }}</span> -->
          <span>{{ t('pullUpStatus') }}</span>
        </div>
      </byted-pull-refresh>
    </demo-cell>
  </div>
</template>
<script>
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '滑动加载',
      title: '标题',
      basicUsage: '基础用法',
      pullUpTitle: '上拉加载',
      pullDownTitle: '下拉刷新',
      refreshStatus: '刷新状态',
      pullDownStatus: '向下滑动页面试试',
      pullUpStatus: '向上滑动页面试试',
    },
    'en-US': {
      name: 'Sliding loading',
      title: 'title',
      pullUpTitle: 'Pull up loading',
      pullDownTitle: 'Drop down refresh',
      basicUsage: 'Drop down loading',
      refreshStatus: 'Refresh Status',
    },
  },

  components: {
    demoCell,
    demoTitle,
  },
  data() {
    return {
      isLoading: false,
      isPullUpLoading: false,
      loadEndStatus: '',
      titleStyle: {
        'padding-left': '0.8rem',
      },
    };
  },

  methods: {
    pullDown() {
      setTimeout(() => {
        this.isLoading = false;
        this.loadEndStatus = 'success';
      }, 1100);
    },
    pullUp() {
      setTimeout(() => {
        this.isPullUpLoading = false;
        this.loadEndStatus = 'success';
      }, 1100);
    },
  },
};
</script>
<style lang="less" scoped>
.demo {
  margin: 0;
  padding: 0 0 30px 0;
  // height: 100vh;
  .content {
    height: 30vh;
    padding: 32px 0 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
