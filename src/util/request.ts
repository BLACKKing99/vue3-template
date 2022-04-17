import axios, { AxiosInstance } from 'axios'
import type { LAxiosRequestConfig, LInterceptors } from '@/api/types/index'

class LRequest {
  instance: AxiosInstance
  interceptors: LInterceptors | undefined
  isLoading?: boolean
  constructor(config: LAxiosRequestConfig) {
    // 创建axios 实例
    this.instance = axios.create(config)
    // 创建axios 每个接口地址的拦截器
    this.interceptors = config.interceptors
    // 创建 loading
    this.isLoading = config.isLoading ?? true
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsErr
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptors
    )

    // 所有请求的拦截器
    this.instance.interceptors.request.use(
      (res) => {
        if (this.isLoading) {
          // Todo  是否有动画 默认是没有
        }
        return res
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        if (this.isLoading) {
          // todo 在这边关闭 loading
        }
        return res
      },
      (err) => {
        if (this.isLoading) {
          // todo 在这边关闭 loading
        }
        return err
      }
    )
  }

  lrequest(config: LAxiosRequestConfig) {
    return this.instance.request(config).then((res) => {
      return <T = any>() => {
        return res as unknown as T
      }
    })
  }
}

export default LRequest
