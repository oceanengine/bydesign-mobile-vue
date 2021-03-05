import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import config, { NavsItem } from '../config';
import { RequireContext, ImportMap, importAll } from '../utils/index';

Vue.use(VueRouter);

function registerRoute(componentMap: ImportMap): RouteConfig[] {
  const route: RouteConfig[] = [
    {
      path: '/',
      redirect: '/zh-CN/intro',
    },
  ];

  function addRoute(nav: NavsItem, lang: string) {
    let { path } = nav;

    if (path) {
      path = path.replace('/', '');

      const module =
        componentMap[`./${path}/README.${lang}.md`] ||
        componentMap[`./${path}/README.md`] ||
        componentMap[`./${path}/README.${lang}.mdx`] ||
        componentMap[`./${path}/README.mdx`] ||
        componentMap[`./${path}.${lang}.md`] ||
        componentMap[`./${path}.${lang}.mdx`];

      // @ts-ignore
      const md = module ? module.default : null;

      if (md) {
        route.push({
          component: {
            render(createElement) {
              if (typeof md === 'string') {
                return createElement('div', {
                  class: 'by-docs-markdown',
                  domProps: {
                    innerHTML: md,
                  },
                });
              }
              return createElement(
                'div',
                {
                  class: 'by-docs-markdown',
                },
                [createElement(md)],
              );
            },
          },
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
const docsFromMarkdown: RequireContext = require.context(
  '../../markdown',
  false,
  /(\.en-US)?\.mdx?$/,
);
const docsFromPackages: RequireContext = require.context(
  '../../../src/components',
  true,
  /README(\.en-US)?\.mdx?$/,
);
importAll(docs, docsFromMarkdown);
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
