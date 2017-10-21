<template>
  <div id="app">
    <div class="content-wrapper">
      <app-header></app-header>
      <router-view></router-view>
      <instagram-feed></instagram-feed>
      <app-footer></app-footer>
    </div>
    <to-top></to-top>
  </div>
</template>

<script>
  import AppHeader from './components/Header.vue';
  import AppFooter from './components/Footer.vue';
  import InstagramFeed from './components/InstagramFeed.vue';
  import ToTop from './components/ToTop.vue';

  export default {
    name: 'app',
    components: {
      AppHeader,
      AppFooter,
      InstagramFeed,
      ToTop,
    },
  }
</script>
