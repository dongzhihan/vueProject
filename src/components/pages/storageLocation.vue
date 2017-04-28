<template>
  <div>
    <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 储位 </div>
    <group>
      <mt-field v-model="siteno" @keyup.enter.native="GetSiteInfo()" label="储位"></mt-field>
    </group>
    <el-table :data="ListSiteDetail" style="width: 100%">
      <el-table-column    prop="Itemcode" label="件号">
      </el-table-column>
      <el-table-column  prop="Itemname" label="件名">
      </el-table-column>
      <el-table-column width="80" prop="Quantity" label="数量">
      </el-table-column>
    </el-table>
  </div>
</template>
<style>


</style>
<script>
  import {
    Toast
  } from 'mint-ui';
  import api from '../../js/api.js'
  import {
    Group,
    XInput,
    XButton
  } from 'vux'
  export default {
    data() {
      return {
        siteno: '', //出货单号
        ListSiteDetail: [],
      }
    },
    methods: {
      //储位
      GetSiteInfo() {
        let data = {
          siteno: this.siteno
        }
        this.$http.post(api.GetSiteInfo, data,  api.apiConfig()).then((data) => {
          if (data.data.ErrCode == 0) {
            let scouse = data.data;
            this.ListSiteDetail = scouse.ListSiteDetail;
          }
        })
      },
    },
    components: {
      Group,
      XInput,
      XButton
    }
  }

</script>
