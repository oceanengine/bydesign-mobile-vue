<template>
  <div class="demo badge">
    <byted-header fixed @click-left="goBack">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>
    <demo-title :title="t('name')" style="padding-left: 0.8rem">
      <byted-icon-badge theme="outline" size="20" fill="#333" />
    </demo-title>
    <demo-cell :title="t('basicUsage')" :title-style="{ 'padding-left': '0.8rem' }">
      <byted-collapse v-model="activeNamesDot" :border="false">
        <byted-collapse-item>
          <div slot="title">
            <byted-badge :value="8">
              <span>标题</span>
            </byted-badge>
          </div>
          <div slot="right-icon" class="right-slot">
            <byted-badge is-dot />
            <byted-icon name="right" size="18" fill="#999" />
          </div>
          <!-- <p class="collapse-slot">content slot</p> -->
        </byted-collapse-item>
        <!-- </byted-collapse>
      <byted-collapse v-model="activeNames" :border="false"> -->
        <byted-collapse-item>
          <div slot="title">
            <byted-badge :value="8">
              <span>标题</span>
            </byted-badge>
          </div>
          <div slot="right-icon" class="right-slot">
            <byted-badge :value="2" />
            <byted-icon name="right" size="18" fill="#999" />
          </div>
          <!-- <p class="collapse-slot">content slot</p> -->
        </byted-collapse-item>
      </byted-collapse>
    </demo-cell>

    <!-- <demo-cell :title="t('maxValue')">
      <byted-badge
        :value="100"
        :max="99"
      >
        <byted-button
          type="danger"
          :text="t('message')"
        />
      </byted-badge>
    </demo-cell> -->
  </div>
</template>
<script>
import { BytedIconBadge } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '徽标',
      message: '消息',
      basicUsage: '默认样式',
      maxValue: '设置最大值',
      spot: '小红点',
    },
    'en-US': {
      name: 'Badge',
      message: 'Message',
      basicUsage: 'Basic Usage',
      maxValue: 'Max Value',
      spot: 'Red Spot',
    },
  },
  components: {
    demoTitle,
    demoCell,
    BytedIconBadge,
  },
  data() {
    return {
      activeNames: [],
      activeNamesDot: [],
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>
<style lang="less">
.demo.badge {
  padding: 0;
  .byted-badge {
    margin-right: 8px;
  }
  .right-slot {
    display: flex;
    align-items: center;
  }
  .collapse-slot {
    padding: 12px;
    margin: 0;
  }
}
</style>
