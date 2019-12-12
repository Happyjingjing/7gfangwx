const app = getApp()
const myUrl = require("./url.js");
import {
  fetch
} from "./ajax.js" //引入封装的请求

export function getBanner(parmas) {
  return fetch({
    url: myUrl.mainUrl + '/getbanners', //请求的域名
    data: parmas, //请求的参数
    method: 'GET', //请求的方法
    load: 0 //是否需要显示加载中的图标
  })
}

//特殊请求
export function addAdvertisements(params) {
  return fetch({
    url: myUrl.mainUrl,
    data: JSON.stringify(params),
    method: 'post',
    load: 0
  })
}