import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import vip from "./vip"
import paymentList from "./paymentList"

export default new Vuex.Store({
  state: {
    vanTabbar: true,  // 底部栏控制
    username:""
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
    vip,
    paymentList,
  }
})
