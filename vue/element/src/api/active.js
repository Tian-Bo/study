import Request from '@/utils/request'

// 登陆
export const getActiveModel = data => Request.get('/active/model', data)
