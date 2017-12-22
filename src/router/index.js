import Vue from 'vue'
import Router from 'vue-router'
import First from '@/pages/first/first.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: First
    }
  ]
})
