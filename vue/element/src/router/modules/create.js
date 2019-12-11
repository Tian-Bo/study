// 基础路由
/* Layout */
// import Layout from '@/layout'
export default [
  {
    path: '/create',
    hidden: true,
    component: () => import('@/views/create/index')
    // redirect: '/create/page',
    // children: [{
    //     path: 'page',
    //     name: '页面',
    //     component: () => import('@/views/create/index'),
    //     meta: {
    //         icon: '',
    //         title: '页面'
    //     }
    // },
    // {
    //     path: 'rule',
    //     name: '规则',
    //     component: () => import('@/views/create/index'),
    //     meta: {
    //         icon: '',
    //         title: '规则'
    //     }
    // },
    // {
    //     path: 'poster',
    //     name: '海报',
    //     component: () => import('@/views/create/index'),
    //     meta: {
    //         icon: '',
    //         title: '海报'
    //     }
    // }]
  }
]
