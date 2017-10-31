<template>
  <footer class="footer">
    <div class="container">
      <p class="copyright">&copy; {{ getCurrentYear() }} Black Kitty</p>
    </div>
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
