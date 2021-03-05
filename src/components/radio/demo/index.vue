<template>
  <div class="demo radio">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>

    <demo-title :title="t('name')" style="padding-left: 0.8rem">
      <byted-icon-module-radio theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('basicUsage')" style="padding-left: 0.8rem">
      <byted-radio-group v-model="radio1" :size="currentSize">
        <byted-radio value="1"> {{ t('name') }} 1 </byted-radio>
        <byted-radio value="2"> {{ t('name') }} 2 </byted-radio>
        <byted-radio value="3"> {{ t('name') }} 3 </byted-radio>
      </byted-radio-group>
    </demo-cell>

    <demo-cell :title="t('basicStyle') + ' - dot'" style="padding-left: 0.8rem">
      <byted-radio-group v-model="radio2" type="dot" :size="currentSize">
        <byted-radio value="1"> {{ t('name') }} 1 </byted-radio>
        <byted-radio value="2"> {{ t('name') }} 2 </byted-radio>
        <byted-radio value="3"> {{ t('name') }} 3 </byted-radio>
      </byted-radio-group>
    </demo-cell>
    <demo-cell :title="t('basicStyle') + ' - hook'" style="padding-left: 0.8rem">
      <byted-radio-group v-model="radio3" type="hook" :size="currentSize">
        <byted-radio value="1"> {{ t('name') }} 1 </byted-radio>
        <byted-radio value="2"> {{ t('name') }} 2 </byted-radio>
        <byted-radio value="3"> {{ t('name') }} 3 </byted-radio>
      </byted-radio-group>
    </demo-cell>
    <demo-cell :title="t('basicStyle') + ' - circle'" style="padding-left: 0.8rem">
      <byted-radio-group v-model="radio3" type="circle" :size="currentSize">
        <byted-radio value="1"> {{ t('name') }} 1 </byted-radio>
        <byted-radio value="2"> {{ t('name') }} 2 </byted-radio>
        <byted-radio value="3"> {{ t('name') }} 3 </byted-radio>
      </byted-radio-group>
    </demo-cell>
    <demo-cell :title="t('disabled')" style="padding-left: 0.8rem">
      <byted-radio-group v-model="radio6" disabled type="dot" :size="currentSize">
        <byted-radio value="1"> {{ t('name') }} 1 </byted-radio>
        <byted-radio value="2"> {{ t('name') }} 2 </byted-radio>
      </byted-radio-group>
    </demo-cell>

    <demo-cell :title="t('asyncUsage')" style="padding-left: 0.8rem">
      <byted-radio-group
        :value="radio7"
        :size="currentSize"
        @input="onInput"
        @click="onClick"
        @change="onChange"
      >
        <byted-radio value="1"> {{ t('name') }} 1 </byted-radio>
        <byted-radio value="2"> {{ t('name') }} 2 </byted-radio>
        <byted-radio value="3"> {{ t('name') }} 3 </byted-radio>
      </byted-radio-group>
    </demo-cell>

    <demo-cell :title="t('ComUsage')" :title-style="titleStyle">
      <byted-radio-group :value="radio8" :size="currentSize">
        <byted-cell-group>
          <byted-cell :title="t('comTitle')" @click="radio8 = '1'">
            <template #right-icon>
              <byted-radio value="1" />
            </template>
          </byted-cell>
          <byted-cell :title="t('comTitle')" @click="radio8 = '2'">
            <template #right-icon>
              <byted-radio value="2" />
            </template>
          </byted-cell>
        </byted-cell-group>
      </byted-radio-group>
    </demo-cell>

    <dom-size :current-size="currentSize" :sizes="sizes" @changeSize="changeSize" />
  </div>
</template>
<script>
import { BytedIconModuleRadio } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
import DomSize from '../../../../docs/site/components/DomSize.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '单选框',
      basicUsage: '基础用法',
      basicStyle: '风格类型',
      basicSize: '尺寸大小',
      disabled: '禁用状态',
      asyncUsage: '异步用法',
      ComUsage: '组合用法',
      comTitle: '标题',
    },
    'en-US': {
      name: 'Radio',
      basicUsage: 'Basic Usage',
      basicStyle: 'Basic Style',
      basicSize: 'Basic Size',
      disabled: 'Disabled Status',
      asyncUsage: 'Async Usage',
      ComUsage: 'Combination Usage',
      comTitle: 'Title',
    },
  },

  components: {
    demoCell,
    DomSize,
    demoTitle,
    BytedIconModuleRadio,
  },
  data() {
    return {
      titleStyle: {
        'padding-left': '0.8rem',
      },
      sizes: ['small', 'normal', 'large'],
      currentSize: 'normal',
      radio1: '1',
      radio2: '2',
      radio3: '1',
      radio4: '1',
      radio5: '1',
      radio6: '1',
      radio7: '1',
      radio8: '1',
    };
  },
  methods: {
    onInput(value) {
      console.log('input');
      this.$confirm(`是否确定选择${value}选项？`)
        .then(() => {
          this.radio7 = value;
        })
        .catch(() => {
          //
        });
    },
    onClick() {
      console.log('click');
    },
    onChange(value) {
      console.log('change', value);
    },

    changeSize(val) {
      this.currentSize = val;
    },
  },
};
</script>
<style lang="less" scoped>
.demo.radio {
  padding: 0 0 80px 0;
  .byted-radio {
    // margin: 8px 0;
  }
}
</style>
