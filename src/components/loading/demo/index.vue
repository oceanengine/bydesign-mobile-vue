<template>
  <div class="demo loading">
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

    <demo-cell :title="t('basic')">
      <byted-row>
        <byted-col span="12">
          <byted-loading />
        </byted-col>
      </byted-row>
    </demo-cell>

    <demo-cell :title="t('text')">
      <byted-row type="flex" align="center">
        <byted-col span="12">
          <byted-loading :text="onloading" />
        </byted-col>
      </byted-row>
    </demo-cell>

    <demo-cell :title="t('styleVertical')">
      <byted-loading vertical> 加载中... </byted-loading>
    </demo-cell>
    <demo-cell :title="t('size')">
      <byted-row>
        <byted-col span="12">
          <!-- style="text-align: center" -->
          <byted-loading size="1.2rem" />
        </byted-col>
      </byted-row>
    </demo-cell>

    <demo-cell :title="t('style')">
      <byted-loading />
      <byted-loading type="circle" style="margin-left: 16px" />
    </demo-cell>
  </div>
</template>
<script>
import { BytedIconModuleLoading } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell';
export default {
  i18n: {
    'zh-CN': {
      name: '加载',
      basic: '基础用法',
      style: '图标风格',
      text: '加载文案',
      styleVertical: '垂直排列',
      onloading: '加载中',
      size: '图标大小',
    },
    'en-US': {
      name: 'loading',
      basic: 'Basic',
      style: 'Type',
      text: 'Text',
      styleVertical: 'Vertical arrangement',
      onloading: 'onloading',
      size: 'Icon Size',
    },
  },
  components: {
    demoTitle,
    demoCell,
    BytedIconModuleLoading,
  },
  computed: {
    onloading() {
      return this.t('onloading');
    },
  },
  methods: {
    onClick(event) {
      console.log(`click: event:${event}`);
    },
  },
};
</script>
