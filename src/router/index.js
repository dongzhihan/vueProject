import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login.vue'
import index from '@/components/index.vue'
import storage from '@/components/pages/storage.vue'
import productionOutput from '@/components/pages/productionOutput.vue'
import finishedGoodsDelivery from '@/components/pages/finishedGoodsDelivery.vue'
import produtionStorage from '@/components/pages/produtionStorage.vue'
import allocation from '@/components/pages/allocation.vue'
import storageLocation from '@/components/pages/storageLocation.vue'
import seleter from '@/components/pages/seleter.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index

    },
    {
      path: '/index/storage',
      name: 'indexStorage',
      component: storage
    },    
    {
      path: '/index/productionOutput',
      name: 'indexProductionOutput',
      component: productionOutput
    },
    {
      path: '/index/produtionStorage',
      name: 'indexprodutionStorage',
      component: produtionStorage
    },
    {
      path: '/index/finishedGoodsDelivery',
      name: 'indexFinishedGoodsDelivery',
      component: finishedGoodsDelivery
    },
    {
      path: '/index/allocation',
      name: 'allocation',
      component: allocation
    }
    ,
    {
      path: '/index/storageLocation',
      name: 'storageLocation',
      component: storageLocation
    }
  
  ]
})
