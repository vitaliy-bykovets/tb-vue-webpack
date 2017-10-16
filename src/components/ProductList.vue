<template>
  <div class="content">
    <product-card v-for="item in items" v-bind:key="item.name" v-bind:item="item"></product-card>
  </div>
</template>

<script>
  import ProductCard from './ProductCard.vue';

  export default {
    name: 'ProductList',
    props: ['items'],
    components: {
      ProductCard,
    }
  }
</script>