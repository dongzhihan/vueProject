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
      }
    }
  }

</script>
