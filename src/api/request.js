import axios from "axios";
//引入进度条
import nprogress from 'nprogress';
//引入进度条样式，想要修改进度条默认样式可以去下面的css里改
import "nprogress/nprogress.css";
//这里使用进度条插件的2个方法，1、start（进度条开始）  2、done（进度条结束）

//使用axios的create方法
const requests = axios.create({
        baseURL: '/api',
        timeout: 5000,
    })
    //配置请求拦截器
requests.interceptors.request.use(config => {
        //在发送请求前，开启进度条
        nprogress.start();
        return config;
    })
    //配置响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (error) => {
    //失败的回调函数
    console.log("响应失败" + error)
    return Promise.reject(new Error('fail'))

})

//对外暴露
export default requests;