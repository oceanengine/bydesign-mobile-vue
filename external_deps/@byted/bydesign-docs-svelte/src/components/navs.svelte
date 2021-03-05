<div class="by-docs-navs">
  <div class="by-docs-navs-box">
    <div class="by-docs-tree-box">
      {#if adId}
        <div id={adId} class="by-docs-ad"></div>
      {/if}
      <NavsTree list={navs}/>
      <div class="by-docs-tree-box-block"></div>
    </div>
  </div>
</div>

<script>
  import './navs.less'
  import NavsTree from './navs-tree.svelte'

  export let navs = []
  export let adId
</script>