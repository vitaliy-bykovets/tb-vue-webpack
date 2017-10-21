<template>
  <main class="container">
    <hero></hero>
    <filters v-bind:activeWeight="activeWeight"
             v-on:filter="filterProducts($event)"
             v-on:changeWeight="changeWeight($event)"></filters>
    <product-list v-bind:items="filteredProducts"></product-list>
  </main>
</template>

<script>
  // Store
  import { mapMutations } from 'vuex';
  import { FETCH_PRODUCTS } from '@/store/actions';

  // Components
  import ProductList from './ProductList.vue';
  import Filters from './Filters.vue';
  import Hero from './Hero.vue';

  export default {
    name: 'home',
    beforeMount() {
      this.$store.dispatch(FETCH_PRODUCTS);
    },
    computed: {
      filteredProducts() {
        let filteredProducts,
            products = this.$store.state.productStore.products;

        switch (this.query) {
          case 'price_down':
            filteredProducts = products.sort((item, itemNext) => item.price - itemNext.price);
            break;
          case 'price_up':
            filteredProducts = products.sort((item, itemNext) => itemNext.price - item.price);
            break;
          case 'newest':
            filteredProducts = products.sort((item, itemNext) => new Date(item.added).getTime() - new Date(itemNext.added).getTime());
            break;
          case 'oldest':
            filteredProducts = products.sort((item, itemNext) => new Date(itemNext.added).getTime() - new Date(item.added).getTime());
            break;
          case 'popular':
            filteredProducts = products.sort((item, itemNext) => itemNext.popularity - item.popularity);
            break;
          default:
            filteredProducts = products.filter(item => item.name.toLowerCase().includes(this.query.toLowerCase()));
        }
        return filteredProducts;
      },
      activeWeight() {
        return this.$store.state.appStore.activeWeight;
      }
    },
    data: function() {
      return {
        query: '',
      }
    },
    methods: {
      filterProducts(query) {
        this.query = query;
      },
      ...mapMutations({
        changeWeight: 'setActiveWeight' // map `this.add()` to `this.$store.commit('increment')`
      })
    },
    components: {
      ProductList,
      Filters,
      Hero,
    }
  };
</script>
