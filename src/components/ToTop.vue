<template>
  <div class="to-top">
    <a href="#"
       @click="scrollToTop($event, 400)">Top</a>
  </div>
</template>

<script>
  export default {
    name: 'ToTop',
    methods: {
      scrollToTop(e, scrollDuration) {
        e.preventDefault();

        let cosParameter = window.scrollY / 2,
            scrollCount = 0,
            oldTimestamp = performance.now();

        function step (newTimestamp) {
          // ease-in-out function
          scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
          if (scrollCount >= Math.PI) window.scrollTo(0, 0);
          if (window.scrollY === 0) return;
          window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
          oldTimestamp = newTimestamp;

          // next runs
          window.requestAnimationFrame(step);
        }

        // for first run
        window.requestAnimationFrame(step);
      }
    }
  }
</script>
