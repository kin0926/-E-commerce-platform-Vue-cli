//home里的形式和这边的形式都可以
import { reqCartList, reqDeleteCart, reqCheckCart } from "@/api";
import { start } from "nprogress";
export default {
    //处理actions的地方，可以书写业务逻辑、处理异步
    actions: {
        // 获取购物车列表的数据
        async getCartList({ commit }) {
            let result = await reqCartList();
            // 测试能否获取购物车的数据，（先到组件里发送action订单）
            // console.log(result);
            if (result.code == 200) {
                commit("GETCARTLIST", result.data);
            }
        },
        // 删除购物车中的商品
        async getDeleteCart({ commit }, skuId) {
            console.log("仓库收到请求，开始删除特点商品数据");
            let result = await reqDeleteCart(skuId);
            if (result.code == 200) {
                return "OK";
            } else {
                console.log(result.code);
                return Promise.reject(new Error("faile"));
            }
        },
        // 删除全部选中的商品
        deleteAllCheckedCart({dispatch,getters}){
            let PromiseAll = [];
            getters.cartList.cartInfoList.forEach(item => {
                let promise = item.isChecked==1?dispatch('getDeleteCart',item.skuId):'';
                PromiseAll.push(promise)
            });
            return Promise.all(PromiseAll)
        },
        // 修改商品的选中状态
        async getCheckCart({ commit }, { skuId, isChecked }) {
            let result = await reqCheckCart(skuId, isChecked);
            if (result.code == 200) {
                return "ok";
            } else {
                return Promise.reject(new Error("faile"));
            }
        },
        // 修改全部商品的选中状态
        getAllCartChecked({ dispatch, state }, isChecked) {
            let promiseAll = [];
            state.cartList[0].cartInfoList.forEach((item) => {
                let promise = dispatch("getCheckCart", { skuId: item.skuId, isChecked: isChecked });
                promiseAll.push(promise);
            });
            // 最终返回结果,这里的Promise是大写的，和上面的是不一样的
            return Promise.all(promiseAll);
        },
    },
    //修改数据的地方
    mutations: {
        GETCARTLIST(state, cartList) {
            state.cartList = cartList;
        },
    },
    //存储数据的地方
    state: {
        cartList: [],
    },
    // 简化代码
    getters: {
        cartList(state) {
            return state.cartList[0] || {};
        },
    },
};
