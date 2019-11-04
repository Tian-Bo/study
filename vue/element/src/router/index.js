import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Router Modules */
import element from './modules/element'
import basics from './modules/basics'
import store from './modules/store'

/**
 * Note: 子菜单默认仅在route children.length>=1时出现
 *
 * hidden: true                   如果设置为true，则项目将不会显示在侧边栏中（默认为false）
 * alwaysShow: true               如果设置为true，将始终显示根菜单
 *                                如果不始终设置Show，则当项具有多个子路由时它将成为嵌套模式，否则不显示根菜单
 * redirect: noRedirect           如果设置为noRedirect，则breadcrumb中不会重定向
 * name:'router-name'             该名称由<keep alive>使用（必须设置！！！）
 * meta : {
    roles: ['admin','editor']     控制页面角色（可以设置多个角色）
    title: 'title'                侧边栏和面包屑中显示的名称（推荐集）
    icon: 'svg-name'              图标显示在侧栏中
    noCache: true                 如果设置为true，则不会缓存该页（默认为false）
    affix: true                   如果设置为true，则标记将粘贴在“标记”视图中
    breadcrumb: false             如果设置为false，则该项将隐藏在breadcrumb中（默认为true）
    activeMenu: '/example/list'   如果设置路径，侧边栏将突出显示您设置的路径
  }
 */

//  所有可访问组件
export const constantRoutes = [
  ...element,
  ...basics,
  { path: '*', redirect: '/404', hidden: true }
]

// 针对性用户可访问路由
export const asyncRoutes = store

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
