import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let base = `${process.env.BASE_URL}` // 动态获取二级目录

// 登陆
const Login = () => import('../views/home/login')
// 注册
const Register = () => import('../views/home/register')
// 订单列表
const ShopList = () => import('../views/home/shop_list')
// 我的购物车
const MyMall = () => import('../views/home/my_mall')
// 我的购物车
const Pay = () => import('../views/home/pay')

const router = new Router({
    mode: 'history',
    base: base,
    routes: [
        { path: '/', name: '登陆',  meta: { needLogin: false }, component: Login, show: false },
        { path: '/register', name: '注册',  meta: { needLogin: false }, component: Register, show: false  },
        { path: '/shop_list', name: '注册',  meta: { needLogin: true }, component: ShopList, show: false  },
        { path: '/my_mall', name: '注册',  meta: { needLogin: true }, component: MyMall, show: false  },
        { path: '/pay', name: '注册',  meta: { needLogin: true }, component: Pay, show: false  },
        {
            path: '*',
            redirect: '/index',
            show: false
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
});

router.beforeEach((to, from, next) => {
    const isLogin = window.sessionStorage.getItem('token')
    if (to.meta.needLogin) {  // 判断该路由是否需要登录权限
        if (isLogin) { // 判断是否已经登录
            next()
        }
        else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next()
    }
});

export default router;
