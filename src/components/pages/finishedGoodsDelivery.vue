<template>
  <div>

    <group>

      <x-input title="出货时间"  ></x-input>
      <x-input title="出货地" ></x-input>
      <x-input title="件号" ></x-input>
            <x-input title="数量" ></x-input>
    </group>
           <el-table :data="tableData" style="width: 100%">
      <el-table-column   prop="date" label="序号">
      </el-table-column>
      <el-table-column   prop="name" label="件号/规格">
      </el-table-column>
      <el-table-column   width="50" prop="address" label="件名">
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
