import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login.vue'
import index from '@/components/index.vue'
import name from '@/components/pages/name.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    { path: '/index', name: 'index', component: index,
      children: [
           { path: '/name', name: 'indexName', component: name }
      ]
    }
  ]
})
