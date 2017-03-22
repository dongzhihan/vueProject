<template>
  <div>
             <router-view ></router-view>
    <tabbar>
      <tabbar-item link="/index/storage">

        <span slot="label" >入库</span>
      </tabbar-item>
      <tabbar-item link="/index/finishedGoodsDelivery">

        <span slot="label" >成品发货</span>
      </tabbar-item>
      <tabbar-item link="/index/productionInput">

        <span slot="label" >生产订单</span>
      </tabbar-item>
      <tabbar-item link="/index/productionOutput">

        <span slot="label" >生产投入</span>
      </tabbar-item>
      <tabbar-item link="/index/productionOrder">

        <span slot="label" >生产产出</span>
      </tabbar-item>
    </tabbar>

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
    }
  }

</script>
