<template>
  <div class="feed-list-container container">
    <h3>Слідкуйте за нами в Instagram</h3>
    <ul class="feed-list">
      <li class="feed-list__item" v-for="item in feedList" v-bind:key="item.id">
        <a :href="item.link" target="_blank" title="Відкрити в Instagram">
          <img :src="item.images.standard_resolution.url">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import jsonp from 'jsonp';
  import CONSTANTS from '@/constants';

  export default {
    name: 'InstagramFeed',
    data: function() {
      return {
        instagramCredentials: CONSTANTS.INSTAGRAM_CREDENTIALS,
        feedList: [],
      }
    },
    mounted () {
      jsonp(`https://api.instagram.com/v1/users/${this.instagramCredentials.profile_id}/media/recent?access_token=${this.instagramCredentials.token}&count=${this.instagramCredentials.count}`, null, (err, data) => {
        if (err) {
          throw err
        } else if (data.meta.code === 400) {
          this.error = data.meta
        } else if (data.meta.code === 200) {
          this.feedList = data.data
        }
      })
    }
  }
</script>
