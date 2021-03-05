import Vue from 'vue';
import ByDocs from '@byted/bydesign-docs-vue';

import BUI from '@byted/byted-design';

import Demo from '@bydesign-ui/mdx-vue2-provider/lib/components/demo';
import Card from '@bydesign-ui/mdx-vue2-provider/lib/components/card';
import Provider from '@bydesign-ui/mdx-vue2-provider';
import '@bydesign-ui/mdx-vue2-provider/lib/style/index.css';

import App from './App.vue';
import router from './router';
import { isMobile } from '../utils';

Vue.component('DemoBox', Demo);
Vue.component('CardBox', Card);

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

if (isMobile) {
  // @ts-ignore
  window.collectEvent('login', {
    type: 'mobile',
  });

  window.location.replace(`online.html${location.hash}`);
} else {
  // @ts-ignore
  window.collectEvent('login', {
    type: 'desktop',
  });
}

// @ts-ignore
Vue.use(ByDocs);

Vue.use(BUI);
new Vue({
  el: '#app',
  render(h) {
    return h(Provider, [h(App)]);
  },
  router,
});
