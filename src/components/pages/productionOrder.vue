<template>
  <div>
    <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 生产订单 </div>
    <group>
      <mt-field label="二维码" @keyup.enter.native="GetProductionDashboardInfo()"></mt-field>
      <mt-field type="date" label="计划日期"></mt-field>
      <mt-field type="date" label="开始日期"></mt-field>
      <mt-field type="date" label="到期日"></mt-field>
      <mt-field label="计划数量"></mt-field>
      <mt-field label="件名"></mt-field>
      <mt-field label="件号"></mt-field>
      <mt-field label="加工中心"></mt-field>
    </group>
    <x-button style="margin-top: 10px" type="primary" action-type="button">提交</x-button>
  </div>
</template>
<style>


</style>
<script>
  import api from '../../js/api.js'
  import {
    Group,
    XInput,
    XButton
  } from 'vux'
  export default {
    data() {
      return {
        name: '',
        password: '',
        tableData: []
      }
    },
    methods: {
      CreateProductionOrder() {
        let data = {
          itemCode: '1112',
          quantity: '10',
          loginname: 'admin'
        }
      }
    },
    components: {
      Group,
      XInput,
      XButton
    }
  }

</script>
