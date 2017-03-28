<template>
  <div>
  <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 线体设定 </div>
      <div style="margin-top: 2rem">
      <el-select style="width: 100%" v-model="dataPlant" placeholder="请选择厂区">
    <el-option
      v-for="item in optionsPlant"
      :label="item.name"
      :value="item.key"
      :key='item.key'
      >
    </el-option>
  </el-select>
    <el-select style="width: 100%;margin-top: 0.5rem" v-model="dataLineBody" placeholder="请选择线体">
    <el-option
      v-for="item in optionsLineBody"
      :label="item"
      :value="item"
        :key='item.key'
      :disabled="item.disabled">
    </el-option>
  </el-select>
    <el-select style="width: 100%;margin-top: 0.5rem"  v-model="dataSublineBody" placeholder="请选择子线体">
    <el-option
      v-for="item in optionsSublineBody"
      :label="item"
      :value="item"
        :key='item.key'
      :disabled="item.disabled">
    </el-option>
  </el-select>
  </div>
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
        optionsPlant: [{name:'test',key:'1'},{name:'r',key:'2'},{name:'s',key:'3'}],
        optionsLineBody:[],
        optionsSublineBody:[],
        dataPlant:'',
        dataLineBody:'',
        dataSublineBody:''
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
