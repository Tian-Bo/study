import request from '@/utils/request'

/* Common */
export function rankGender(data) {
  return request({
    url: '/ranking/gender',
    method: 'get',
    params: { data }
  })
}
// 用户-登陆
export function postLogin(data) {
  return request({
    url: '/user/login',
    method: 'post',
    params: { data }
  })
}
// 用户-注册
export function postRegister(data) {
  return request({
    url: '/user/register',
    method: 'post',
    params: { data }
  })
}
// 用户-获取用户信息
export function getUserInfo(data) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { data }
  })
}

// export const rankGender = data => Request.get('/ranking/gender', data)
// export const rankGender = data => Request.get('/ranking/gender', data)
// export const rankGender = data => Request.get('/ranking/gender', data)
// export const rankGender = data => Request.get('/ranking/gender', data)
// export const rankGender = data => Request.get('/ranking/gender', data)
