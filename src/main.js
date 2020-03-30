import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/icon.css";
//ui组件
// import Vue from 'vue';
import Vant from "vant";
import "vant/lib/index.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
// require styles
import "swiper/dist/css/swiper.css";
Vue.use(Vant);
Vue.use(VueAwesomeSwiper);
//分享功能
import Share from "vue-social-share";
import "../node_modules/social-share.js/dist/js/social-share.min.js";
import "..//node_modules/social-share.js/dist/css/share.min.css";

Vue.use(Share);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
