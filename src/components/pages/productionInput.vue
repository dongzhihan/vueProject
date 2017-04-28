<template>
  <div>
    <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 生产投入 </div>
    <group>
      <mt-field v-model="mono" label="生产订单"></mt-field>
      <mt-field v-model="productionqrcode" @keyup.enter.native="GetMoInput()" label="二维码"></mt-field>
      <mt-field v-model="InputQty" label="投入数"></mt-field>
      <mt-field v-model="TotalInputQty" label="已投入数"></mt-field>
      <mt-field v-model="ItemCode" label="件号"></mt-field>
      <mt-field v-model="ItemName" label="件名"></mt-field>
      <mt-field v-model="LineList" label="车间"></mt-field>
      <mt-field v-model="Line" label="线别"></mt-field>
    </group>
    <x-button style="margin-top: 10px" @click.native="MoInput()" type="primary" action-type="button">提交</x-button>
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
  } from 'vux';
  export default {
    data() {
      return {
        mono: '',
        ItemCode: '', //件号
        ItemName: '', //件名
        InputQty: '', //投入量
        TotalInputQty: '', //已投入量
        LineList: '', //车间
        Line: '', //线别
        productionqrcode: ''
      }
    },
    methods: {
      //投入二维码详情
      GetMoInput() {
        let data = {
          loginname: sessionStorage["userName"],
          mono: this.mono,
          productionqrcode: this.productionqrcode
        }
        this.$http.post(api.GetMoInput, data, api.apiConfig()).then((data) => {
          if (data.data.ErrCode == 0) {
            let scouse = data.data
            this.InputQty = scouse.InputQty
            this.ItemCode = scouse.ItemCode
            this.ItemName = scouse.ItemName
            this.TotalInputQty = scouse.TotalInputQty
            this.LineList = scouse.LineList
            this.Line = scouse.Line
          }
        })

      },
      //投入提交
      MoInput() {
        let data = {
          mono: this.mono,
          productionqrcode: this.productionqrcode,
          inputqty: this.InputQty,
          loginname: sessionStorage["userName"]
        }
        this.$http.post(api.MoInput, data, api.apiConfig()).then((data) => {
          if (data.data.ErrCode == 0) {
            this.productionqrcode = ''
            this.mono = ''
            this.ItemCode = '' //件号
            this.ItemName = '' //件名
            this.InputQty = '' //投入量
            this.TotalInputQty = '' //已投入量
            this.LineList = '' //车间
            this.Line = '' //线别
            Toast({
              message: "提交成功",
              iconClass: 'icon icon-success'
            });
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
