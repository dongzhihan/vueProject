<template>
  <div>
    <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 主菜单 </div>
    <div style="margin-top: 1rem"> </div>
    <x-button type="primary" @click.native="goTo('/index/productionOrder')" action-type="button">生产订单</x-button>
    <x-button type="primary" @click.native="goTo('/index/productionInput')" action-type="button">生产投入</x-button>
    <x-button type="primary" @click.native="goTo('/index/productionOutput')" action-type="button">生产产出</x-button>
    <x-button type="primary" @click.native="goTo('/index/storage')" action-type="button">采购入库</x-button>
    <x-button type="primary" @click.native="goTo('/index/finishedGoodsDelivery')" action-type="button">成品发货</x-button>
    <x-button type="primary" @click.native="goTo('/index/allocation')" action-type="button">调拨</x-button>

    <!--    <tabbar>
      <tabbar-item link="/index/allocation">

        <span slot="label">调拨</span>
      </tabbar-item>
      <tabbar-item link="/index/storage">

        <span slot="label">入库</span>
      </tabbar-item>
      <tabbar-item link="/index/finishedGoodsDelivery">

        <span slot="label">成品发货</span>
      </tabbar-item>
      <tabbar-item link="/index/productionOrder">

        <span slot="label">生产订单</span>
      </tabbar-item>-->
    <!--      <tabbar-item link="/index/productionOutput">

        <span slot="label">生产投入</span>
      </tabbar-item>
      <tabbar-item link="/index/productionOrder">

        <span slot="label">生产产出</span>
      </tabbar-item>-->
    <!--   </tabbar>-->
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
  import api from '../js/api.js'
  import {
    Tabbar,
    TabbarItem,
    XButton
  } from 'vux'
  export default {
    data() {
      return {

      }
    },
    components: {
      Tabbar,
      TabbarItem,
      XButton
    },
    methods: {
      goTo(path) {
        this.$router.push(path);
        this.$http.get('http://api.jirengu.com/weather.php?callback=getWeather', api.apiConfig()).then(function (data) {
        })
      }
    }
  }

</script>
