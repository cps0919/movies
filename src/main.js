// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import "./commons/styl/index.styl"
import store from "./vuex/store"
import Vuelazyload from 'vue-lazyload'
Vue.use(Vuelazyload,{
  error:"../static/brand.png",
  loading:"../static/brand.png"
})
Vue.prototype.$axios=axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.push("/movie")
