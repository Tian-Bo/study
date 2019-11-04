// 授权路由

/* Layout */
import Layout from '@/layout'
export default [
  {
    path: '/general',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '概况总览',
        component: () => import('@/views/general/index'),
        meta: {
          title: '概况总览',
          icon: 'example'
        }
      }
    ]

  },
  {
    path: '/create',
    name: '创作中心',
    component: Layout,
    redirect: '/create/primary',
    meta: {
      title: '创作中心',
      icon: 'example'
    },
    children: [
      {
        path: 'primary',
        name: '初级玩法',
        component: () => import('@/views/creation/primary'),
        meta: {
          title: '初级玩法',
          icon: 'example'
        }
      },
      {
        path: '/intermediate',
        name: '中级玩法',
        component: () => import('@/views/creation/intermediate'),
        meta: {
          title: '中级玩法',
          icon: 'example'
        }
      },
      {
        path: '/senior',
        name: '高级玩法',
        component: () => import('@/views/creation/intermediate'),
        meta: {
          title: '高级玩法',
          icon: 'example'
        }
      }
    ]
  },
  {
    path: '/management',
    name: '创意管理',
    // component:  () => import('@/views/creation/intermediate'),
    component: Layout,
    meta: {
      title: '创意管理',
      icon: 'example'
    },
    icon: 'icon-fenlei'
  },
  {
    path: '/user',
    name: '用户管理',
    // component:  () => import('@/views/creation/intermediate'),
    component: Layout,
    meta: {
      title: '用户管理',
      icon: 'example'
    },
    icon: 'icon-sogo'
  },
  {
    path: '/marketing',
    name: '营销中心',
    // component: () => import('@/views/creation/senior'),
    component: Layout,
    meta: {
      title: '营销中心',
      icon: 'example'
    },
    icon: 'icon-caidan1'
  },
  {
    path: '/distribution',
    name: '分销中心',
    // component: () => import('@/views/creation/senior'),
    component: Layout,
    meta: {
      title: '分销中心',
      icon: 'example'
    },
    icon: 'icon-icon_shezhi'
  },
  {
    path: '/shop',
    name: '店铺装修',
    // component:  () => import('@/views/creation/intermediate'),
    component: Layout,
    meta: {
      title: '店铺装修',
      icon: 'example'
    },
    icon: 'icon-daohangshouye-copy'
  },
  {
    path: '/service',
    name: '服务中心',
    // component:  () => import('@/views/creation/intermediate'),
    component: Layout,
    meta: {
      title: '服务中心',
      icon: 'example'
    },
    icon: 'icon-jietouzuoyi'
  },
  {
    path: '/setting',
    name: '设置',
    // component:  () => import('@/views/creation/intermediate'),
    component: Layout,
    meta: {
      title: '设置',
      icon: 'example'
    },
    icon: 'icon-icon_shezhi'
  }
]
