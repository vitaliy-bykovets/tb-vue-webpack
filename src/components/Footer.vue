<template>
  <footer class="footer container">
    <p class="copyright">&copy; {{ getCurrentYear() }} Tetiana Bykovets</p>
  </footer>
</template>

<script>
  export default {
    name: 'AppFooter',
    methods: {
      getCurrentYear() {
        return new Date().getFullYear();
      }
    }
  };
</script>

<style scoped>
</style>