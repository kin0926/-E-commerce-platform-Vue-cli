// 专门用于创建整个项目的路由器
import Vue from 'vue'
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter)

//引入组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//配置路由
export default new VueRouter({
    //配置路由
    routes: [{
            name: 'shouye',
            path: '/home',
            component: Home,
            meta: { show: true }
        },
        {
            name: 'xiangqing',
            path: '/search/:keyword',
            component: Search,
            meta: { show: true }
        },
        {
            name: 'denglu',
            path: '/login',
            component: Login,
            meta: { show: false }
        },
        {
            name: 'zhuce',
            path: '/register',
            component: Register,
            meta: { show: false }
        },
        //重定向
        {
            path: '/',
            redirect: '/home'
        }
    ]
})