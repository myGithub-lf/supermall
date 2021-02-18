import axios from 'axios'
export function request(config) {
    // 1. 创建axios实例
    const axiosInstance = axios.create({
        baseURL: "",
        timeout: 5000
    });

    // 2. axios的拦截器
    // 2.1 请求拦截
    axiosInstance.interceptors.request.use(config => {
        console.log("request", config)
        return config
    }, err => {
        console.log(err)
    })
    // 2.2 响应拦截
    axiosInstance.interceptors.response.use(resp => {
        console.log("response", resp)
    }, err => {
        console.log(err)
    })

    // 3. 发送真正的网络请求
    return axiosInstance(config)
}