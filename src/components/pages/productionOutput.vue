<template>
  <div>
    <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 完检 </div>
    <group>
      <mt-field v-model="productionqrcode" id="productionqrcodeId" @keyup.enter.native="GetMoOnput()" label="二维码" placeholder="请扫描二维码"></mt-field>
      <mt-field v-model="ItemCode" label="件号"></mt-field>
      <mt-field v-model="MoNo" label="生产订单"></mt-field>
      <mt-field v-model="OutputQty" label="完检数量"></mt-field>
    </group>  
</div>
</template>
<style>
</style>
<script>
    import api from '../../js/api.js'
  import {
    Toast
  } from 'mint-ui';
  import {
    Group,
    XInput,
    XButton
  } from 'vux'
  export default {
    data() {
      return {
        productionqrcode:'',
        MoNo: '', //生产订单
        ItemCode: '', //件号
        OutputQty: '', //产出数量
      }
    },
    methods: {
      //产出二维码
      GetMoOnput() {
        let data = {
          loginname:sessionStorage["userName"],
          qrcode: this.productionqrcode
        }
        this.$http.post(api.SingleOutput, data, api.apiConfig()).then((data) => {
          if (data.data.ErrCode == 0) {
            let scouse = data.data;
            this.ItemCode = scouse.ItemCode;
            this.MoNo = scouse.MoNo;
            this.OutputQty = scouse.OutputQty;
          }
        })
      }
    },
    components: {
      Group,
      XInput,
      XButton
    }
  }

</script>
