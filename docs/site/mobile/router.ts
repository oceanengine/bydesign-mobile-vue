import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import config, { NavsItem } from '../config';
import { importAll, ImportMap, RequireContext } from '../utils';

import { Locale } from '../../../src/index';
import { camelize } from '../../../src/utils/format/string';

Vue.use(VueRouter);

function wrapComponentLocale(module: RequireContext, name: string) {
  // @ts-ignore
  const component = module.default;
  name = 'demo-' + name;
  component.name = name;

  const { i18n: config } = component;
  if (config) {
    const formattedI18n: any = {};
    const camelizedName = camelize(name);
    Object.keys(config).forEach(key => {
      formattedI18n[key] = { [camelizedName]: config[key] };
    });
    Locale.add(formattedI18n);
  }

  return component;
}

function registerRoute(componentMap: ImportMap): RouteConfig[] {
  const route: RouteConfig[] = [];

  function addRoute(nav: NavsItem, lang: string) {
    let { path } = nav;

    if (path) {
      path = path.replace('/', '');

      const module = componentMap[`./${path}/demo/index.vue`];
      const component = module ? wrapComponentLocale(module, path) : null;

      if (component) {
        route.push({
          component,
          name: lang + '/' + path,
          path: `/${lang}/${path}`,
          meta: {
            lang,
            path,
          },
        });
      }
    }
  }

  function findNav(nav: NavsItem, lang: string) {
    if (nav.list) {
      nav.list.forEach(item => findNav(item, lang));
    } else {
      addRoute(nav, lang);
    }
  }

  Object.keys(config).forEach(lang => {
    const navs = config[lang].navs || [];
    navs.forEach(nav => {
      findNav(nav, lang);
    });
  });

  return route;
}

const docs: ImportMap = {};
const docsFromPackages: RequireContext = require.context(
  '../../../src/components',
  true,
  /demo\/index\.vue$/,
);
importAll(docs, docsFromPackages);

const routes: RouteConfig[] = registerRoute(docs);

const router = new VueRouter({
  mode: 'hash',
  routes,
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
