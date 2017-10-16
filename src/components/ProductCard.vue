<template>
  <div class="item" :class="{ 'is-open': isDescOpen }">
    <div class="item__img corner">
      <span class="item__badge star-badge">

      </span>
      <img v-if="item.image" :src="'../static/img/items/' + item.image" :alt="item.name">
      <img v-else :src="'../static/img/' + defaultItem.image" :alt="defaultItem.title">
      <div class="corner__box">
        <a class="corner__tip" href="#" @click="openDesc">
          <div class="corner__contents">
            <h3>{{ item.name }}</h3>
            <div>
              {{ item.description }}
            </div>
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
        <span class="item__measure">({{ weightAmount === 1000 ? '1кг' : weightAmount + 'г'}})</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CONSTANTS from '../constants';

  export default {
    name: 'ProductCard',
    props: ['item'],
    computed: {
      weightAmount() {
        return this.$store.state.appStore.activeWeight;
      },
      price() {
        return (this.item.price * this.$store.state.appStore.activeWeight / 1000).toFixed(2);
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