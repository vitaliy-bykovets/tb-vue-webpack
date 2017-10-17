<template>
  <header class="header container">
    <h1 class="logo">
      <a class="logo__link" href="/" title="Black Kitty">
        <span class="logo__text">Black</span>
        <img class="logo__img" src="../assets/img/logo.svg">
        <span class="logo__text">Kitty</span>
      </a>
    </h1>
    <div class="social-block">
      <div>
        <i class="icon icon-phone" aria-hidden="true"></i>
        <a :href="'tel:' + contacts.phone" title="Замовити через телефон">{{ contacts.phone | toPhoneNumber}}</a>
      </div>
      <ul class="social-list">
        <li class="social-list__item" v-for="item in social">
          <a class="social-list__link"
             :href="item.url"
             :title="item.name"
             target="_blank">
            <i class="icon" :class="'icon-' + item.name" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  import CONSTANTS from '@/constants';

  export default {
    name: 'AppHeader',
    data: function() {
      return {
        social: CONSTANTS.SOCIAL_URLS,
        contacts: CONSTANTS.CONTACTS
      }
    }
  };
</script>

<style scoped>
</style>
