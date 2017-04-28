<template>
  <div>
    <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 主菜单 </div>
    <div style="margin-top: 1rem"> </div>
    <x-button type="primary" @click.native="goTo('productionOutput')" action-type="button">完检</x-button>
    <x-button type="primary" @click.native="goTo('produtionStorage')" action-type="button">生产入库</x-button>
    <x-button type="primary" @click.native="goTo('storage')" action-type="button">采购入库</x-button>
    <x-button type="primary" @click.native="goTo('finishedGoodsDelivery')" action-type="button">成品发货</x-button>
    <x-button type="primary" @click.native="goTo('allocation')" action-type="button">调拨</x-button>
    <x-button type="primary" @click.native="goTo('storageLocation')" action-type="button">储位盘点</x-button>
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
        let data = {
          pagename: path,
          password: sessionStorage["userName"]
        }
        this.$http.post(api.xxx, data, api.config).then((data) => {
          if (data.data.Errcode == 0) {
            this.$router.push(`/index/${path}`);
          }
        })
      }
    }
  }

</script>
