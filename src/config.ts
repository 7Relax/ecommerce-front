export let API: string

if (process.env.NODE_ENV === 'development') {
  // 开发环境
  API = process.env.REACT_APP_DEVELOPMENT_API_URL || ''
} else if (process.env.NODE_ENV === 'production') {
  // 生产环境
  API = process.env.REACT_APP_PRODUCTION_API_URL ! // 非空断言
}
