<template>
  <div>
    <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 入库 </div>
    <group>

      <mt-field v-model="recevingno" label="验收单号" @keyup.enter.native="GetRecevingInfo()"></mt-field>
      <mt-field v-model="PoNo" label="采购单号"></mt-field>
      <mt-field v-model="CardName" label="厂商"></mt-field>
    </group>
    <el-table :data="ListRecDetail" style="width: 100%">
      <el-table-column width="60" prop="Serial" label="序号">
      </el-table-column>
      <el-table-column  prop="ItemCode" label="件号/规格">
      </el-table-column>
      <el-table-column  prop="ItemName" label="件名">
      </el-table-column>
      <el-table-column label="交货量">
        <template scope="scope">
          <el-input v-model="scope.row.Quantity"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <x-button style="margin-top: 10px" type="primary" @click.native="CreatePoGoodsReceipt()" action-type="button">提交</x-button>
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

        recevingno: '', //验收单号 
        PoNo: '', //采购订单 
        CardName: '', //供应商名称
        ListRecDetail: [], //详细
        cardno: '' //供应商编号
      }
    },
    methods: {
      //入库查询
      GetRecevingInfo() {
        let data = {
          recevingno: this.recevingno
        }
        this.$http.post(api.GetRecevingInfo, data, api.apiConfig()).then((data) => {
          if (data.data.Errcode != 0) {
            let scouse = data.data
            this.ListRecDetail = scouse.ListRecDetail;
            this.PoNo = scouse.PoNo;
            this.CardName = scouse.CardName;
            this.cardno = scouse.CardNo;
          }
        })
      },
      //入库提交
      CreatePoGoodsReceipt() {
        let data = {
          listreceive: this.ListRecDetail,
          pono: this.PoNo,
          cardname: this.CardName,
          cardcode: this.cardno,
          loginname: sessionStorage["userName"],
          delivery: this.recevingno
        }
        this.$http.post(api.CreatePoGoodsReceipt, data, api.apiConfig()).then(
          (data) => {
            if (data.data.Errcode != 0) {
              Toast({
                message: "创建采购订单入库成功",
                iconClass: 'icon icon-success'
              });
              this.ListRecDetail = [];
              this.PoNo = '';
              this.CardName = '';
              this.cardno = '';
              this.recevingno = '';
            }
          }
        )
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
