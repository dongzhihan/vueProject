<template>
  <div>
    <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 生产入库 </div>
    <group>
      <mt-field v-model="productionqrcode" id="productionqrcodeId" @keyup.enter.native="GetMoOnput()" label="二维码"></mt-field>
      <mt-field v-model="mono" label="生产订单"></mt-field>
      <mt-field v-model="MaterialNo" label="件号"></mt-field>
      <mt-field v-model="MaterialName" label="件名"></mt-field>
      <mt-field v-model="PlanedQty" label="订单数量"></mt-field>
      <mt-field v-model="StorageQty" label="已入库数量"></mt-field>
      <mt-field v-model="ProdOutQty" label="未入库"></mt-field>
    </group>
    <x-button style="margin-top: 10px" @click.native="MoOutput()" type="primary" action-type="button">入库</x-button>
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
        mono: '', //生产订单
        productionqrcode: '', //生产订单二维码
        MaterialNo: '', //件号
        MaterialName: '', //件名
        PlanedQty: '', //计划数量
        StorageQty: '', //已入库数量
        ProdOutQty: '' //产出量
      }
    },
    methods: {
      //产出二维码
      GetMoOnput() {
        let data = {
          loginname:sessionStorage["userName"],
          productionqrcode: this.productionqrcode
        }
        this.$http.post(api.GetMoOutput, data, api.apiConfig()).then((data) => {
          if (data.data.ErrCode == 0) {
            let scouse = data.data;
            this.MaterialNo = scouse.MaterialNo;
            this.MaterialName = scouse.MaterialName;
            this.PlanedQty = scouse.PlanedQty;
            this.StorageQty = scouse.StorageQty;
            this.ProdOutQty = scouse.ProdOutQty;
          }
        })
      },
      //产出提交
      MoOutput() {
        let data = {
          mono: this.mono,
          storageqty: this.ProdOutQty,
          loginname: sessionStorage["userName"]
        }
        this.$http.post(api.MoOutput, data, api.apiConfig()).then((data) => {
          if (data.data.ErrCode == 0) {
            Toast({
              message: "创建生产订单入库成功",
              iconClass: 'icon icon-success'
            });
            //初始化
            this.mono = '' //生产订单
            this.productionqrcode = '' //生产订单二维码
            this.MaterialNo = '' //件号
            this.MaterialName = '' //件名
            this.PlanedQty = '' //计划数量
            this.StorageQty = '' //已入库数量
            this.ProdOutQty = '' //产出量
            
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
