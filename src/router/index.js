// 专门用于创建整个项目的路由器
import Vue from 'vue'
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter)

//引入组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Refister from '@/pages/Refister'

//配置路由
export default new VueRouter({
    //配置路由
    routes: [{
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'search',
            path: '/search',
            component: Search
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'refister',
            path: '/refister',
            component: Refister
        },
        //重定向
        {
            path: '/',
            redirect: '/home'
        }
    ]
})