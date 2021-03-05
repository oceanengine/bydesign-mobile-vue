<template>
  <div slot="header" class="docs-header">
    <div class="docs-header__menus">
      <span class="docs-header__menu" @click="handleGotoHomePage">首页</span>
      <byted-dropdown
        v-for="item in menus"
        :key="item.value"
        @on-click="handleClick(item.value, $event)"
        class="docs-header__menu"
        size="md"
        transfer
      >
        {{ item.label }}
        <byted-dropdown-menu slot="list">
          <byted-dropdown-item
            v-for="option in item.list"
            :key="option.value"
            :name="option.value"
            >{{ option.label }}</byted-dropdown-item
          >
        </byted-dropdown-menu>
      </byted-dropdown>
    </div>
    <div class="docs-header__icons">
      <byted-dropdown
        v-for="item in icons"
        :key="item.value"
        @on-click="handleClick(item.value, $event)"
        class="docs-header__icon"
        size="md"
        transfer
      >
        <img :src="item.component" />
        <byted-dropdown-menu slot="list">
          <byted-dropdown-item
            v-for="option in item.list"
            :key="option.value"
            :name="option.value"
            >{{ option.label }}</byted-dropdown-item
          >
        </byted-dropdown-menu>
      </byted-dropdown>
    </div>
  </div>
</template>

<script>
import themeIcon from '../components/svg/theme.svg';
import langIcon from '../components/svg/i18n.svg';

const menus = [
  {
    value: 'component',
    label: '组件',
    list: [
      {
        value: 'vue',
        label: 'Vue',
      },
      {
        value: 'react',
        label: 'React',
      },
    ],
  },
  {
    value: 'version',
    label: '版本',
    list: [
      {
        value: 'default',
        label: '0.0.38',
      },
      {
        value: '0.0.37',
        label: '0.0.37',
      },
    ],
  },
];
const icons = [
  {
    value: 'theme',
    component: themeIcon,
    list: [
      {
        value: 'aweme',
        label: '抖音',
      },
      {
        value: 'default',
        label: '默认',
      },
    ],
  },
  {
    value: 'lang',
    component: langIcon,
    list: [
      {
        value: 'zh',
        label: '中文',
      },
      {
        value: 'en',
        label: '英文',
      },
    ],
  },
];

export default {
  data() {
    return {
      menus,
      icons,
    };
  },
  methods: {
    handleClick(itemValue, value) {
      this.$emit('menu-click', itemValue, value);
    },
    handleGotoHomePage() {
      window.location.href = '/';
    },
  },
};
</script>

<style></style>
