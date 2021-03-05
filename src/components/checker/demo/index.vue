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

    <demo-cell :title="t('basicUsage')">
      <byted-checker v-model="checker" :size="currentSize">
        <byted-row gutter="10">
          <byted-col span="8">
            <byted-checker-item label="0" :value="0" />
          </byted-col>
          <byted-col span="8">
            <byted-checker-item label="1" value="1" />
          </byted-col>
          <byted-col span="8">
            <byted-checker-item value="2"> 2 </byted-checker-item>
          </byted-col>
        </byted-row>
      </byted-checker>
    </demo-cell>

    <demo-cell :title="t('radioType')">
      <byted-checker v-model="checkerRadio" input-type="radio" :size="currentSize">
        <byted-row gutter="10">
          <byted-col span="8">
            <byted-checker-item label="0" :value="0" />
          </byted-col>
          <byted-col span="8">
            <byted-checker-item label="1" value="1" />
          </byted-col>
          <byted-col span="8">
            <byted-checker-item label="2" value="2" />
          </byted-col>
        </byted-row>
      </byted-checker>
    </demo-cell>

    <demo-cell :title="t('radioAsync')" :size="currentSize">
      <byted-checker
        :value="checkerAsync"
        input-type="radio"
        @click="onClick"
        @input="onInput"
        @change="changeSay"
      >
        <byted-row gutter="10">
          <byted-col span="8">
            <byted-checker-item label="0" :value="0" />
          </byted-col>
          <byted-col span="8">
            <byted-checker-item label="1" value="1" />
          </byted-col>
          <byted-col span="8">
            <byted-checker-item label="2" value="2" />
          </byted-col>
        </byted-row>
      </byted-checker>
    </demo-cell>

    <demo-cell :title="t('shapeType')" :size="currentSize">
      <byted-checker v-model="checkerRound" round>
        <byted-row gutter="10">
          <byted-col span="8">
            <byted-checker-item label="0" :value="0" />
          </byted-col>
          <byted-col span="8">
            <byted-checker-item label="1" value="1" />
          </byted-col>
          <byted-col span="8">
            <byted-checker-item label="2" value="2" />
          </byted-col>
        </byted-row>
      </byted-checker>
    </demo-cell>

    <demo-cell :title="t('basicStyle')" :size="currentSize">
      <byted-checker v-model="checkerStyle" input-type="radio" type="primary" round>
        <byted-row gutter="10">
          <byted-col span="8">
            <byted-checker-item label="0" :value="0" />
          </byted-col>
          <byted-col span="8">
            <byted-checker-item label="1" value="1" />
          </byted-col>
          <byted-col span="8">
            <byted-checker-item label="2" value="2" />
          </byted-col>
        </byted-row>
      </byted-checker>
    </demo-cell>

    <demo-cell :title="t('showInfo')" :size="currentSize">
      <byted-checker v-model="checkerInfo" input-type="radio" round>
        <byted-row gutter="10">
          <byted-col span="8">
            <byted-checker-item label="large" :value="0" info="ok" />
          </byted-col>
          <byted-col span="8">
            <byted-checker-item label="small" value="1" />
          </byted-col>
          <byted-col span="8">
            <byted-checker-item label="mini" value="2" :info="3" />
          </byted-col>
        </byted-row>
      </byted-checker>
    </demo-cell>
    <demo-cell :title="t('disabled')" :size="currentSize">
      <byted-checker v-model="checkerDisabled" input-type="radio" type="primary" round>
        <byted-row gutter="10">
          <byted-col span="8">
            <byted-checker-item label="0" :value="0" disabled />
          </byted-col>
          <byted-col span="8">
            <byted-checker-item label="1" value="1" disabled />
          </byted-col>
          <byted-col span="8">
            <byted-checker-item label="2" value="2" />
          </byted-col>
        </byted-row>
      </byted-checker>
    </demo-cell>

    <demo-size :current-size="currentSize" :sizes="sizes" @changeSize="changeSize" />
  </div>
</template>
<script>
import DemoSize from '../../../../docs/site/components/DomSize.vue';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '选择项',
      basicUsage: '基础用法',
      radioType: '单选类型',
      radioAsync: '单选异步',
      shapeType: '形状类型',
      basicStyle: '风格样式',
      showInfo: '显示信息',
      disabled: '禁用状态',
      // basicSize: '尺寸大小',
    },
    'en-US': {
      name: 'Checker',
      basicUsage: 'Basic Usage',
      radioType: 'Radio Type',
      radioAsync: 'Radio Async',
      shapeType: 'Shape Type',
      basicStyle: 'Style Type',
      showInfo: 'Show Info',
      disabled: 'Disabled Status',
      // basicSize: 'Size',
    },
  },
  components: {
    demoCell,
    demoTitle,
    DemoSize,
  },
  data() {
    return {
      checker: [0, '2'],
      checkerRadio: 0,
      checkerAsync: 0,
      checkerRound: [0, '2'],
      checkerStyle: 0,
      checkerInfo: 0,
      checkerDisabled: 0,
      checkerSize: 0,
      checkerSizeSmall: 0,
      sizes: ['small', 'normal'],
      currentSize: 'normal',
    };
  },
  methods: {
    changeSize(val) {
      this.currentSize = val;
    },
    onClick(event) {
      console.log(event);
    },
    onInput(value) {
      console.log('event input', value);
      this.$confirm(`Do you want to choose ${value}？`)
        .then(() => {
          this.checkerAsync = value;
        })
        .catch(() => {
          //
        });
    },
    changeSay(value) {
      console.log('event change', value);
    },
  },
};
</script>

<style lang="less">
.demo {
  &.checker {
    min-height: 100vh;
    margin-bottom: 0;
    padding-bottom: 40px;
  }
  p {
    margin: 10px 0;
  }
}
</style>
