<template>
  <div id="app">
    <vHeader />
    <vMainWrapper />
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper.vue';
import vHeader from './components/v-header.vue';
export default {
  name: 'App',
  components: {
    vMainWrapper,
    vHeader
  }
}
</script>

<style lang="sass">

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

</style>
