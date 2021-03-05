import { ConfigType, GatherItem } from './getConfig'

export default function getValue (config: ConfigType, value: string): string {
  const { data } = config
  if (data.length === 1 && data[0].value === value) {
    return `var(--${data[0].key})`
  }

  const arr = value.split(' ')
  data.forEach((config: GatherItem) => {
    arr[config.index] = arr[config.index].replace(
      config.value, 
      `var(--${config.key})`
    )
  })
  return arr.join(' ')
}
