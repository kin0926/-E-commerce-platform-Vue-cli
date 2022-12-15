import Vue from 'vue'
import App from './App.vue'
//引入element-ui组件库
import ElementUI from 'element-ui';
//引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';
//引入路由
import router from '@/router'
//引入Vuex
import store from './store';
// 三级联动组件--因为很多组件都用，所以设置成全局组件
import TypeNav from '@/components/TypeNav'
// 引入mock
import '@/mock/mockServer'
//引入swiper轮播图样式
// import "swiper/swiper-bundle.min.css";
//使用ElementUI
Vue.use(ElementUI);
// 使用三级联动组件 TypeNav. 2个参数（全局组件的名字，哪一个组件）
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    router: router,
    store,
}).$mount('#app')