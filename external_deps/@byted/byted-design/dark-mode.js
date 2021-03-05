
import {removeDom} from 'utils/dom.js';
import './less.new/dark.less';

const IS_BROWSER = typeof window !== 'undefined';
class DarkMode {
  constructor(config = {}) {
    this.style = null;
    this.active = config.active || false;
    this.autoMatchOsTheme = config.hasOwnProperty('autoMatchOsTheme') ? config.autoMatchOsTheme : false;
    this.preferedThemeOs = this.autoMatchOsTheme && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.attr = 'data-dark';
    this.DARK_CSS = 'DARK_THEME_CSS_REPLACE';
    this.id = 'bui-dark-mode-style';
    this.events = {};
    if (this.autoMatchOsTheme) {
      window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => e.matches && this.preferedThemeOsToggle());
      window.matchMedia('(prefers-color-scheme: light)').addListener((e) => e.matches && this.preferedThemeOsToggle());
    }
    // 初始化如果没有指定active，同时指定了autoMatchOsTheme为true，会讲系统主题赋值给active
    if (this.preferedThemeOs) {
      this.active = true;
    }
    if (this.active) {
      this.addStyle();
    }
  }
  addStyle() {
    if (this.style) {
      return;
    }
    document.body.setAttribute(this.attr, true);
    this.style = document.createElement('style');
    this.style.id = this.id;
    this.style.appendChild(document.createTextNode(this.DARK_CSS));
    document.head.appendChild(this.style);
  }
  removeStyle() {
    document.body.removeAttribute(this.attr);
    removeDom(this.style);
    this.style = null;
  }
  isActived() {
    return this.active;
  }
  toggle(active = !this.active) {
    this.active = !!active;
    if (active) {
      this.addStyle();
      return;
    }
    this.removeStyle();
  }
  preferedThemeOsToggle() {
    this.preferedThemeOs = this.autoMatchOsTheme && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.active = this.preferedThemeOs;
    this.toggle(this.active);
    this.emit('prefers-color-scheme-change', this.active);
  }
  on(name, handler) {
    this.events[name] = this.events[name] || [];
    this.events[name].push(handler);
    return this;
  }
  once(name, handler) {
    handler._once = true;
    this.on(name, handler);
    return this;
  }

  off(name, handler = false) {
    const pos = this.events[name].indexOf(handler);
    if (handler) {
      if (pos > -1) {
        this.events[name].splice(pos, 1);
      }
    } else {
      delete this.events[name];
    }
    return this;
  }

  emit(name, ...args) {
    const cache = this.events[name] && this.events[name].slice();
    if (cache) {
      cache.forEach((handler) => {
        if (handler._once) {
          this.off(name, handler);
        }
        handler.apply(this, args);
      });
    }
    return this;
  }
}
if (IS_BROWSER && window.BUI) {
  window.BUI.DarkMode = DarkMode;
}
module.exports = DarkMode;
