<template>
  <div>
    <router-view></router-view>
    <tabbar>
      <tabbar-item link="/index/allocation">

        <span slot="label">调拨</span>
      </tabbar-item>
      <tabbar-item link="/index/storage">

        <span slot="label">入库</span>
      </tabbar-item>
      <tabbar-item link="/index/finishedGoodsDelivery">

        <span slot="label">成品发货</span>
      </tabbar-item>
      <tabbar-item link="/index/productionInput">

        <span slot="label">生产订单</span>
      </tabbar-item>
<!--      <tabbar-item link="/index/productionOutput">

        <span slot="label">生产投入</span>
      </tabbar-item>
      <tabbar-item link="/index/productionOrder">

        <span slot="label">生产产出</span>
      </tabbar-item>-->
    </tabbar>
<!--    <mt-tabbar v-model="selected">
  <mt-tab-item @click.native="goTo('/index/allocation')" id="tab1">
    
    调拨
  </mt-tab-item>
  <mt-tab-item @click.native="goTo('/index/storage')" id="tab2">
 
    入库
  </mt-tab-item>
  <mt-tab-item @click.native="goTo('/index/finishedGoodsDelivery')" id="tab3">
 
    成品发货
  </mt-tab-item>
  <mt-tab-item @click.native="goTo('/index/productionOrder')" id="tab4">
    
    生产订单
  </mt-tab-item>
    <mt-tab-item @click.native="goTo('/index/productionInput')" id="tab5">
    
    生产投入
  </mt-tab-item>
    <mt-tab-item @click.native="goTo('/index/productionOutput')" id="tab6">
    
    生产产出
  </mt-tab-item>
</mt-tabbar>-->

  </div>
</template>
<style>


</style>
<script>
  import {
    Tabbar,
    TabbarItem
  } from 'vux'
  export default {
    data() {
      return {

      }
    },
    components: {
      Tabbar,
      TabbarItem
    },
    methods: {
      goTo(path)
      {
               this.$router.push(path)
      }
    }
  }

</script>
