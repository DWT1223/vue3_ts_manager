import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'

import router from './router'
import store from './store'
import dwtRequest from './service'

createApp(App).use(router).use(store).use(globalRegister).mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
dwtRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET',
    showLoading: false,
    interceptors: {
      requestInterceptor: (config) => {
        console.log('单独请求的config')
        return config
      },
      responseInterceptor: (res) => {
        console.log('单独响应的res')
        return res
      }
    }
  })
  .then((res) => {
    console.log(res)
    console.log(res.returnCode)
  })
