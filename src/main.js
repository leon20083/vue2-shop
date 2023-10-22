import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import store from "./store";
import router from "./router/router";
import "./assets/styles/style.sass";

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
