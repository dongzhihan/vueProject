<template>
  <div>
    <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 成品发货 </div>
    <group>
      <mt-field label="出货时间"></mt-field>
      <mt-field label="出货地"></mt-field>
      <mt-field label="件号"></mt-field>
      <mt-field label="数量"></mt-field>

    </group>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="序号">
      </el-table-column>
      <el-table-column prop="name" label="件号/规格">
      </el-table-column>
      <el-table-column width="50" prop="address" label="件名">
      </el-table-column>

      <el-table-column width="50" prop="address" label="数量">
      </el-table-column>
    </el-table>

  </div>


</template>
<style>


</style>
<script>
  import {
    Field
  } from 'mint-ui';
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
      XButton,
      Field
    }
  }

</script>
