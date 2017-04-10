 import {
   Toast
 } from 'mint-ui';

 const api = {
   apiConfig() {
     return {
       baseURL:"http://10.10.1.113:8001/",
       timeout: 1000000,
       transformResponse: [function (data) {
         // 这里提前处理返回的数据
         data=  eval("("+data+")");
          data=  eval("("+data.d+")");
         if (data.ErrCode != 0) {
           Toast({
             message: data.ErrMsg,
             position: 'bottom',
             duration: 5000
           });
         }
         return data;
       }]
     }
   },
   login: "PDA.asmx/Login", //登陆
   GetEngDashboardInfo:"PDA.asmx/GetEngDashboardInfo", //调拨二维码
   StockTransfer:"SAPB1.asmx/StockTransfer", //调拨提交
   GetShipPlan:"PDA.asmx/GetShipPlan", //出货计划
   Ship: "PDA.asmx/Ship", //出货提交
   GetProductionDashboardInfo:"PDA.asmx/GetProductionDashboardInfo", //获取生产看板信息
   MoInput:"PDA.asmx/MoInput", //投入
   MoOutput:"PDA.asmx/MoOutput", //产出
   CreateProductionReceipt:"PDA.asmx/CreateProductionReceipt", //产出入库
   CreateProductionOrder:"SAPB1.asmx/CreateProductionOrder", //生产订单创建提交
   GetRecevingInfo:"SAPB1.asmx/GetRecevingInfo", //入库
   CreatePoGoodsReceipt:"SAPB1.asmx/CreatePoGoodsReceipt", //入库提交
   GetMoInput:"PDA.asmx/GetMoInput", //投入详情
   GetMoOutput:"PDA.asmx/GetMoOutput" //产出详情
 } ////////////api存放位置
 export default api;
