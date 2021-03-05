(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('@byted/byted-design/locale/ja', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.BUI.lang = global.BUI.lang || {}; 
    global.BUI.lang.ja = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    byted: {
      'locale': 'ja',
      'pagination': {
        goto: 'ジャンプ',
        pagesize: '記事/ページ',
        total: '計 {total} 件の記録',
        placeholder: '選択してください'
      },
      'select': {
        placeholder: '選択してください',
        filterPlaceholder: '入力してください',
        noDataText: '選択内容がありません',
        noMatchText: 'データなし',
        hasSelect: '選択済み{length} 項目'
      },
      'auto-complete': {
        placeholder: '選択してください',
        emptyTip: 'データがありません。',
        loadingTip: '読み込み中...',
        infiniteLoadingTip: '読み込み中...'
      },
      'cascader': {
        hasSelect: '選択済み{length} 項目',
        filterPlaceholder: '入力してください',
        noDataText: '選択内容がありません'
      },
      'modal': {
        okText: '確認',
        cancelText: 'キャンセル'
      },
      'menu': {
        selectAll: '全て選択'
      },
      'select-panel': {
        clearText: 'クリア',
        selectAll: '全て選択',
        title: '選択済み',
        emptyText: '選択されていません',
        firstLevel: 'レベル 1',
        level: '第{level}层级',
        noDataText: 'データがありません。'
      },
      'table': {
        noDataText: 'データがありません。'
      },
      'time-picker': {
        okText: '確認'
      },
      'data-picker-new': {
        'days': ['日', '月', '火', '水', '木', '金', '土'],
        'months': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        'pickers': ['次の7日間', '次の30日間', '過去7日間', '過去30日間'],
        'placeholder': {
          'date': '日付を選択してください',
          'dateRange': '日付を選択してください範囲'
        }
      },

      'data-picker': {
        'switchYear': '{year}年',
        'switchMonth': '{month}月',
        'days': ['日', '月', '火', '水', '木', '金', '土']
      },
      'date-picker': {
        'clearText': 'クリア',
        'okText': '確認',
        'days': ['日', '月', '火', '水', '木', '金', '土'],
        'months': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        'datePanelLabel': '[YYYY年] [M月]',
        'placeholder': '日付を選択してください',
        'startTime': '開始時間',
        'endTime': '終了時間'
      },
      'range-picker': {
        'placeholder': ['请选择开始时间', '请选择结束时间']
      },
      'color-picker': {
        'customColor': 'カスタムカラー',
        'okText': '確認',
        'clearText': 'クリアー'
      },
      'infinite-scroll': {
        loadingTip: '読み込み中...'
      },
      'schedule': {
        'selectedText': 'すでに選挙',
        'selectableText': '選挙できる',
        'weekText': '曜日/日付',
        'noDataText': 'スクロールして時間帯を選択することができます',
        'title': '選択済みの時間帯',
        'clearText': 'クリア',
        'days': ['月', '火', '水', '木', '金', '土', '日']
      }
    }
  };
  module.exports = exports['default'];
});