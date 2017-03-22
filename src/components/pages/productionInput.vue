<template>
  <div>
 
    <group>

      <x-input title="二维码" @keyup.enter.native=" test()"></x-input>
 
      <x-input title="计划日期"></x-input>
      <x-input title="开始日期"></x-input>
      <x-input title="到期日"></x-input>
      <x-input title="计划数量"></x-input>
      <x-input title="件名"></x-input>
      <x-input title="件号"></x-input>
       <x-input title="加工中心"></x-input>
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
