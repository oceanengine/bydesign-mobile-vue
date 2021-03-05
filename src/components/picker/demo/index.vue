<template>
  <div class="demo picker">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>
    <demo-title :title="t('name')" style="padding-left: 16px" />

    <demo-cell :title="t('basicUsage')" :title-style="titleStyle">
      <byted-picker
        :value="value0"
        :options="options0"
        :title="t('title')"
        @cancel="cancel"
        @change="onchange0"
      />
    </demo-cell>

    <demo-cell :title="t('multipleColumns')" :title-style="titleStyle">
      <byted-picker
        v-model="value1"
        :options="[options0, options1]"
        :title="t('title')"
        @change="onchange1"
      />
    </demo-cell>
    <demo-cell :title="t('cascade')" :title-style="titleStyle">
      <byted-picker :value="value2" :options="options2" :title="t('title')" @change="onchange2" />
    </demo-cell>

    <demo-cell :title="t('noTitle')" :title-style="titleStyle">
      <byted-picker v-model="value1" :options="[options0, options1]" @change="onchange1" />
    </demo-cell>

    <demo-cell :title="t('popup')" :title-style="titleStyle">
      <byted-cell
        :title="t('area')"
        :value="t('choose')"
        :border="false"
        is-link
        @click="show = !show"
      />
      <byted-popup v-model="show" position="bottom">
        <byted-picker
          v-model="value3"
          :title="t('area')"
          :options="options2"
          @cancel="show = !show"
          @confirm="confirm"
        />
      </byted-popup>
    </demo-cell>
  </div>
</template>
<script>
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '选择器',
      title: '标题',
      basicUsage: '基础用法',
      single: '单列用法',
      multipleColumns: '多列选择',
      cascade: '级联选择',
      popup: '搭配弹层使用',
      area: '地区',
      choose: '设置',
      noTitle: '无标题样式',
    },
    'en-US': {
      name: 'picker',
      title: 'title',
      basicUsage: 'BasicUsage',
      multipleColumns: 'Multiple Columns',
      cascade: 'Cascade',
      popup: 'With Popup',
      area: 'Area',
      choose: 'Choose',
    },
  },
  components: {
    demoCell,
    demoTitle,
  },
  data() {
    return {
      titleStyle: {
        'padding-left': '16px',
      },
      show: false,
      value0: 2,
      value1: [1, 1],
      value2: ['0', '00', '000'],
      value3: ['0', '00', '000'],
      options0: [
        {
          label: '选项一',
          value: '选项一',
        },
        {
          label: '选项二',
          value: '选项二',
        },
        {
          label: '选项三',
          value: '选项三',
        },
        {
          label: '选项四',
          value: '选项四',
        },
        {
          label: '选项五',
          value: '选项五',
        },
        {
          label: '选项六',
          value: '选项六',
        },
      ],
      options1: [
        {
          label: '选项一',
          value: '选项一',
        },
        {
          label: '选项二',
          value: '选项二',
        },
        {
          label: '选项三',
          value: '选项三',
        },
        {
          label: '选项四',
          value: '选项四',
        },
        {
          label: '选项五',
          value: '选项五',
        },
        {
          label: '选项六',
          value: '选项六',
        },
      ],
      options2: [
        {
          label: '北京',
          value: '0',
          children: [
            {
              label: '海淀',
              value: '00',
              children: [
                {
                  label: '中关村',
                  value: '000',
                },
                {
                  label: '双榆树',
                  value: '001',
                },
              ],
            },
            {
              label: '朝阳',
              value: '02',
              children: [
                {
                  label: '大悦城',
                  value: '020',
                },
              ],
            },
          ],
        },
        {
          label: '上海',
          value: '1',
          children: [
            {
              label: '虹桥',
              value: '10',
              children: [
                {
                  label: '机场',
                  value: '100',
                },
                {
                  label: '广场',
                  value: '101',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    cancel(v) {
      console.log(v);
    },
    onchange0(v) {
      this.value0 = v;
      this.$toast(v);
    },
    onchange1(v) {
      console.log(this.value1);
    },
    onchange2(v) {
      this.value2 = v;
      console.log(v);
    },
    confirm() {
      this.show = !this.show;
      this.$toast(`the value : ${JSON.stringify(this.value3)}`);
    },
  },
};
</script>
