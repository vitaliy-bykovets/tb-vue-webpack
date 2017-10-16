<template>
  <div id="app">
    <div class="content-wrapper">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/Header.vue';
  import AppFooter from './components/Footer.vue';

  export default {
    name: 'app',
    components: {
      AppHeader,
      AppFooter
    },
  }
</script>

<!--<style lang="scss" src="./assets/scss/main.scss"></style>-->