//store的方法
//引入api接口
import { reqCateGoryList } from '@/api'
//处理actions的地方，可以书写业务逻辑、处理异步
const actions = {
    async categoryList({ commit }) {
        let result = await reqCateGoryList()
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data);
        }
    }
};
//修改数据的地方
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
};
//存储数据的地方
const state = {
    categoryList: []
};
//计算属性
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}