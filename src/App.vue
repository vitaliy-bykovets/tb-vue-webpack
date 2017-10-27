<template>
  <div id="app">
    <div class="content-wrapper">
      <app-header></app-header>
      <router-view></router-view>
      <hr-divider v-bind:type="'heart'"></hr-divider>
      <instagram-feed></instagram-feed>
      <app-footer></app-footer>
    </div>
    <to-top :class="{ 'is-show' : showTopBtn }"></to-top>
  </div>
</template>

<script>
  import AppHeader from './components/Header.vue';
  import AppFooter from './components/Footer.vue';
  import InstagramFeed from './components/InstagramFeed.vue';
  import ToTop from './components/ToTop.vue';
  import HrDivider from './components/HrDivider.vue';

  export default {
    name: 'app',
    components: {
      AppHeader,
      AppFooter,
      InstagramFeed,
      HrDivider,
      ToTop,
    },
    data: function() {
      return {
        showTopBtn: false,
        scrollTicking: false,
        lastScrollPos: 0,
        windowHeight: window.innerHeight,
      }
    },
    methods: {
      onScroll() {
        this.lastScrollPos = window.scrollY;
        this.requestTick();
      },

      requestTick() {
        if(!this.scrollTicking) {
          requestAnimationFrame(this.update);
        }
        this.scrollTicking = true;
      },

      update() {
        this.scrollTicking  = false;
        this.lastScrollPos > this.windowHeight - 200 ? this.showTopBtn = true : this.showTopBtn = false;
      }
    },
    created: function () {
      window.addEventListener('scroll', this.onScroll);
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.onScroll);
    }
  }
</script>
