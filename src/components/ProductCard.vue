<template>
  <div class="item" :class="{ 'is-open': isDescOpen }">
    <div class="item__img corner">
      <span v-if="item.new" class="item__badge star-badge">
        New
      </span>
      <img v-if="item.image" :src="'../static/img/items/' + item.image" :alt="item.name">
      <img v-else :src="'../static/img/' + defaultItem.image" :alt="defaultItem.title">
      <div class="corner__box">
        <a class="corner__tip" href="#" @click="openDesc">
          <div class="corner__contents">

          </div>
          <h3 class="contents__title">{{ item.name }}</h3>
          <div class="contents__desc">
          {{ item.description }}
          </div>
          <div class="composition">
          <p><strong>Склад:</strong></p>
          <p>{{ item.composition.join(', ') }}</p>
          </div>

        </a>
      </div>
    </div>
    <div class="item__desc">
      <div class="item__title">
        {{ item.name }}
      </div>
      <div>
        <span class="item__price">{{ price }}</span>
        <span class="item__measure">({{ activeWeight.name }})</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CONSTANTS from '@/constants';

  export default {
    name: 'ProductCard',
    props: ['item'],
    computed: {
      activeWeight() {
        return this.$store.state.appStore.activeWeight;
      },
      price() {
        return (this.item.price * this.$store.state.appStore.activeWeight.value / 1000).toFixed(2);
      },
    },
    data: function () {
      return {
        isDescOpen: false,
        defaultItem: CONSTANTS.DEFAULT_ITEM
      }
    },
    methods: {
      openDesc(event) {
        event.preventDefault();
        this.isDescOpen = !this.isDescOpen;
      }
    }
  }
</script>
