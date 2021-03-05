<template>
  <div class="demo">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>

    <demo-title :title="t('name')" style="padding-left: 16px">
      <byted-icon-module-time-picker theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('basicUsage')" :title-style="titleStyle">
      <byted-datetime-picker v-model="value" @change="onChange" />
    </demo-cell>

    <demo-cell :title="t('datetimeUsage')" :title-style="titleStyle">
      <byted-datetime-picker v-model="value1" type="datetime" @change="onChange" />
    </demo-cell>

    <demo-cell :title="t('timeUsage')" :title-style="titleStyle">
      <byted-datetime-picker v-model="value2" type="time" @change="onChange" />
    </demo-cell>

    <demo-cell :title="t('boundaryUsage')" :title-style="titleStyle">
      <byted-datetime-picker v-model="value3" :min-date="value4" @change="onChange" />
    </demo-cell>
    <demo-cell :title="t('popupUsage')" :title-style="titleStyle">
      <byted-cell :title="t('openPop')" :border="false" is-link @click="show = !show" />
      <byted-popup v-model="show" position="bottom">
        <byted-datetime-picker
          v-model="value"
          @change="onChange"
          @cancel="show = !show"
          @confirm="show = !show"
        />
      </byted-popup>
    </demo-cell>

    <!-- <div class="demo-cell">
      <h4>{{ t('timeUsage') }}</h4>
      <byted-datetime-picker v-model="value2" type="time" @change="onChange" />
      <h4>{{ t('boundaryUsage') }}</h4>
      <byted-datetime-picker v-model="value3" :min-date="value4" @change="onChange" />
      <h4>{{ t('popupUsage') }}</h4>
      <byted-cell :title="t('openPop')" :border="false" is-link @click="show = !show" />
      <byted-popup v-model="show" position="bottom">
        <byted-datetime-picker
          v-model="value"
          @change="onChange"
          @cancel="show = !show"
          @confirm="show = !show"
        />
      </byted-popup>
    </div> -->
  </div>
</template>
<script>
import { BytedIconModuleTimePicker } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '时间选择器',
      title: '标题',
      basicUsage: '年月日',
      datetimeUsage: '选择完整时间',
      timeUsage: '选择时间',
      boundaryUsage: '最大最小值使用',
      popupUsage: '搭配弹层使用',
      openPop: '选择时间',
    },
    'en-US': {
      name: 'datetimePicker',
      title: 'title',
      basicUsage: 'Date Usage',
      datetimeUsage: 'Datetime Usage',
      timeUsage: 'Time Usage',
      boundaryUsage: 'Boundary Usage',
      popupUsage: 'Popup Usage',
      openPop: 'Choose Time',
    },
  },
  components: {
    demoCell,
    demoTitle,
    BytedIconModuleTimePicker,
  },
  data() {
    return {
      titleStyle: {
        'padding-left': '16px',
      },
      value: new Date(),
      value1: new Date(),
      value2: '',
      value3: new Date(),
      value4: new Date(),
      show: false,
    };
  },
  created() {
    this.value3.setFullYear(1800);
  },
  methods: {
    onChange(val) {
      console.log(val);
    },
  },
};
</script>
<style lang="less" scoped>
.demo {
  padding: 0;
}
</style>
