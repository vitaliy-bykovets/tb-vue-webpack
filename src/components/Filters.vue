<template>
  <div class="filters">

    <!-- Amount -->
    <div class="filters__box flex flex--center">
      <div class="radio"
           v-for="(amountType, index) in weightFilters">
        <input type="radio"
               name="wight"
               :id="'weight-' + index"
               :checked="activeWeight.value === amountType.value"
               @change="changeWeight(amountType)">
        <label :for="'weight-' + index">{{ amountType.name }}</label>
      </div>
    </div>

    <!-- Search -->
    <div class="filters__box">
      <input class="text-field" type="text" placeholder="Пошук..." @input="changeFilter($event.target.value)">
    </div>

    <!-- Sort -->
    <div class="filters__box">
      <div class="select"
           :class="{ 'is-open': sortIsOpen }">
        <button class="select__active-item"
                v-on:click="toggleSortingDropdown()">
          <span>Сортування</span>
          <i class="icon icon-arrow-down"></i>
          <i class="icon icon-arrow-up"></i>
        </button>
        <ul class="select__list">
          <li class="select__list-item"
              v-for="sort in sortFilters"
              :class="{ 'is-active' : sort.value === activeSortType }"
              v-bind:key="sort.value"
              v-on:click="changeFilter(sort.value)">
            {{ sort.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import CONSTANTS from '@/constants';

  export default {
    name: 'Filters',
    props: ['activeWeight'],
    data: function () {
      return {
        sortFilters: CONSTANTS.SORT_FILTERS,
        sortIsOpen: false,
        weightFilters: CONSTANTS.WEIGHT_FILTERS,
        query: '',
        activeSortType: 'newest'
      }
    },
    methods: {
      changeFilter(query) {
        let activeSort = this.sortFilters.find(item => item.value === query);
        if (activeSort) this.activeSortType = activeSort.value;
        this.$emit('filter', query);
      },
      changeWeight(weight) {
        this.$emit('changeWeight', weight);
      },
      toggleSortingDropdown() {
        this.sortIsOpen = !this.sortIsOpen;
      }
    }
  }
</script>
