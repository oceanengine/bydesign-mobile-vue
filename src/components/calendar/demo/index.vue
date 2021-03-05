<template>
  <div class="demo calendar">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>
    <demo-title :title="t('name')">
      <byted-icon-module-datepicker theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('basicUsage')">
      <div class="bui-doc-demo-block__card">
        <byted-cell :title="t('modeSingle')" is-link @click="showSingle = true">
          <span class="custom-value">{{
            valueSingle.length ? valueSingle[0].toLocaleDateString() : t('modeSingle')
          }}</span>
        </byted-cell>
        <byted-cell :title="t('modeRange')" is-link @click="showBasic = true">
          <span class="custom-value">
            {{
              valueRange.length
                ? `${formatDate(valueRange[0])} - ${formatDate(valueRange[1])}`
                : t('modeRange')
            }}</span
          >
        </byted-cell>
        <byted-cell :title="t('modeCustom')" is-link @click="showScopedSlots = true">
          <span class="custom-value">
            {{
              valueScopedSlots.length
                ? valueScopedSlots.length === 1
                  ? `${formatDate(valueScopedSlots[0])}`
                  : `${formatDate(valueScopedSlots[0])} - ${formatDate(valueScopedSlots[1])}`
                : t('modeRange')
            }}
          </span>
        </byted-cell>
      </div>

      <byted-popup v-model="showSingle" position="bottom">
        <byted-calendar
          v-model="valueSingle"
          mode="single"
          require-confirm
          @cancel="showSingle = false"
          @confirm="showSingle = false"
        />
      </byted-popup>

      <!-- 日期区间 -->
      <byted-popup v-model="showBasic" position="bottom">
        <byted-calendar v-model="valueRange" mode="range" @change="changeRange" />
      </byted-popup>

      <byted-popup v-model="showScopedSlots" position="bottom">
        <byted-calendar v-model="valueScopedSlots" mode="range">
          <template v-slot:bottomFloat="slotProps">
            <div class="demo-calendar-slot-bottom">
              <byted-row type="flex" justify="center">
                <byted-col span="8">
                  <byted-button type="default" @click="fastToday(slotProps)">
                    {{ t('today') }}
                  </byted-button>
                </byted-col>
                <byted-col span="8">
                  <byted-button type="default" @click="fastWeek">
                    {{ t('week') }}
                  </byted-button>
                </byted-col>
                <byted-col span="8">
                  <byted-button type="default" @click="fastMouth">
                    {{ t('money') }}
                  </byted-button>
                </byted-col>
              </byted-row>
            </div>
          </template>
        </byted-calendar>
      </byted-popup>
    </demo-cell>

    <!-- <div class="demo-cell">
      <h4>{{ t('basicUsage') }}</h4>
      <byted-button @click="showBasic = true">
        {{ valueRange.map(v => v.toLocaleDateString()).join(' - ') || t('noSelected') }}
      </byted-button>
      <byted-popup v-model="showBasic" position="bottom">
        <byted-calendar v-model="valueRange" mode="range" @change="showBasic = false" />
      </byted-popup>
    </div> -->

    <!-- <div class="demo-cell">
      <h4>{{ t('modeSingle') }}</h4>
      <byted-button @click="showSingle = true">
        {{ 
    <demo-cell :title="t('basicUsage')">
      <byted-button @click="showSingle = true" size="large" type="primary" plain>
        {{valueSingle.length ? valueSingle[0].toLocaleDateString() : '选择单个日期'}}
      </byted-button>
      <byted-popup v-model="showSingle" position="bottom">
        <byted-calendar
          v-model="valueSingle"
          mode="single"
          :min="min"
          :max="max"
          require-confirm
          @cancel="showSingle = false"
          @confirm="showSingle = false"
        />
      </byted-popup>
    </demo-cell>[0].toLocaleDateString() }}
      </byted-button>
      <byted-popup
        v-model="showSingle"
        position="bottom"
      >
        <byted-calendar
          v-model="valueSingle"
          mode="single"
          :min="min"
          :max="max"
          require-confirm
          @cancel="showSingle = false"
          @confirm="showSingle = false"
        />
      </byted-popup>
    </div> -->

    <!-- <div class="demo-cell">
      <h4>{{ t('modeMulti') }}</h4>
      <byted-button @click="showMulti = true">
        {{ valueMulti.map(v => v.toLocaleDateString()).join(', ') || t('noSelected') }}
      </byted-button>
      <byted-popup v-model="showMulti" position="bottom">
        <byted-calendar v-model="valueMulti" mode="multi" title="" :show-title-bar="false" />
      </byted-popup>
    </div> -->

    <!-- <div class="demo-cell">
      <h4>{{ t('modeRange') }}</h4>
      <byted-button @click="showRange = true">
        {{ valueRange.map(v => v.toLocaleDateString()).join(' - ') || t('noSelected') }}
      </byted-button>
      <byted-popup v-model="showRange" position="bottom">
        <byted-calendar
          v-model="valueRange"
          mode="range"
          :min="min"
          :max="max"
          require-confirm
          @cancel="showRange = false"
          @confirm="showRange = false"
        />
      </byted-popup>
    </div> -->

    <!-- <div class="demo-cell">
      <h4>{{ t('useSlots') }}</h4>
      <byted-button @click="showScopedSlots = true">
        {{ valueRange.map(v => v.toLocaleDateString()).join(' - ') || t('noSelected') }}
      </byted-button>
      <byted-popup v-model="showScopedSlots" position="bottom">
        <byted-calendar
          v-model="valueRange"
          mode="range"
          :min="min"
          :max="max"
          require-confirm
          @cancel="showScopedSlots = false"
          @confirm="showScopedSlots = false"
        >
          <template v-slot:headerRight="slotProps">
            <button class="demo-calendar-slot-button" @click="slotProps.setSelected([])">
              {{ t('clear') }}
            </button>
          </template>
          <template v-slot:bottomFloat="slotProps">
            <div class="demo-calendar-slot-bottom">
              <byted-row>
                <byted-col span="16">
                  <div>
                    {{ t('start') }}
                    {{ slotProps.selected[0] && slotProps.selected[0].toLocaleDateString() }}
                  </div>
                  <div>
                    {{ t('end') }}
                    {{ slotProps.selected[1] && slotProps.selected[1].toLocaleDateString() }}
                  </div>
                </byted-col>
                <byted-col span="8">
                  <div class="demo-calendar-slot-bottom-button-wrap">
                    <byted-button type="primary" size="mini" @click="slotProps.confirm">
                      {{ t('confirm') }}
                    </byted-button>
                  </div>
                </byted-col>
              </byted-row>
            </div>
          </template>
        </byted-calendar>
      </byted-popup>
    </div> -->
  </div>
