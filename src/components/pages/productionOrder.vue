<template>
  <div>
    <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center "> 生产订单 </div>
    <group>
      <mt-field v-model="qrcode" label="二维码" @keyup.enter.native="GetProductionDashboardInfo()"></mt-field>
      <mt-field v-model="planDate" type="date" label="计划日期"></mt-field>
      <mt-field v-model="startDate" type="date" label="开始日期"></mt-field>
      <mt-field v-model="dueDate" type="date" label="到期日"></mt-field>
      <mt-field v-model="Qty" label="计划数量"></mt-field>
      <mt-field v-model="MaterialName" label="件名"></mt-field>
      <mt-field v-model="MaterialNo" label="件号"></mt-field>
      <mt-field v-model="WorkCenter" label="加工中心"></mt-field>
    </group>
    <x-button style="margin-top: 10px" @click.native="CreateProductionOrder()" type="primary" action-type="button">提交</x-button>
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
        Qty: '', //计划数量
        MaterialName: '', //件名
        MaterialNo: '', //件号
        WorkCenter: '', //加工中心
      }
    },
    methods: {
      //取明日时间
      GetDateStr(AddDayCount) {
        //formart实现
        Date.prototype.Format = function (fmt) { //author: meizz 
          var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "h+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds() //毫秒 
          };
          if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
          for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) :
              (("00" + o[k]).substr(("" + o[k]).length)));
          return fmt;
        }
        var dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
        return dd.Format("yyyy-MM-dd")
      },
      //二维码获取信息
      GetProductionDashboardInfo() {
        let data = {
          qrcode: this.qrcode
        }
        this.$http.post(api.GetProductionDashboardInfo, data, api.apiConfig()).then((data) => {
          if (data.data.Errcode != 0) {
            let scouse = data.data
            this.Qty = scouse.PlanQty;
            this.MaterialName = scouse.MaterialName;
            this.MaterialNo = scouse.MaterialNo;
            this.WorkCenter = scouse.WorkCenter;
          }
        })
      },
      //生产订单提交
      CreateProductionOrder() {
        let data = {
          itemCode: this.MaterialNo,
          quantity: this.Qty,
          duedate: this.dueDate,
          workcenter: this.WorkCenter,
          loginname: sessionStorage["userName"]
        }
        this.$http.post(api.CreateProductionOrder, data, api.apiConfig()).then((data) => {
          if (data.data.Errcode == 0) {
            this.qrcode= '', //二维码
            this.Qty= '', //计划数量
            this.MaterialName= '', //件名
            this.MaterialNo='', //件号
            this.WorkCenter='', //加工中心
            Toast({
              message: "创建生产订单成功",
              iconClass: 'icon icon-success'
            });
          }
        })
      }
    },
    computed: {
      //计划时间
      planDate() {
        return this.GetDateStr(1)
      },
      //开始时间
      startDate() {
        return this.GetDateStr(1)
      },
      //执行时间
      dueDate() {
        return this.GetDateStr(1)
      }
    },
    components: {
      Group,
      XInput,
      XButton
    }
  }

</script>
