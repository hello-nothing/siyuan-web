import Vue from 'vue'
import Router from 'vue-router'
import webHome from '@/pages/webHome.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'webHome',
      component: webHome
    }
  ]
})
