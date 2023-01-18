//home里的形式和这边的形式都可以
import { reqCartList } from '@/api'
export default {
    //处理actions的地方，可以书写业务逻辑、处理异步
    actions: {
        // 获取购物车列表的数据
        async getCartList({ commit }) {
            let result = await reqCartList();
            // 测试能否获取购物车的数据，（先到组件里发送action订单）
            // console.log(result);
            if (result.code == 200) {
                commit('GETCARTLIST', result.data)
            }
        }
    },
    //修改数据的地方
    mutations: {
        GETCARTLIST(state, cartList) {
            state.cartList = cartList;
        }
    },
    //存储数据的地方
    state: {
        cartList: [],
    },
    // 简化代码
    getters: {
        cartList(state) {
            return state.cartList[0] || {};
        }
    },
}