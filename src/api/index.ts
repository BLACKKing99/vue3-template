import LRequest from '@/util/request'

const lRequest = new LRequest({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: import.meta.env.VITE_TIMEOUT,
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
