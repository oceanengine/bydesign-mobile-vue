<template>
  <div class="demo field">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>

    <demo-title :title="t('name')">
      <byted-icon-module-text-area theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('basicUsage')">
      <byted-field v-model="value1" :size="currentSize" />
    </demo-cell>
    <demo-cell :title="t('textarea')">
      <div class="demo-field-content">
        <byted-field v-model="value3" type="textarea" :size="currentSize" />
      </div>
    </demo-cell>
    <!-- 无边框样式 -->
    <demo-cell :title="t('borderUsage')" style="margin: 0 -0.8rem" :title-style="titleStyle">
      <byted-field
        v-model="value2"
        :border="false"
        :label="t('title')"
        :unit="t('unit')"
        :size="currentSize"
        clearable
      />
      <byted-field
        v-model="value12"
        :border="false"
        :label="t('titleLong')"
        :unit="t('unit')"
        clearable
        :size="currentSize"
        label-block
      />
      <byted-field
        v-model="value13"
        :label="t('title')"
        :border="false"
        :maxlength="60"
        type="textarea"
        :size="currentSize"
      />
    </demo-cell>
    <!-- 标题单位用法 -->
    <demo-cell :title="t('labelUsage')">
      <div class="demo-field-content">
        <byted-field
          v-model="value12"
          :border="false"
          :label="t('title')"
          clearable
          :size="currentSize"
          label-block
        />
        <byted-field
          v-model="value12"
          :border="false"
          :label="t('title')"
          clearable
          :size="currentSize"
        />
        <byted-field
          v-model="value4"
          type="textarea"
          :label="t('title')"
          :size="currentSize"
          :unit="t('unit')"
          :maxlength="10"
        />

        <byted-field
          v-model="value4"
          :label="t('title')"
          :unit="t('unit')"
          style="margin-bottom: 10px"
          :size="currentSize"
        />
      </div>
    </demo-cell>
    <!-- 清除用法 -->
    <demo-cell :title="t('clearable')">
      <byted-field v-model="valueClearable" style="margin-bottom: 10px" clearable />
      <byted-field v-model="valueClearable" type="textarea" clearable :size="currentSize" />
    </demo-cell>
    <!-- 字数计算 -->
    <demo-cell :title="t('getLengthUsage')">
      <byted-field
        v-model="value65"
        :border="false"
        :minlength="2"
        :maxlength="11"
        :size="currentSize"
      />

      <!-- :get-length="val => val.length * 2" -->
    </demo-cell>
    <!-- 禁用用法 -->
    <demo-cell :title="t('disabledUsage')">
      <byted-field :value="'disabled'" :size="currentSize" disabled />
    </demo-cell>
    <!-- 错误用法 -->
    <demo-cell :title="t('errorUsage')">
      <byted-field v-model="value11" :error-text="t('errorText')" :size="currentSize" />
    </demo-cell>

    <!-- 插槽用法 -->
    <demo-cell :title="t('slot')">
      <byted-field
        v-model="valueSlotLabel"
        style="margin-bottom: 10px"
        clearable
        :size="currentSize"
      >
        <template v-slot:label>
          <!-- SlotLabel -->
          <byted-tag plain text="警告" type="warning" />
        </template>
      </byted-field>

      <!-- <byted-field
        v-model="valueSlotLength"
        :maxlength="12"
        type="textarea"
        clearable
        :size="currentSize"
      >
        <template v-slot:length="lengthSlotProps">
          len:{{ lengthSlotProps.length }} max:{{ lengthSlotProps.maxlength }}
        </template>
      </byted-field> -->
    </demo-cell>

    <!-- 显示字数配合 byte -->
    <!-- <demo-cell
      :title="t('wordLimitWithByte')"
      :title-style="titleStyle"
    >
      <byted-field
        v-model="value7"
        type="textarea"
        :maxlength="10"
        :byte="2"
        :size="currentSize"
      />
    </demo-cell> -->

    <dom-size :current-size="currentSize" :sizes="sizes" @changeSize="changeSize" />
  </div>
</template>
<script>
import { BytedIconModuleTextArea } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
import DomSize from '../../../../docs/site/components/DomSize.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '输入框',
      basicUsage: '基础用法',
      textarea: '输入域用法',
      borderUsage: '无边框类型',
      size: '尺寸大小',
      labelUsage: '标题单位用法',
      errorUsage: '错误提示',
      wordLimitWithByte: '显示字数配合 byte',
      disabledUsage: '禁用用法',
      getLengthUsage: '字数计算',
      errorText: '必填',
      title: '标题',
      titleLong: '标题太长单独一行显示',
      unit: '单位',
      clearable: '清除用法',
      slot: '插槽用法',
    },
    'en-US': {
      name: 'field',
      basicUsage: 'Basic Usage',
      textarea: 'Textarea',
      borderUsage: 'No Border Usage',
      size: 'Size',
      labelUsage: 'label/unit Usage',
      errorUsage: 'ErrorText Usage',
      wordLimitWithByte: 'Word Limit With Byte',
      disabledUsage: 'Disabled Usage',
      getLengthUsage: 'Length Calculation',
      errorText: 'i am error i am error i am error i am error i am error',
      title: 'title',
      titleLong: 'title is too long',
      unit: 'unit',
      clearable: 'Clearable',
      slot: 'Slots',
    },
  },
  components: {
    demoCell,
    DomSize,
    demoTitle,
    BytedIconModuleTextArea,
  },
  data() {
    return {
      sizes: ['normal', 'large'],
      currentSize: 'normal',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value65: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value12: '',
      value13: '',
      valueClearable: '内容',
      valueSlotLabel: 'some content',
      valueSlotLength: 'some content',
      titleStyle: {
        'padding-left': '0.8rem',
      },
    };
  },
  methods: {
    changeSize(val) {
      this.currentSize = val;
    },
  },
};
</script>
<style lang="less" scoped>
.demo.field {
  padding: 0 16px 100px 16px;
  .specail {
    margin: 0 -10px;
    h4 {
      padding: 0 10px;
    }
  }
  .demo-cell.size {
    .byted-field {
      margin-bottom: 10px;
    }
  }
  .demo-field-content {
    .byted-field {
      margin-bottom: 16px;
    }
    .byted-field:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
