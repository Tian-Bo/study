import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
// 创建一个AXIOS实例
const AJAX = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // 带凭据：真,
  // 跨域请求时发送cookies
  timeout: 5000 // 请求超时
})

// 请求拦截器
AJAX.interceptors.request.use(
  config => {
    // 在发出请求前做点什么
    if (store.getters.token) {
      // 让每个请求携带令牌
      // ['X-Token']是自定义头密钥
      // 请根据实际情况修改
      config.headers = {
        'Authorization': 'Bearer ' + getToken('token')
      }
    }
    return config
  },
  error => {
    // 处理请求错误
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
AJAX.interceptors.response.use(
  /**
   * 如果您想获取诸如头或状态之类的http信息
   * P租约返回响应=>响应
  */

  /**
   * 通过自定义代码确定请求状态
   * 这里只是一个例子
   * 您还可以通过HTTP状态代码判断状态
   */
  response => {
    const res = response.data
    console.log(res)
    // 如果自定义代码不是20000，则判断为错误。
    if (res.status != 0) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: 非法令牌；50012:其他客户端登录；50014:令牌过期；
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('您已注销，您可以取消以停留在此页，或重新登录', '确认注销', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // 用于调试
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

// export default AJAX

// 定义对外Get、Post、File请求
export default {
  get(url, param = {}, headers = {}) {
    return AJAX.get(url, {
      params: param,
      headers
    })
  },
  post(url, param = null, headers = {}) {
    return AJAX.post(url, param, {
      headers
    })
  },
  put(url, param = null, headers = {}) {
    return AJAX.put(url, param, {
      headers
    })
  },
  file(url, param = null, headers = {}) {
    return AJAX.post(url, param, {
      headers: Object.assign({
        'Content-Type': 'multipart/form-data'
      }, headers)
    })
  },
  delete(url, param = null, headers = {}) {
    return AJAX.delete(url, {
      param,
      headers: Object.assign({
        'Content-Type': 'multipart/form-data'
      }, headers)
    })
  }
}

