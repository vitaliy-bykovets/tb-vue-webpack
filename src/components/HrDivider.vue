<template>
  <div class="hr-divider" :class=" 'hr-divider--' + type">
    <span class="hr-divider__marker"></span>
  </div>
</template>

<script>
  export default {
    name: 'HrDivider',
    props: ['type'],
  }
</script>