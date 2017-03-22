<template>
  <div>

    <group>

      <x-input title="生产订单"  ></x-input>
      <x-input title="二维码" ></x-input>
      <x-input title="品号" ></x-input>
            <x-input title="品名" ></x-input>
              <x-input title="订单数量" ></x-input>
    </group>
           <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="序号">
      </el-table-column>
      <el-table-column prop="name" label="产出时间">
      </el-table-column>
       <el-table-column prop="address" label="数量">
      </el-table-column>
    </el-table>  
      <x-button type="primary" action-type="button">入库</x-button>
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
