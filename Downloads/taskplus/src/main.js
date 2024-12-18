import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin)
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router, 
  render: (h) => h(App),
}).$mount("#app");
