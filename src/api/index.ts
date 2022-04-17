import LRequest from '@/util/request'

const lRequest = new LRequest({
  baseURL: 'http://127.0.0.1:3000/api',
  timeout: 10000,
  interceptors: {
    // 单独一个url的请求器
    requestInterceptors(config: any) {
      // 添加请求头 token
      const token = null
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorsErr(err) {
      return err
    },
    responseInterceptors(res) {
      return res
    },
    responseInterceptorsErr(err) {
      return err
    },
  },
})

export default lRequest
