import axios from 'axios'
import env from '@/config/env'
import { getStore } from "@/common/util"

const MOCKURL = '' // mock数据地址


/**
 * 自定义Axios实例
 */
const AJAX = axios.create({
    baseURL: env.baseUrl,
    timeout: 30000,
    withCredentials: env.credential
})


// 添加请求拦截器
AJAX.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (process.env.NODE_ENV === 'development') {
        config.url = env.baseUrl + config.url;           // 自定义反向代理
    }
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})


// 添加响应拦截器
AJAX.interceptors.response.use(function (res) {
    // token过期
    if(res.status === -1) {
        window.sessionStorage.removeItem('token')
        return this.$router.push({ path: "/login" })
    }
    // 操作失误
    if(res.status === 1) {
        return this.$message.error(res.message)
    }
    return res.data;
}, function (error) {
    // 对响应错误做点什么，比如400、401、402等等
    if (error && error.res) {
        console.log(error.res)
    }
    return Promise.reject(error)
})


// 定义对外Get、Post、File请求
export default {
    get(url, param = {}, headers = {}) {
        return AJAX.get(url, {
            params: param,
            headers: {'Authorization': 'Bearer ' + getStore('token')}
        })
    },
    post(url, param = null, headers = {}) {
        return AJAX.post(url, param, {
            headers: {'Authorization': 'Bearer ' + getStore('token')},
        })
    },
    put(url, param = null, headers = {}) {
        return AJAX.put(url, param, {
            headers: {'Authorization': 'Bearer ' + getStore('token')},
        })
    },
    file(url, param = null, headers = {}) {
        return AJAX.post(url, param, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + getStore('token')
            }
        })
    },
    delete(url, param = null, headers = {}) {
        return AJAX.delete(url, {
            param,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + getStore('token')
            }
        })
    }
}
