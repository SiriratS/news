<template>
  {{ name }} header
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    name: String
  }
}
</script>

<style lang="scss" scoped>
@import "app-header.scss";
</style>
