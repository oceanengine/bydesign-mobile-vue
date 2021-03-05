const regExpCheck = new RegExp('ByDesignVarMarkJson')
const regExpGet = new RegExp('{.*}')

export interface GatherItem {
  key: string;
  value: string;
  index: number;
}

export interface ConfigType {
  data: GatherItem[];
  statement: string;
}

export default function getConfig (text: string): null | ConfigType {
  if (regExpCheck.exec(text)) {
    try {
      const match = text.match(regExpGet)
      if (match !== null) {
        return JSON.parse(match[0])
      }
    } catch {
      console.warn('parse error' + text)
    }
  }
  return null
}