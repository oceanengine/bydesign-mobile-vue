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
      <byted-icon-module-checkbox theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('basicUsage')">
      <byted-checkbox-group v-model="checkbox2" :size="currentSize">
        <byted-checkbox v-for="index in 4" :key="index" :value="index">
          {{ t('name') }} {{ index }}
        </byted-checkbox>
      </byted-checkbox-group>
    </demo-cell>

    <demo-cell :title="t('basicStyle')">
      <byted-checkbox-group v-model="checkbox5" type="number" :size="currentSize">
        <byted-checkbox v-for="index in 4" :key="index" :value="index">
          {{ t('name') }} {{ index }}
        </byted-checkbox>
      </byted-checkbox-group>
    </demo-cell>
    <demo-cell :title="t('disabled')">
      <byted-checkbox-group v-model="checkbox3" :size="currentSize">
        <byted-checkbox v-for="index in 2" :key="index" :value="index" disabled>
          {{ t('name') }} {{ index }}
        </byted-checkbox>
      </byted-checkbox-group>
    </demo-cell>
    <demo-cell :title="t('stopPropagation')">
      <byted-checkbox-group v-model="checkbox4" :size="currentSize">
        <byted-checkbox v-for="index in 4" :key="index" :value="index" stop-propagation>
          <div @click="handleChild">{{ t('name') }} {{ index }}</div>
        </byted-checkbox>
      </byted-checkbox-group>
    </demo-cell>

    <dom-size :current-size="currentSize" :sizes="sizes" @changeSize="changeSize" />
  </div>
</template>
<script>
import { BytedIconModuleCheckbox } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
import DomSize from '../../../../docs/site/components/DomSize.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '复选框',
      basicUsage: '基础用法',
      disabled: '禁用状态',
      basicStyle: '风格类型',
      stopPropagation: '阻止事件冒泡',
    },
    'en-US': {
      name: 'Checkbox',
      basicUsage: 'Basic Usage',
      basicStyle: 'Basic Style',
      disabled: 'Disabled Status',
      stopPropagation: 'StopPropagation',
    },
  },
  components: {
    demoCell,
    DomSize,
    demoTitle,
    BytedIconModuleCheckbox,
  },
  data() {
    return {
      sizes: ['small', 'normal', 'large'],
      currentSize: 'normal',
      checkbox1: [1, 2, 3],
      checkbox2: [1, 3],
      checkbox3: [2],
      checkbox4: [2],
      checkbox5: [2, 4],
    };
  },
  methods: {
    father() {
      alert('you click domFather');
    },
    handleChild() {
      alert('you click domChild');
    },
    changeSize(val) {
      this.currentSize = val;
    },
  },
};
</script>
<style lang="less" scoped>
.demo {
  margin-bottom: 0;
  padding-bottom: 20px;
}
.byted-checkbox {
  margin: 10px 0;
}
</style>
