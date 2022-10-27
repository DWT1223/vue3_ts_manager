import DWTRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const dwtRequest = new DWTRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = '123'
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求成功拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败拦截')
      return err
    }
  }
})

export default dwtRequest
