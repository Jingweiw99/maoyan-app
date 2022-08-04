import axios from 'axios'
import { Toast } from 'vant'

const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: { 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596502176387264316178433","bc":"310100"}' }
})

// 发请求之前拦截 -- showLoading
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 在请求成功后拦截 -- hideLoading （这个拦截比请求到数据早一点。）
http.interceptors.response.use(function (response) {
  Toast.clear()
  return response
}, function (error) {
  Toast.clear()
  return Promise.reject(error)
})

export default http
