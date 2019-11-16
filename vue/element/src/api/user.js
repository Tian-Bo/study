import Request from '@/utils/request'

// 登陆
export const login = data => Request.post('/user/login', data)
// 注册
export const getInfo = data => Request.get('/user/info', data)
// 退出登陆
export const logout = data => Request.post('/user/logout', data)

// export function login(data) {
//   return request({
//     url: '/user/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo(token) {
//   return request({
//     url: '/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/user/logout',
//     method: 'post'
//   })
// }
