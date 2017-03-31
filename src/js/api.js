 const api = {
   apiConfig() {
     return {
       timeout: 10000 ,
        transformResponse: [function (data) {
    // 这里提前处理返回的数据
console.log(data)
    return data;
  }]
     }
   }
 } ////////////api存放位置
 export default api;
