import { AxiosRequestConfig, AxiosError } from 'axios'
export interface LInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsErr?: (err: AxiosError) => AxiosError
  responseInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  responseInterceptorsErr?: (err: AxiosError) => AxiosError
}

export interface LAxiosRequestConfig extends AxiosRequestConfig {
  interceptors?: LInterceptors
  isLoading?: boolean
}
