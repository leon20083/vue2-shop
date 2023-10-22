<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog__link_to_cart">Вернуться в каталог</div>
    </router-link>
    <vCartItem v-for="(item, index) in cart_data" :key="item.art" :cart_item_data="item"
      @dellToCart="deleteFromCart(index)" />
    <h4 v-if="!cart_data.length">Нет товаров в корзине</h4>
  </div>
</template>

<script>
import vCartItem from './v-cart-item.vue';
import { mapActions } from 'vuex';
export default {
  name: "v-cart",
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    vCartItem,
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    }
  }
}
</script>

<style lang="sass">
.v-cart
  width: 60%
  .v-cart-item
    margin: 30px 0
    padding-bottom: 20px
    box-shadow: 0 0 8px 0
    padding: 16px
    background: rgba(100, 149, 237, 0.15)

</style>