// import dwtRequest from './service'
import dwtRequest from './index'
interface DataType {
  data: any
  returnCode: string
  success: boolean
}
dwtRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET',
    showLoading: false, //控制loding显示
    interceptors: {
      requestInterceptor: (config) => {
        // console.log('单独请求的config')
        return config
      },
      responseInterceptor: (res) => {
        // console.log('单独响应的res')
        return res
      }
    }
  })
  .then((res) => {
    console.log(res)
    console.log(res.returnCode)
  })
