<template>
  <div>

    <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 调拨 </div>
    <group>

      <!--  <input type="" name="" @focus="test()" value="">-->
      <mt-field label="二维码" @focus.native="test()" placeholder="请扫描二维码"></mt-field>
      <mt-field :readonly=true label="件名"></mt-field>
      <mt-field :readonly=true label="件号"></mt-field>
      <mt-field :readonly=true label="原储位"></mt-field>
      <mt-field :readonly=true label="调拨储位"></mt-field>
      <mt-field :readonly=true label="数量"></mt-field>
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
