import axios from 'axios'

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})

axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)
