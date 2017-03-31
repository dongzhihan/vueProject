 import {
   Toast
 } from 'mint-ui';
 const api = {
   apiConfig() {
     return {
       baseURL: 'http://localhost:9005/',
       timeout: 10000,
       transformResponse: [function (data) {
         // 这里提前处理返回的数据

         if (data.Errcode != 0) {
           Toast({
             message: data.Errmsg,
             position: 'bottom',
             duration: 5000
           });
         }
         return data;
       }]
     }
   },
   login: "PDA.asmx/Login", //登陆
   GetEngDashboardInfo: "PDA.asmx/GetEngDashboardInfo", //调拨二维码
   StockTransfer: "SAPB1.asmx/StockTransfer", //调拨提交
   GetShipPlan: "PDA.asmx/GetShipPlan", //出货计划
   GetProductionDashboardInfo: "PDA.asmx/GetProductionDashboardInfo", //获取生产看板信息
   MoInput: "PDA.asmx/MoInput", //投入
   MoOutput: "PDA.asmx/MoOutput", //产出
   CreateProductionReceipt: "SAPB1.asmx/CreateProductionReceipt", //产出入库
   CreateProductionOrder: "SAPB1.asmx/CreateProductionOrder", //生产订单创建
   GetRecevingInfo: "SAPB1.asmx/GetRecevingInfo", //入库
   CreatePoGoodsReceipt: "SAPB1.asmx/CreatePoGoodsReceipt" //入库提交

 } ////////////api存放位置
 export default api;
