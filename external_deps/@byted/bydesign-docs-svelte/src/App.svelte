<div class="by-docs">
  <Header
    id={headerSlotId}
    logo={config.logo}
  />
  <Navs navs={config.navs} adId={adSlotId} />
  <div class="by-docs-body">
    {#if (hasRight)}
      <div class="by-docs-body-content has-right">
        <div class="by-docs-body-center" id={defaultSlotId}></div>
        <Right id={rightSlotId}/>
      </div>
    {:else}
      <div class="by-docs-body-content" id={defaultSlotId}></div>
    {/if}
  </div>
</div>

<script>
  import './style/normalize.less'
  import './style/App.less'

  import { setContext } from 'svelte'
  import Header from './components/header.svelte'
  import Navs from './components/navs.svelte'
  import Right from './components/right.svelte'

  export let defaultSlotId
  export let headerSlotId
  export let rightSlotId
  export let adSlotId
  export let hasRight

  export let config

  setContext('config', config)
</script>
