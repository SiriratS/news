<template>
  <AppHeader name="News" />
  <router-view/>
</template>

<script>
import AppHeader from './components/app-header/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
@import "App.scss";
</style>
