import Vue from "vue";
import Vuex from "vuex"
//使用Vuex
Vue.use(Vuex);

//引入小仓库
import home from './home'
import search from './search'
import detal from "./detal";

//把数据对外暴露
export default new Vuex.Store({
    //使用小盒子（模块）modules
    modules: {
        home,
        search,
        detal
    }
})