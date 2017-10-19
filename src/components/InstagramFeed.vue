<template>
  <vue-instagram :token="instagramCredentials.token"
                 :username="instagramCredentials.username"
                 :count="instagramCredentials.count">
    <template slot="basic" slot-scope="props">
      <li class="fancy-list"> {{ props.feed.link }} </li>
    </template>
    <template slot="error" slot-scope="props">
      <div class="fancy-alert"> {{ props.error.error_message }} </div>
    </template>
  </vue-instagram>
</template>

<script>
  import VueInstagram from 'vue-instagram';
  import CONSTANTS from '@/constants';

  export default {
    name: 'InstagramFeed',
    data: function() {
      return {
        instagramCredentials: CONSTANTS.INSTAGRAM_CREDENTIALS,
      }
    },
    components: {
      VueInstagram
    }
  }
</script>
