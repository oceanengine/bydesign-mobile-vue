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
      <byted-icon-module-dropdown theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('basicUsage')">
      <div class="bui-doc-demo-block__card">
        <byted-cell :title="t('basicUsage')" is-link @click="show1 = true" />
        <byted-cell :title="t('cancelUsage')" is-link @click="show3 = true" />
      </div>
      <byted-action-sheet v-model="show1" :actions="simpleActions" @select="onSelect" />
      <byted-action-sheet
        v-model="show3"
        :actions="simpleActions"
        :cancel-text="t('cancel')"
        @cancel="onCancel"
        @select="onSelect"
      />
    </demo-cell>

    <demo-cell :title="t('titleUsage')">
      <div class="bui-doc-demo-block__card">
        <byted-cell :title="t('titleStyle.basicUsage')" is-link @click="show4 = true" />
        <byted-cell :title="t('titleStyle.closeIcon')" is-link @click="showClose = true" />
        <byted-cell :title="t('cancelUsage')" is-link @click="showCancel = true" />
      </div>
      <byted-action-sheet v-model="show4" :title="t('title')" :show-close="false">
        <p class="content">
          {{ t('content') }}
        </p>
      </byted-action-sheet>

      <byted-action-sheet v-model="showClose" :show-close="true" :title="t('title')">
        <p class="content">
          {{ t('content') }}
        </p>
      </byted-action-sheet>

      <byted-action-sheet v-model="showCancel" :title="t('title')" cancel-text="取消">
        <p class="content">
          {{ t('content') }}
        </p>
      </byted-action-sheet>
    </demo-cell>

    <demo-cell :title="t('moreType')">
      <div class="bui-doc-demo-block__card">
        <byted-cell :title="t('more.describe')" is-link @click="showDescribe = true" />
        <byted-cell :title="t('more.switch')" is-link @click="show5 = true" />
        <byted-cell :title="t('optionUsage')" is-link @click="show2 = true" />
      </div>

      <byted-action-sheet
        v-model="show5"
        align="left"
        :divider="false"
        :title="t('title')"
        :actions="slotsActions"
      >
        <template v-slot:extra="props">
          <byted-switch v-model="switchList[props.index]" />
        </template>
      </byted-action-sheet>

      <byted-action-sheet v-model="show2" :actions="statusActions" />

      <byted-action-sheet v-model="showDescribe" :actions="describeActions" />
    </demo-cell>
  </div>
</template>
<script>
import { BytedIconModuleDropdown } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '动作面板',
      title: '标题',
      content: '内容',
      option: '选项',
      cancel: '取消',
      description: '描述详细信息',
      basicUsage: '基础用法',
      optionUsage: '选项状态',
      cancelUsage: '展示取消按钮',
      titleUsage: '附带标题',
      slotsUsage: '额外插槽',
      moreType: '更多类型',
      disabledOption: '禁用状态',
      more: {
        switch: '开关操作项',
        describe: '展示描述信息',
      },
      titleStyle: {
        basicUsage: '标准样式',
        closeIcon: '展示关闭按钮',
      },
    },
    'en-US': {
      name: 'action-sheet',
      title: 'title',
      content: 'content',
      option: 'option',
      cancel: 'cancel',
      description: 'description',
      basicUsage: 'Basic Usage',
      optionUsage: 'Option Status',
      cancelUsage: 'Show Cancel Button',
      titleUsage: 'Show Title Bar',
      slotsUsage: 'Extra Slot',
      moreType: 'More Types',
      disabledOption: 'Disabled Status',
      more: {
        switch: 'Switch Style',
        describe: 'Show Describe',
      },
      titleStyle: {
        basicUsage: 'basicUsage',
        closeIcon: 'Close Icon',
      },
    },
  },
  components: {
    demoCell,
    demoTitle,
    BytedIconModuleDropdown,
  },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      showClose: false,
      showCancel: false,
      showDescribe: false,
      isLoading: true,
      switchList: [true, false, false],
    };
  },

  computed: {
    simpleActions() {
      return [
        { name: this.t('option') },
        { name: this.t('option') },
        { name: this.t('option'), subname: this.t('description') },
      ];
    },

    statusActions() {
      return [
        { name: this.t('option') },
        { name: '选项', loading: this.isLoading },
        { name: this.t('disabledOption'), disabled: true },
      ];
    },
    describeActions() {
      return [
        { name: this.t('option'), subname: this.t('description') },
        { name: this.t('option'), subname: this.t('description') },
        { name: this.t('option'), subname: this.t('description') },
      ];
    },

    slotsActions() {
      return [
        { name: this.t('option'), subname: this.t('description') },
        { name: this.t('option'), subname: this.t('description') },
        { name: this.t('option'), subname: this.t('description') },
      ];
    },
  },

  methods: {
    onSelect(item) {
      this.show1 = false;
      this.show2 = false;
      this.$toast(item.name);
    },

    onCancel() {
      this.$toast('cancel');
    },

    openShow2() {
      this.isLoading = true;
      this.show2 = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>
<style lang="less" scoped>
.content {
  padding: 80px;
  text-align: center;
}
.sheet-cell-content {
  .byted-button {
    margin-bottom: 16px;
  }
  & .byted-button:last-child {
    margin-bottom: 0;
  }
}
</style>
