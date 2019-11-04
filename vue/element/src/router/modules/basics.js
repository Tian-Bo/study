// 基础路由
/* Layout */
import Layout from '@/layout'
export default [
  // {
  //     path: '/',
  //     hidden: true,
  //     meta: {
  //         noNeedLogin: true,
  //     },
  //     component: () => import('@/views/home/index'),
  // },
  // {
  //     path: '/login',
  //     hidden: true,
  //     meta: {
  //         noNeedLogin: true,
  //     },
  //     component: () => import('@/views/home/login'),
  // },
  {
    path: '/register',
    hidden: true,
    meta: {
      noNeedLogin: true
    },
    component: () => import('@/views/home/register')
  },
  {
    path: '/account-home',
    hidden: true,
    meta: {
      noNeedLogin: false
    },
    component: () => import('@/views/home/accountHome')
  },
  {
    path: '/account-setting',
    hidden: true,
    meta: {
      noNeedLogin: false
    },
    component: () => import('@/views/home/accountSetting')
  },
  {
    path: '/account-password',
    hidden: true,
    meta: {
      noNeedLogin: false
    },
    component: () => import('@/views/home/accountPassword')
  }
]
