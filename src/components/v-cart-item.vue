<template>
  <div class="v-cart-item">
    <img :src="cart_item_data.image" alt="">
    <div class="v-cart-item__info">
      <h4>{{ cart_item_data.name }}</h4>
      <p>код: {{ cart_item_data.art }}</p>
      <p class="price">Цена: {{ cart_item_data.price }}.00 руб.</p>
    </div>
    <div class="v-cart-item__quantity">
      Количество : {{ cart_item_data.quantity }}
    </div>
    <button class="btn" type="submit" @click="dellToCart">Удалить из корзины</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    dellToCart() {
      this.$emit('dellToCart')
    }
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  }
}
</script>

<style lang="sass" scoped>
.v-cart-item
  display: flex
  flex-wrap: nowrap
  justify-content: space-between
  align-items: center
  img
    width: 15%
    height: 150px
  .v-cart-item__info
    text-align: left
  .v-cart-item__quantity
    margin-right: 10px

</style>