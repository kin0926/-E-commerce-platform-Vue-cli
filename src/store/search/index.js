//home里的形式和这边的形式都可以
import { reqGetSearchInfo } from '@/api'
export default {
    //处理actions的地方，可以书写业务逻辑、处理异步
    actions: {
        async getSearchList({ commit }, params = {}) {
            let result = await reqGetSearchInfo(params);
            console.log(result);
            if (result.code == 200) {
                commit('GETSEARCHLIST', result.data)
            }
        },
    },
    //修改数据的地方
    mutations: {
        GETSEARCHLIST(state, searchList) {
            state.searchList = searchList;
        }
    },
    //存储数据的地方
    state: {
        searchList: {}
    },
    //计算属性
    //进入网络不给力导致页面加载好了数据还没有传回来，那么会返回undefined
    //而计算属性的属性值至少是个数组，所以添加“ || [] ”
    getters: {
        attrsList(state) {
            return state.searchList.attrsList || [];
        },
        goodsList(state) {
            return state.searchList.goodsList || [];
        },
        trademarkList(state) {
            return state.searchList.trademarkList || [];
        },
    },
}