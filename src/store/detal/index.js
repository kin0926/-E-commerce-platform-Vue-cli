//home里的形式和这边的形式都可以
import { reqGoodsInfo, reqAddCart } from '@/api'
export default {
    //处理actions的地方，可以书写业务逻辑、处理异步
    actions: {
        async getGoodInfo({ commit }, skuId) {
            let result = await reqGoodsInfo(skuId);
            console.log(result);
            if (result.code == 200) {
                commit('GETGOODSINFO', result.data)
            }
        },
        async reqAddCart({ commit }, { skuId, skuNum }) {
            let result = await reqAddCart(skuId, skuNum);
            console.log(result);
        }
    },
    //修改数据的地方
    mutations: {
        GETGOODSINFO(state, goodsInfo) {
            state.goodsInfo = goodsInfo;
        }
    },
    //存储数据的地方
    state: {
        goodsInfo: {}
    },
    // 简化代码
    getters: {
        categoryView(state) {
            return state.goodsInfo.categoryView || {}
        },
        skuInfo(state) {
            return state.goodsInfo.skuInfo || {}
        },
        spuSaleAttrList(state) {
            return state.goodsInfo.spuSaleAttrList || {}
        }
    },
}