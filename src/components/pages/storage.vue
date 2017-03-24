<template>
  <div>

    <group>

      <mt-field label="验收单号"></mt-field>
      <mt-field label="采购单号"></mt-field>
      <mt-field label="厂商"></mt-field>
    </group>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column width="50" prop="date" label="序号">
      </el-table-column>
      <el-table-column prop="name" label="件号/规格">
      </el-table-column>
      <el-table-column prop="address" label="件名">
      </el-table-column>
      <el-table-column prop="address" label="单位">
      </el-table-column>
      <el-table-column prop="address" label="交货量">
      </el-table-column>
    </el-table>
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
<style scoped>


</style>
