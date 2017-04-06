<template>
  <div>
    <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 成品发货 </div>
    <group>
      <mt-field v-model="shipno" @keyup.enter.native="GetShipPlan()" label="出货单号"></mt-field>
    </group>
    <el-table :data="ListShipPlan" style="width: 100%">
      <el-table-column prop="SerialNum" label="序号">
      </el-table-column>
      <el-table-column prop="MaterialNo" label="件号/规格">
      </el-table-column>
      <el-table-column width="50" prop="MatrialName" label="件名">
      </el-table-column>
      <el-table-column width="50" prop="ShipQty" label="数量">
      </el-table-column>
    </el-table>

    <x-button style="margin-top: 10px" type="primary" @click.native="Ship()" action-type="button">提交</x-button>
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
        shipno: '', //出货单号
        ListShipPlan: [],
      }
    },
    methods: {
      //出货计划
      GetShipPlan() {
        let data = {
          shipno: this.shipno
        }
        this.$http.post(api.GetShipPlan, data, api.config).then((data) => {
          if (data.data.Errcode != 0) {
            let scouse = data.data;
            this.ListShipPlan = scouse.ListShipPlan;
          }
        })
      },
      //提交出货
      ship() {
        let data = {
          shipno: this.shipno,
          loginname: sessionStorage["userName"] //名字
        }
        this.$http.post(api.Ship, data, api.config).then((data) => {
          if (data.data.Errcode != 0) {
            shipno = '' //出货单号
            ListShipPlan = []
            Toast({
              message: "提交成功",
              iconClass: 'icon icon-success'
            });
          }
        })

      }
    },
    components: {
      Group,
      XInput,
      XButton
    }
  }

</script>
