<template>
  <div class="demo checker">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>
    <demo-title :title="t('name')" />

    <demo-cell :title="t('basic')">
      <byted-header title="ByDesign" />
    </demo-cell>

    <demo-cell :title="t('noneLeft')">
      <byted-header title="ByDesign" :left-arrow="false" />
    </demo-cell>

    <demo-cell :title="t('custom')">
      <byted-header title="ByDesign">
        <byted-button slot="left" text="取消" type="text" />
        <byted-button slot="right" text="确定" type="text" />
      </byted-header>
    </demo-cell>

    <demo-cell :title="t('style')">
      <byted-header title="ByDesign" type="primary" />
    </demo-cell>

    <demo-cell :title="t('navtab')">
      <byted-header title="ByDesign" style="margin-bottom: 20px">
        <byted-header-tabs v-model="type">
          <byted-header-tab title="字节跳动" :name="0" />
          <byted-header-tab name="1"> 巨量引擎 </byted-header-tab>
        </byted-header-tabs>
      </byted-header>
      <byted-header title="ByDesign" type="primary">
        <byted-header-tabs v-model="type">
          <byted-header-tab title="字节跳动" :name="0" />
          <byted-header-tab name="1"> 巨量引擎 </byted-header-tab>
        </byted-header-tabs>
      </byted-header>
    </demo-cell>

    <div class="demo-cell">
      <!-- <h4>基础用法</h4> -->
      <!-- <h4>固定定位</h4>
      <byted-header
        :title="t('name')"
        fixed
        @click-left="back"
      /> -->
    </div>
  </div>
</template>
<script>
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '导航栏',
      basic: '基础用法',
      noneLeft: '无返回按钮',
      custom: '自定义按钮',
      style: '样式风格',
      navtab: '导航栏标签',
    },
    'en-US': {
      name: 'header',
      basic: 'Basic Usage',
      noneLeft: 'No return Button',
      custom: 'Custom Button',
      style: 'style',
      navtab: 'Nav tab',
    },
  },
  components: {
    demoCell,
    demoTitle,
  },
  data() {
    return {
      type: 0,
    };
  },
  methods: {
    back() {
      window.history.go(-1);
    },
    noLeftArrowClick() {
      console.log('no left arrow be clicked'); // this should not be invoke
    },
  },
};
</script>
