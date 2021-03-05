import { VueConstructor } from 'vue';

export interface Locale {
  use(lang: string, message: any): void;
  install(V: VueConstructor): void;
  localeMixin: any
}

export const Locale: Locale;
