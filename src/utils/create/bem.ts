/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b('text', 'color') // 'button__text button__text--color'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['primary', 'large']) // 'button button--primary button--large'
 */

export type Mod = string | { [key: string]: any };
export type Mods = Mod | Mod[];

const ELEMENT = '__';
const MODS = '--';

function join(name: string, el?: string, symbol?: string): string {
  return el ? name + symbol + el : name;
}
function prefix(name: string, mods: Mods): Mods {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }
  if (Array.isArray(mods)) {
    return mods.map(item => prefix(name, item) as Mod);
  }
  const ret: Mods = {};
  if (mods) {
    Object.keys(mods).forEach(key => {
      ret[name + MODS + key] = mods[key];
    });
  }
  return ret;
}
export function createBEM(name: string) {
  return function (el?: Mods, mods?: Mods): Mods {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }
    el = join(name, el as string, ELEMENT);
    return mods ? [el, prefix(el, mods)] : el;
  };
}
