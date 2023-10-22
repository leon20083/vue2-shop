<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "v-main-wrapper",
  components: {
  },

}
</script>

<style lang="sass">
.v-main-wrapper
  display: flex
  justify-content: center
  flex-direction: column
  align-items: center
  margin: 0 auto
</style>