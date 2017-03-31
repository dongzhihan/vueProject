<template>
  <div>
    <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 生产投入 </div>
    <group>
      <mt-field label="二维码"></mt-field>
      <mt-field label="投入数"></mt-field>
      <mt-field label="已投入数"></mt-field>
      <mt-field label="品号"></mt-field>
      <mt-field label="品名"></mt-field>
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
  } from 'vux';
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
        console.log(1)
      }
    },
    components: {
      Group,
      XInput,
      XButton 
    }
  }

</script>
