import axios from 'axios'
export function request(config) {
   // 1. 创建axios实例
   const axiosInstance = axios.create({
     // baseURL:'http://adi-v3.dev',
     baseURL: "http://123.207.32.32:8000",
     timeout: 5000
   });
   // 2. axios的拦截器
   // 2.1 请求拦截
   axiosInstance.interceptors.request.use(config => {
     console.log("request", config)
     //拦截后需要将拦截下来的请求数据返回发送
     return config
   }, err => {
     console.log(err)
   })
   // 2.2 响应拦截
   axiosInstance.interceptors.response.use(resp => {
     console.log("response", resp)
     // 拦截后需要将拦截下来处理成的结果返回
     return resp.data
   }, err => {
      console.log(err)
   })

   // 3. 发送真正的网络请求
   return axiosInstance(config)
}