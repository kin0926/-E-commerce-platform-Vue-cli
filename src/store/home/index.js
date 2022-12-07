//store的方法
//引入api接口
import { reqCateGoryList, reqGetBannerList, reqFloorList } from '@/api'
//处理actions的地方，可以书写业务逻辑、处理异步
const actions = {
    async categoryList({ commit }) {
        let result = await reqCateGoryList()
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data);
        }
    },
    async getBannerList({ commit }) {
        console.log('获取服务器数据');
        let result = await reqGetBannerList()
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data);
        }
    },
    async getFloorList({ commit }) {
        let result = await reqFloorList()
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)
        }
    }
};
//修改数据的地方
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        console.log('修改仓库中的数据');
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
};
//存储数据的地方
const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
};
//计算属性
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}