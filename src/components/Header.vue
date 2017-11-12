<style>
  .logo-lines {
    stroke: #000;
    stroke-linejoin: round;
    stroke-width: 2px;
    fill-rule: evenodd;
  }
</style>
<template>
  <header class="header container">
    <h1 class="logo">
      <a class="logo__link" href="/" title="Black Kitty">
        <span class="logo__text">Black</span>
        <span class="logo__img">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397 397" preserveAspectRatio="xMidYMid">
            <path class="logo-lines logo__stroke" d="M22,12c-11,11,1,202,1,215,0,12.667,3,160,182,160,164,0,168-146.5,169-159s13-203,0-216-74.094,51.748-88,65c-12.143,11.571-164.358,11.642-176,0C97.679,64.679,33,1,22,12Zm8,15c-6,6,.833,174.667,5,209,3,34.333,22,140,169,140S360.99,242.927,362,236c3.5-24,9.27-201.76,3-208-6.383-6.352-59,52-71,59-6.489,3.785-44.932,8.939-96.018,8.935-43.161,0-90.471-5.261-95.982-8.935C92.513,80.675,36,21,30,27Z"/>
            <path class="logo-lines logo_nose" d="M198,275c8,0,25.835-32.212,20-39-6.239-7.258-34.5-6.5-40,0C171.5,243,187.5,274.5,198,275Z"/>
            <path class="logo-lines logo__mustache" d="M264,235l48-13s4-3,4-7-6-4-6-4l-47,14s-4,2-4,6S264,235,264,235Zm2,21,48,18s4,2,1,7c-2.074,3.457-5,2-5,2l-48-18s-6.205-3.339-3-8C261.75,253,266,256,266,256ZM91,283l46-18s5.893-3.069,5-7c-1.25-5.5-7-3-7-3L89,273a5.8,5.8,0,0,0-3,5C86,281.5,91,283,91,283Zm-3-61,46,14s7-1,8-4-4-7-4-7L91,212a4.245,4.245,0,0,0-6,3A5.7,5.7,0,0,0,88,222Z"/>
            <path class="logo-lines logo__ears" d="M310,99c0.5,6,28.5,20.5,33,18s12-54,4-54S309.5,93,310,99ZM49,63c-5.5,2.5.5,49.5,4,53s33-12,33-18S54.5,60.5,49,63Z"/>
          </svg>
        </span>
        <span class="logo__text">Kitty</span>
      </a>
    </h1>
    <div class="social-block">
      <div class="social-block__phone">
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
