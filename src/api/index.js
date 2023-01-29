//API进行统一管理，即对请求接口统一管理
import requests from "./ajax";
import mockRequests from './mockAjax'

//首页三级分类接口
export const reqCateGoryList = () => {
    return requests({
        //因为baseURL里自动携带了/api，所以这里不用加上/api。如果那边没有这边就要加上
        //method指什么请求
        url: '/product/getBaseCategoryList',
        method: 'GET'
    })
}

//获取banner首页轮播图接口
export const reqGetBannerList = () => mockRequests.get('/banner.json');
// export const reqGetBannerList = () => {
//     return mockRequests({
//         url: '/banner',
//         method: 'GET'
//     })
// }

//这是获取Floor数据的接口
export const reqFloorList = () => mockRequests.get('/floor.json');

//search搜索模块接口  /api/list
export const reqGetSearchInfo = (params) => {
    return requests({
        url: '/list',
        method: 'POST',
        data: params
    })
}

//商品详情信息的接口 请求地址：/api/item/{ skuId } 请求方式get
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'GET' })

// 商品的添加到购物车部分 /api/cart/addToCart/{ skuId }/{ skuNum }  post请求
export const reqAddCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

//获取购物车列表  /api/cart/cartList  get请求
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'GET' })

// 删除购物车商品    /api/cart/deleteCart/{skuId}      请求：DELETE
export const reqDeleteCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'DELETE' })

// 切换商品选中状态    /api/cart/checkCart/{skuId}/{isChecked}   请求：GET
export const reqCheckCart = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})