<template>
  <div class="v-catalog-item">
    <div class="img-wrapper">
      <img :src="product_data.image" alt="">
    </div>
    <h4>{{ product_data.name }}</h4>
    <p>Art: {{ product_data.art }}</p>
    <p class="price">Цена: {{ product_data.price }}.00 руб.</p>
    <button class="btn" type="submit" @click="addToCart">Добавить в корзину</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  data() {
    return {
    }
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    },
    index: {
      type: Number,
      default() {
        return null
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data)
    },
  }
}
</script>

<style lang="sass">
.v-catalog-item
  flex-basis: 25%
  box-shadow: 0 0 8px 0
  padding: 16px
  margin-bottom: 16px
  background: rgba(100, 149, 237, 0.15)
  h4
    height: 50px
    padding: 19px 0 0
  .img-wrapper
    width: 80%
    height: 200px
    margin: 0 auto
    box-shadow: 0 0 8px 0
    background: #fff
    img
      background-size: cover
      max-width: 100%
      max-height: 100%
  p
    padding-bottom: 10px
</style>