import Request from '@/utils/request'

// 登陆
export const login = data => Request.post('/user/login', data)
// 注册
export const register = data => Request.post('/user/register', data)
// 获取用户信息
export const getInfo = data => Request.get('/user/info', data)
// 退出登陆
export const logout = data => Request.post('/user/logout', data)

