// 授权路由

/* Layout */
import Layout from '@/layout'
export default [{
  path: '/general',
  component: Layout,
  children: [{
    path: '',
    name: '概况总览',
    component: () => import('@/views/general/index'),
    meta: {
      title: '概况总览',
      icon: 'general'
    }
  }]
},
{
  path: '/creation',
  component: Layout,
  redirect: '/creation/primary',
  meta: {
    title: '创作中心',
    icon: 'creation'
  },
  children: [{
    path: 'primary',
    name: '初级玩法',
    component: () => import('@/views/creation/primary'),
    meta: {
      title: '初级玩法'
    }
  },
  {
    path: 'intermediate',
    name: '中级玩法',
    component: () => import('@/views/creation/intermediate'),
    meta: {
      title: '中级玩法'
    }
  },
  {
    path: 'senior',
    name: '高级玩法',
    component: () => import('@/views/creation/intermediate'),
    meta: {
      title: '高级玩法'
    }
  }]
},
{
  path: '/management',
  component: Layout,
  children: [{
    path: '',
    name: '创意管理',
    component: () => import('@/views/general/index'),
    meta: {
      title: '创意管理',
      icon: 'management'
    }
  }]
},
{
  path: '/user',
  component: Layout,
  children: [{
    path: '',
    name: '用户管理',
    component: () => import('@/views/general/index'),
    meta: {
      title: '用户管理',
      icon: 'user'
    }
  }]
},
{
  path: '/marketing',
  component: Layout,
  children: [{
    path: '',
    name: '营销中心',
    component: () => import('@/views/general/index'),
    meta: {
      title: '营销中心',
      icon: 'marketing'
    }
  }]
},
{
  path: '/distribution',
  component: Layout,
  children: [{
    path: '',
    name: '分销中心',
    component: () => import('@/views/general/index'),
    meta: {
      title: '分销中心',
      icon: 'distribution'
    }
  }]
},
{
  path: '/shop',
  component: Layout,
  children: [{
    path: '',
    name: '店铺装修',
    component: () => import('@/views/general/index'),
    meta: {
      title: '店铺装修',
      icon: 'shop'
    }
  }]
},
{
  path: '/service',
  component: Layout,
  redirect: '/service/index',
  meta: {
    title: '服务中心',
    icon: 'service'
  },
  children: [{
    path: 'index',
    name: '服务中心',
    component: () => import('@/views/general/index'),
    meta: {
      title: '服务中心',
      icon: 'service'
    }
  },
  {
    path: 'aaa',
    name: '服务中心',
    component: () => import('@/views/general/index'),
    redirect: 'aaa/bbb',
    meta: {
      title: '服务中心2',
      icon: 'service'
    },
    children: [
      {
        path: 'bbb',
        name: '服务中心',
        component: () => import('@/views/general/index'),
        meta: {
          title: '服务中心3',
          icon: 'service'
        }
      },
      {
        path: 'ccc',
        name: '服务中心',
        component: () => import('@/views/general/index'),
        meta: {
          title: '服务中心3',
          icon: 'service'
        },
        children: [
          {
            path: 'ddd',
            name: '服务中心',
            component: () => import('@/views/general/index'),
            meta: {
              title: '服务中心3',
              icon: 'service'
            }
          },
          {
            path: 'rrr',
            name: '服务中心',
            component: () => import('@/views/general/index'),
            meta: {
              title: '服务中心3',
              icon: 'service'
            }
          }
        ]
      }

    ]
  }
  ]
},
{
  path: '/setting',
  component: Layout,
  children: [{
    path: '',
    name: '设置',
    component: () => import('@/views/general/index'),
    meta: {
      title: '设置',
      icon: 'setting'
    }
  }]
}]
