import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import First from '@/pages/first/first.vue'

Vue.use(VueAxios,axios)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: First
    }
  ]
})
