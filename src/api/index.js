//API进行统一管理，即对请求接口统一管理
import requests from "./request";

//首页三级分类接口
export const reqCateGoryList = () => {
    return requests({
        //因为baseURL里自动携带了/api，所以这里不用加上/api。如果那边没有这边就要加上
        //method指什么请求
        url: '/product/getBaseCategoryList',
        method: 'GET'
    })
}