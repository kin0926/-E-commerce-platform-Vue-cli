import Vue from 'vue'
import App from './App.vue'
//引入element-ui组件库
import ElementUI from 'element-ui';
//引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';
//引入路由
import router from '@/router'
//使用ElementUI
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: router,
}).$mount('#app')