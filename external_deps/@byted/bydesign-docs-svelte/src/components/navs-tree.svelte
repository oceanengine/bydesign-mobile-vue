
{#each statusList as item, itemIndex}
  <div
    class={className}
    class:active={href && checkActiveWrapper(item)}
  >
    <div class={getLabelClassName(item)} on:click={linkTo(item, itemIndex)}>
      {#if href && checkActiveWrapper(item) && item.activeIcon }
        <img src={item.activeIcon} alt={item.label} />
      {:else if item.defaultIcon}
        <img src={item.defaultIcon} alt={item.label} />
      {/if}
      <div class="by-docs-tree-label__content">
        {item.label}
      </div>
    </div>
    {#if (item.anchors)}
      <div
        class="by-docs-tree-anchor-box"
        style={
          `height: ${item.path && (href.indexOf(item.path) > -1) ? `${item.anchors.length * 36}px` : '0px'}`
        }
      >
        {#each item.anchors as anchor, index}
            <div
              class="by-docs-tree-anchor"
              class:active={anchorIndex === index}
              on:click={scrollTo(anchor, index)}
            >
              {anchor.label}
            </div>
        {/each}
      </div>
    {/if}
    {#if (item.open && item.list && item.list.length)}
      <div class="by-docs-tree-list">
        <svelte:self
          level={++level}
          list={item.list}
          on:update={updateHref}
        />
      </div>
    {/if}
  </div>
{/each}

<script>
  import './navs-tree.less'
  import { getContext, createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher();

  export let level = 0;
  export let list = [];

  let statusList = list.map((item) => {
    return Object.assign({}, item, {
      open: true,
    });
  });

  const classNames = ['by-docs-tree', `level-${level}`]
  const className = classNames.join(' ')

  // active state
  let href = typeof window !== 'undefined' ? window.location.href : ''

  const updateHref = (event) => {
    href = event.detail.href;
    dispatch('update', {
      href: event.detail.href,
    })
  }

  window.addEventListener('popstate', function() {
    href = window.location.href
  })

  // context
  const config = getContext('config')

  // link
  const {onLinkTo} = config
  let anchorIndex = -1

  function linkTo (item, itemIndex) {
    anchorIndex = -1

    const path = item.path
    if (onLinkTo) {
      const callBackHref = onLinkTo(item)
      if (callBackHref) {
        href = callBackHref
        dispatch('update', {
          href: callBackHref,
        });
        return;
      }
    } else if (path !== undefined) {
      if (path.indexOf('http') > -1 || path.indexOf('https') > -1) {
        window.location.href = path
      } else {
        window.location.href = `${window.location.protocol}//${window.location.host}${window.location.pathname}#${item.path}`
      }
      return;
    }
    statusList = statusList.map((statusItem, index) => {
      if (itemIndex === index) {
        return Object.assign({}, statusItem, {
          open: !statusItem.open,
        });
      }
      return statusItem;
    });
  }

  // https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
  function scrollToTargetAdjusted(element, headerOffset = 80){
    var bodyPosition = document.body.getBoundingClientRect().top;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - bodyPosition - headerOffset;

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  }

  function scrollTo (anchor, index) {
    anchorIndex = index
    const dom = document.getElementById(anchor.id)
    dom && scrollToTargetAdjusted(dom);
  }

  function checkActiveWrapper(item) {
    if (level === 0) {
      return checkActive(item);
    }
    return item.path && (href.indexOf(item.path) > -1);
  }
  function checkActive(item) {
    if (Array.isArray(item)) {
      return item.some(checkActive);
    }
    if (item.path && (href.indexOf(item.path) > -1)) return true;
    if (item.list) {
      return checkActive(item.list);
    }
    return false;
  }


  function getLabelClassName(item) {
    const result = ['by-docs-tree-label'];
    if (!level && item.list && item.list.length) {
      result.push('by-docs-tree-label--collapse');
      if (item.open) {
        result.push('by-docs-tree-label--up');
      } else {
        result.push('by-docs-tree-label--down');
      }
    }
    return result.join(' ');
  }
</script>