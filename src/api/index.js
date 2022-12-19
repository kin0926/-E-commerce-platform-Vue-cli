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