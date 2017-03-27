<template>
  <div>
  <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 生产订单 </div>
    <group>
      <mt-field id="te" label="二维码" @keyup.enter.native=" test()"></mt-field>
      <mt-field label="计划日期" ></mt-field>
      <mt-field label="开始日期"></mt-field>
      <mt-field label="到期日"></mt-field>
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
        tableData: [],

      }
    },
    methods: {
      test() {
      let qwe=  this.$jquery("#te")
        console.log(qwe)
      }
    },
    components: {
      Group,
      XInput,
      XButton
    }
  }

</script>