</template>
<script>
import { BytedIconModuleDatepicker } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '日历',
      basicUsage: '基础用法',
      modeSingle: '选择单个日期',
      modeMulti: '模式：多选',
      modeRange: '选择日期区间',
      modeCustom: '快速选择区间',
      noSelected: '未选择',
      useSlots: '使用作用域插槽',
      start: '起',
      end: '止',
      clear: '清除',
      confirm: '确定',
      today: '今天',
      week: '七天',
      money: '一月',
    },
    'en-US': {
      name: 'Calendar',
      basicUsage: 'Basic Usage',
      modeSingle: 'Mode: Single Selection',
      modeMulti: 'Mode: Multi Selection',
      modeRange: 'Mode: Range Selection',
      noSelected: 'No Selected',
      useSlots: 'Use Scoped Slots',
      modeCustom: 'Use Scoped Slots',
      start: 'Start',
      end: 'End',
      clear: 'Clear',
      confirm: 'Confirm',
      today: 'today',
      week: 'week',
      money: 'money',
    },
  },

  components: {
    BytedIconModuleDatepicker,
    demoCell,
    demoTitle,
  },
  data() {
    const today = new Date();
    return {
      showBasic: false,

      showSingle: false,
      valueSingle: [],

      showMulti: false,
      valueMulti: [],

      showRange: false,
      valueRange: [],

      showScopedSlots: false,
      valueScopedSlots: [],

      min: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      max: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6),
    };
  },
  watch: {
    valueRange(value) {
      console.log(...value);
    },
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    changeRange(date) {
      this.showBasic = false;
    },
    fastToday() {
      this.valueScopedSlots = [new Date()];
      console.log(this.valueScopedSlots);
      this.showScopedSlots = false;
    },
    fastWeek() {
      let milliseconds = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
      this.showScopedSlots = false;
      this.valueScopedSlots = [new Date(), new Date(milliseconds)];
    },
    fastMouth() {
      let milliseconds = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
      this.showScopedSlots = false;
      this.valueScopedSlots = [new Date(), new Date(milliseconds)];
    },
  },
};
</script>

<style lang="less" scoped>
.demo-calendar-slot-button {
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
}
.demo-calendar-slot-bottom {
  background-color: #fff;
  box-shadow: 0px -3px 9px rgba(0, 0, 0, 0.06);
  .byted-col {
    text-align: center;
  }
}
.demo-calendar-slot-bottom-button-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: flex-end;
}
.margin-t-16 {
  margin-top: 16px;
}
.custom-value {
  white-space: nowrap;
}
</style>
