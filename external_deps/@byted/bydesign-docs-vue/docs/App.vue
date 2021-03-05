<template>
  <by-doc :config="config">
    <template slot="header">
    </template>
    <template slot="right">
      right
    </template>
    <template slot="ad">
      this is ad
    </template>
    <markdown/>
  </by-doc>
</template>

<script>
import config from './config'
import markdown from './markdown'

export default {
  components: {
    markdown
  },
  data() {
    return {
      config
    }
  }
};
</script>

