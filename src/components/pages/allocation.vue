
<template>
  <div>
   
 <mt-header fixed title="调拨"></mt-header>
    <group>
 <mt-field label="二维码" placeholder="请扫描二维码"></mt-field>
<mt-field  readonly=true label="件名"  ></mt-field>
<mt-field readonly=true label="件号"></mt-field>
<mt-field readonly=true label="原储位" ></mt-field>
<mt-field readonly=true label="调拨储位" ></mt-field>
<mt-field readonly=true  label="数量"  ></mt-field>

 
    <x-button type="primary" action-type="button">提交</x-button>
      </group>
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
    components: {
      Group,
      XInput,
      XButton
    }
  }

</script>
