// 基础路由
/* Layout */
// import Layout from '@/layout'
export default [
  // {
  //     path: '/redirect',
  //     component: Layout,
  //     hidden: true,
  //     children: [
  //     {
  //         path: '/redirect/:path*',
  //         component: () => import('@/element-views/redirect/index')
  //     }
  //     ]
  // },
  // {
  //     path: '/redirect',
  //     component: Layout,
  //     hidden: true,
  //     children: [
  //     {
  //         path: '/redirect/:path*',
  //         component: () => import('@/element-views/redirect/index')
  //     }
  //     ]
  // },
//   {
//       path: '/',
//       hidden: true,
//       component: () => import('@/views/index/index'),
//   },
//   {
//     path: '/home',
//     hidden: true,
//     login: true,
//     meta: {
//       noNeedLogin: true
//     },
//     component: () => import('@/views/index/index')
//   },
//   {
//     path: '/login',
//     meta: {
//       noNeedLogin: true
//     },
//     component: () => import('@/element-views/login/index'),
//     hidden: true
//   },
//   {
//     path: '/auth-redirect',
//     component: () => import('@/element-views/login/auth-redirect'),
//     hidden: true
//   },
//   {
//     path: '/404',
//     component: () => import('@/element-views/error-page/404'),
//     hidden: true
//   },
//   {
//     path: '/401',
//     component: () => import('@/element-views/error-page/401'),
//     hidden: true
//   },
//   {
//     path: '/',
//     component: Layout,
//     redirect: '/dashboard',
//     children: [
//       {
//         path: 'dashboard',
//         component: () => import('@/element-views/dashboard/index'),
//         name: 'Dashboard',
//         meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
//       }
//     ]
//   },
  {
    path: '/',
    hidden: true,
    meta: {
      noNeedLogin: true
    },
    component: () => import('@/views/index/index')
  },
  {
    path: '/login',
    meta: {
      noNeedLogin: true
    },
    component: () => import('@/views/auth/login'),
    hidden: true
  },
  {
    path: '/register',
    hidden: true,
    meta: {
      noNeedLogin: true
    },
    component: () => import('@/views/auth/register')
  },
  {
    path: '/account-home',
    hidden: true,
    component: () => import('@/views/home/accountHome')
  },
  {
    path: '/account-setting',
    hidden: true,
    component: () => import('@/views/home/accountSetting')
  },
  {
    path: '/account-password',
    hidden: true,
    component: () => import('@/views/home/accountPassword')
  }
]
