<template>
  <div class="header">
    <vMenu />
  </div>
</template>

<script>
import vMenu from './v-menu.vue';
export default {
  name: 'v-header',
  components: {
    vMenu
  }
}
</script>

<style lang="sass">
.header
  display: flex
  width: 100%
  height: 200px
  background: url("../assets/images/head-fon-min.jpg") no-repeat center center
  background-size: cover
</style>