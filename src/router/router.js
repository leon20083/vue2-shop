import Vue from "vue";
import VueRouter from "vue-router";

import vCatalog from "../components/v-catalog";
// import vHolodilniki from "../components/v-holodilniki";
import vCart from "../components/v-cart";
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: "/catalog",
      name: "catalog",
      component: vCatalog,
    },
    // {
    //   path: "/holodilniki",
    //   name: "Холодильники",
    //   component: vHolodilniki,
    // },
    {
      path: "/cart",
      name: "cart",
      component: vCart,
      props: true,
    },
  ],
});

export default router;
