import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import paymentInterface from "./paymentInterface"
import publics from "./public"
import homepage from "./homepage"
import search from "./search"
import smallvideo from "./smallvideo"
import vip from "./vip"
import doki from "./doki"
import personalcenter from "./personalcenter"
import autoplay from "./autoplay"
import payment from "./payment"


const routes = [
  {
    path:"/",
    redirect:"/advertpage"
  },
  ...publics,
  homepage,
  smallvideo,
  vip,
  doki,
  ...personalcenter,
  ...search,
  autoplay,
  ...paymentInterface,
  ...payment
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
