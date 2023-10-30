<template>
  <div class="v-catalog">
    <h2 class="title">Холодильники</h2>
    <div class="container">
      <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
        <div class="v-catalog__link_to_cart">Корзина : {{ CART.length }}</div>
      </router-link>
      <vCatalogItem v-for="(product, index) in HOLODILNIKI.slice((quant - 1) * 36, 36 * quant)" :key="index"
        :product_data="product" :index="index" @addToCart="addToCart" />
    </div>
    <div class="numPages">
      <b>Страница: </b>
      <div v-for="(num, index) in quantity()" :key="index" class="page"><a @click="quantityIndex(index)">{{
        num }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "v-holodilniki",
  components: {
    vCatalogItem,
  },
  data() {
    return {
      quantityEl: 36, //Количество элементов массива на странице
      quant: 1,// Будущий Номер страницы
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    quantity() { // Функция вычисления солько будет страниц в этой категории
      let quantityPage = this.PRODUCTS.length //Получаем длинну массива
      let numPage = quantityPage / this.quantityEl; // делим длинну массива на количество елементов на странице
      return Math.ceil(numPage);
    },
    quantityIndex(index) {
      this.quant = index + 1;
      console.log(this.quant);
      return this.quant;
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('Data arrived')
        }
      })
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'HOLODILNIKI',
      'CART'
    ]),
  },
}
</script>

<style lang="sass">
.container
  width: 1170px
  margin: 0 auto
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  align-items: center
  gap: 30px
  width: 100%
.v-catalog
  h2
    text-align: center
    margin: 50px 0 70px
    font-size: 48px
  a
    position: absolute
    top: 10px
    right: 100px
    padding: 16px
    border-radius: 10px
    box-shadow: 0 0 8px 0 red
    color: #fff
    background: rgba(255, 0, 0, .5)
    font-weight: 700
    cursor: pointer
    text-decoration: none
  .numPages
    display: flex
    justify-content: center
    margin: 30px 0
    .page
      padding-left: 15px
      > a
          position: relative
          color: #000
          padding: 0
          margin: 0
          background: none
          box-shadow: none
          top: 0
          right: 0
          border-radius: 0
          padding: 0 7px
          text-decoration: underline

</style>
