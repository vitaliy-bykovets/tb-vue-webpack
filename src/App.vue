<template>
  <div id="app">
    <div class="content-wrapper">
      <app-header></app-header>
      <router-view></router-view>
      <instagram-feed></instagram-feed>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/Header.vue';
  import AppFooter from './components/Footer.vue';
  import InstagramFeed from './components/InstagramFeed.vue'

  export default {
    name: 'app',
    components: {
      AppHeader,
      AppFooter,
      InstagramFeed,
    },
  }
</script>

<!--<style lang="scss" src="./assets/scss/main.scss"></style>-->
