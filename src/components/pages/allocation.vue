<template>
  <div>

    <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 调拨 </div>
    <group>

      <!--  <input type="" name="" @focus="test()" value="">-->
      <mt-field v-model="qrcode" label="二维码" @focus.native="GetEngDashboardInfo()" placeholder="请扫描二维码"></mt-field>
      <mt-field v-model="ProductionName" :readonly=true label="件名"></mt-field>
      <mt-field v-model="ProductionNo" :readonly=true label="件号"></mt-field>
      <mt-field v-model="MtlSiteNo" :readonly=true label="原储位"></mt-field>
      <mt-field v-model="FromWarehouse" :readonly=true label="原仓库"></mt-field>
      <mt-field v-model="EngSiteNo" :readonly=true label="调拨储位"></mt-field>
      <mt-field v-model="ToWarehouse" :readonly=true label="目标仓库"></mt-field>
      <mt-field v-model="PackageNum" :readonly=true label="数量"></mt-field>
    </group>
    <x-button style="margin-top: 10px" type="primary" action-type="button">提交</x-button>
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
        qrcode: '', //二维码
        ProductionName: '', //件名
        ProductionNo: '', //件号
        MtlSiteNo: '', //原储位
        FromWarehouse: '', //原仓库
        EngSiteNo: '', //调拨储位
        ToWarehouse: '', //目标仓库
        PackageNum: '', //数量

      }
    },
    methods: {
      GetEngDashboardInfo() {
        let data = {
          qrcode: this.qrcode
        };
        this.$http.post(api.GetEngDashboardInfo, data, api.config).then((data) => {
          if (data.data.Errcode != 0) {
            let scouse = data.data
            this.ProductionName = scouse.ProductionName;
            this.ProductionNo = scouse.ProductionNo;
            this.FromWarehouse = scouse.FromWarehouse;
            this.EngSiteNo = scouse.EngSiteNo;
            this.ToWarehouse = scouse.ToWarehouse;
            this.PackageNum = scouse.PackageNum;
          }
        })
      },
      //调拨提交
      StockTransfer() {
        let data = {
          itemcode: this.ProductionNo,
          itemdescription: this.ProductionName,
          quantity: this.quantity,
          fromwarehouse: this.FromWarehouse,
          towarehouse: this.ToWarehouse
        }
        this.$http.post(api.GetEngDashboardInfo, data, api.config).then((data => {
          if (data.data.Errcode != 0) {
            Toast({
              message: "提交成功",
              iconClass: 'icon icon-success'
            });
            //成功清空
            this.qrcode='';
            this.ProductionName = '';
            this.ProductionNo = '';
            this.FromWarehouse = '';
            this.EngSiteNo = '';
            this.ToWarehouse = '';
            this.PackageNum = '';
          }

        }))
      },

    },
    components: {
      Group,
      XInput,
      XButton
    }
  }

</script>
