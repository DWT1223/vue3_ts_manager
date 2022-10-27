import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface DWTRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
  headers?: any
}

export interface DWTRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: DWTRequestInterceptors<T>
  showLoading?: boolean
}
