// 引入mock模块
import Mock from "mockjs";
// 引入两个假数据（json、图片是默认暴露的，不像vue、js需要export暴露）
import banner from './banner.json';
import floor from './floor.json'

//使用Mock自带的mock方法，请求数据.--第一个是请求地址，第二个是请求数据
Mock.mock('/mock/banner.json', { code: 200, data: banner });
Mock.mock('/mock/floor.json', { code: 200, data: floor });