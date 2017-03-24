<template>
  <div>
  <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 生产产出 </div>
    <group>

      <mt-field label="生产订单"></mt-field>
      <mt-field label="二维码"></mt-field>
      <mt-field label="品号"></mt-field>
      <mt-field label="品名"></mt-field>
      <mt-field label="订单数量"></mt-field>
    </group>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="序号">
      </el-table-column>
      <el-table-column prop="name" label="产出时间">
      </el-table-column>
      <el-table-column prop="address" label="数量">
      </el-table-column>
    </el-table>
    <x-button style="margin-top: 10px" type="primary" action-type="button">入库</x-button>
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
    components: {
      Group,
      XInput,
      XButton
    }
  }

</script>
