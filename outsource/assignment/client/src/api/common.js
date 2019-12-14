/**
 * 请求统一管理
 */
import Request from '../common/request'

/* Common */
export const rankGender = data => Request.get('/ranking/gender', data)

// 用户-登陆
export const postLogin = data => Request.post('/user/login', data)
// 用户-注册
export const postRegister = data => Request.post('/user/register', data)
// 用户-获取用户信息
export const getUserInfo = data => Request.get('/user/info', data)


// export const rankGender = data => Request.get('/ranking/gender', data)
// export const rankGender = data => Request.get('/ranking/gender', data)
// export const rankGender = data => Request.get('/ranking/gender', data)
// export const rankGender = data => Request.get('/ranking/gender', data)
// export const rankGender = data => Request.get('/ranking/gender', data)
