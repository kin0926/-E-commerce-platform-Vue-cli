// 专门用于创建整个项目的路由器
import Vue from 'vue'
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter)

// 解决header里重复点击push上传时控制面板会飘红的问题，治本
// 直接把header里的修改放到push里，当然，先备份一份先
let originPush = VueRouter.prototype.push

// 重写push
// location告诉原来的push往哪跳, resolve成功时, reject失败时
VueRouter.prototype.push = function (location, resolve, reject) {
    // 如果有成功和失败的返回函数，则使用正常push备份的originPush，
    // 如果没有，则在push备份的originPush上面添加resolve和reject
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

//配置路由
export default new VueRouter({
    //配置路由
    routes: [{
        name: 'shouye',
        path: '/home',
        // 路由懒加载：
        component: () => import('@/pages/Home'),
        meta: { show: true }
    },
    {
        name: 'xiangqing',
        // 如何指定params参数可传可不传？只需在路由path后的占位符后加'?'
        path: '/search/:keyword?',
        component: () => import('@/pages/Search'),
        meta: { show: true }
    },
    {
        name: 'detail',
        path: '/detail/:skuid',
        component: () => import('@/pages/Detail'),
        meta: { show: true }
    },
    {
        name: 'addCartsuccess',
        path: '/addCartsuccess',
        component: () => import('@/pages/AddCartSuccess'),
        meta: { show: true }
    },
    {
        path: '/shopcart',
        component: () => import('@/pages/ShopCart'),
        meta: { show: true }
    },
    {
        name: 'denglu',
        path: '/login',
        component: () => import('@/pages/Login'),
        meta: { show: false }
    },
    {
        name: 'zhuce',
        path: '/register',
        component: () => import('@/pages/Register'),
        meta: { show: false }
    },
    //重定向
    {
        path: '/',
        redirect: '/home'
    }
    ],
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
})