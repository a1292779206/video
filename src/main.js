import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "./assets/css/base.css"
import "./assets/font/iconfont.css"
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.use(VideoPlayer)

// 手动安装rem 
// $cnpm i -S amfe-flexible
import Flexible from "amfe-flexible";
Vue.use(Flexible);

// import $ from 'jquery'
// Vue.use($)
// axios
import axios from "axios"
axios.defaults.baseURL = 'http://127.0.0.1:3000/';
Vue.prototype.$axios =axios;

// swiper
import "swiper/css/swiper.min.css"
import "swiper/js/swiper.min.js"

// 分类联动功能
// $cnpm install @better-scroll/core@next --save

// cnpm install animate.css --save
import "animate.css";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
