<template>
  <div>
 
    <group>

      <x-input title="生产订单" @keyup.enter.native=" test()"></x-input>
 
      <x-input title="二维码"></x-input>
      <x-input title="投入数"></x-input>
      <x-input title="已投入数"></x-input>
      <x-input title="品号"></x-input>
      <x-input title="品名"></x-input>
    </group>
          <x-button type="primary" action-type="button">提交</x-button>
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
        password: ''

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
