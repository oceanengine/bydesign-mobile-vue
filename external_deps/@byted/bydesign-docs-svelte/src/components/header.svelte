<div class="by-docs-header">
  {#if logo}
    <div class="by-docs-logo">
      <img src={logo} alt="logo">
    </div>
  {/if}
  <div id={id}></div>
</div>

<script>
  import './header.less'
  export let id;
  export let logo;
</script>