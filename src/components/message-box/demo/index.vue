<template>
  <div class="demo messageBox">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>

    <demo-title :title="t('name')">
      <byted-icon-module-popover theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('default')" class="demo-cell-custom">
      <div class="bui-doc-demo-block__card">
        <byted-cell :title="t('single')" is-link @click="onClickAlertNoTitle" />
        <byted-cell :title="t('double')" is-link @click="onClickConfirmNoTitleTwo" />
        <byted-cell :title="t('many')" is-link @click="onClickDialogNoTitle" />
      </div>
    </demo-cell>

    <demo-cell :title="t('title')">
      <div class="bui-doc-demo-block__card">
        <byted-cell :title="t('single')" is-link @click="onClickAlert" />
        <byted-cell :title="t('double')" is-link @click="onClickConfirm" />
        <byted-cell :title="t('many')" is-link @click="onClickDialogTitle" />
      </div>
    </demo-cell>

    <demo-cell :title="t('slot')">
      <div class="bui-doc-demo-block__card">
        <byted-cell :title="t('single')" is-link @click="onClickCustomNoTitle" />
        <byted-cell :title="t('double')" is-link @click="onClickCustom" />
        <byted-cell :title="t('many')" is-link @click="onClickSlot" />
        <!-- <byted-cell :title="t('many')" is-link  @click="onClickCustomMore" /> -->
      </div>
      `
    </demo-cell>

    <byted-dialog v-model="show" title="BUI" show-confirm-button>
      <div class="custom-body">
        <byted-field v-model="value" />
      </div>
    </byted-dialog>

    <byted-dialog v-model="showTwo" title="BUI" show-cancel-button show-confirm-button>
      <div class="custom-body">
        <byted-field v-model="value" />
      </div>
    </byted-dialog>
    <byted-dialog v-model="showThree" title="BUI" :show-confirm-button="false">
      <div class="custom-body">
        <byted-field v-model="value" placeholder="请输入内容" />
      </div>
      <div class="custom-footer">
        <byted-button size="large" hairline @click="showThree = false">
          {{ t('yes') }}
        </byted-button>
        <byted-button size="large" hairline @click="showThree = false">
          {{ t('not') }}
        </byted-button>
        <byted-button size="large" hairline @click="showThree = false">
          {{ t('confirm') }}
        </byted-button>
      </div>
    </byted-dialog>
  </div>
</template>
<script>
import { BytedIconModulePopover } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
import DomSize from '../../../../docs/site/components/DomSize.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '对话框',
      text: 'BUI-轻量、可靠的Vue 组件库',
      alert: '提示',
      noTitle: '无标题',
      noContent: '无内容',
      confirm: '确认',
      yesOrNot: '是否',
      doYouLove: '是否喜欢',
      yes: '是',
      not: '否',
      size: '尺寸',
      actions: '操作',
      choose: '选择',
      custom: '自定义',
      default: '基础用法',
      title: '标题类型',
      slot: '自定义类型',
      single: '单选项',
      double: '双选项',
      many: '多选项',
    },
    'en-US': {
      name: 'messageBox',
      text: 'BUI-m: Lightweight, reliable Vue component library',
      alert: 'Alert',
      noTitle: 'No Title',
      noContent: 'No Content',
      confirm: 'Confirm',
      yesOrNot: 'Yes or Not',
      doYouLove: 'Do you love',
      yes: 'Yes',
      not: 'Not',
      size: 'Size',
      actions: 'Actions',
      choose: 'Choose',
      custom: 'Custom',
      default: 'default',
      title: 'title',
      slot: 'slot',
      single: 'single',
      double: 'double',
      many: 'many',
    },
  },
  components: {
    demoCell,
    // DomSize,
    demoTitle,
    BytedIconModulePopover,
  },
  data() {
    return {
      show: false,
      showTwo: false,
      showThree: false,
      value: '',
      sizes: ['small', 'normal', 'large'],
      currentSize: 'normal',
    };
  },
  methods: {
    onClickAlert() {
      this.$alert(this.t('text'), 'BUI');
    },
    onClickAlertNoTitle() {
      this.$alert(this.t('text'));
    },
    onClickConfirmNoTitleTwo() {
      this.$confirm(this.t('text'), {
        cancelButtonText: this.t('not'),
        confirmButtonText: this.t('yes'),
      })
        .then(() => {
          console.log('your answer is Yes');
        })
        .catch(() => {
          console.log('your answer is Not');
        });
    },
    onClickAlertNoContent() {
      this.$alert('', this.t('text'));
    },
    onClickConfirm() {
      this.$confirm('ByDesign', this.t('doYouLove'), {
        cancelButtonText: this.t('not'),
        confirmButtonText: this.t('yes'),
      })
        .then(() => {
          console.log('your answer is Yes');
        })
        .catch(() => {
          console.log('your answer is Not');
        });
    },
    onClickConfirmSmall() {
      this.$confirm('ByDesign', 'Do you love', {
        cancelButtonText: 'Not',
        confirmButtonText: 'Yes',
        size: 'small',
      }).then(() => {
        console.log('your answer is Yes');
      });
    },
    onClickConfirmLarge() {
      this.$confirm('ByDesign', 'Do you love', {
        cancelButtonText: 'Not',
        confirmButtonText: 'Yes',
        size: 'large',
      }).then(() => {
        console.log('your answer is Yes');
      });
    },
    onClickDialogNoTitle() {
      this.$dialog({
        message: this.t('text'),
        size: 'large',
        actions: [
          {
            name: this.t('yes'),
          },
          {
            name: this.t('not'),
          },
          {
            name: this.t('confirm'),
          },
        ],
      }).then(item => {
        console.log(`your answer is ${item.name}`);
      });
    },
    onClickSlot() {
      this.$dialog({
        renderMessage(h) {
          return h(
            'div',
            {
              class: ['custom-body'],
            },
            [
              h('byted-field', {
                props: {
                  value: '',
                },
              }),
            ],
          );
        },
        title: 'BUI',
        size: 'large',
        actions: [
          {
            name: this.t('yes'),
          },
          {
            name: this.t('not'),
          },
          {
            name: this.t('confirm'),
          },
        ],
      }).then(item => {
        console.log(`your answer is ${item.name}`);
      });
    },
    onClickDialogTitle() {
      this.$dialog({
        title: this.t('title'),
        message: this.t('text'),
        size: 'large',
        actions: [
          {
            name: this.t('yes'),
          },
          {
            name: this.t('not'),
          },
          {
            name: this.t('confirm'),
          },
        ],
      }).then(item => {
        console.log(`your answer is ${item.name}`);
      });
    },
    onClickCustomNoTitle() {
      this.show = true;
    },
    onClickCustom() {
      this.showTwo = true;
    },
    onClickCustomMore() {
      this.showThree = true;
    },
    changeSize(val) {
      this.currentSize = val;
    },
  },
};
</script>
<style lang="less">
@import '../../../style/common';
.margin-t-16 {
  margin-top: 16px;
}
.custom-body {
  padding: 16px 32px 32px 32px;
}
.custom-footer {
  .byted-button {
    // color: @primary-color;
  }
  .byted-button--plain.byted-button--default::after {
    // border-color: #ebedf0;
  }
}
.demo.messageBox {
  .byted-button {
    margin-right: 10px;
  }
}
</style>
