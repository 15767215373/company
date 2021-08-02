import axios from 'axios'
import { config } from 'process';
const beforeUrl = "https://www.baidu.com";
// http request 请求拦截器
axios.interceptors.request.use(
    config=>{
        config.headers = {
            // 'Content-Type':'application/json'
            'Content-Type':'application/x-www-form-urlencoded'
        };
        // 拼接URL
        config.url = beforeUrl + config.url;
        config.headers.Authorization=window.sessionStorage.getItem('token')
        return config;
    }
)

// http response 服务器响应拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // console.log('返回错误也事先经过这里');
        return Promise.reject(error);;
    }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params
        })
        .then(response => {
            resolve(response.data);
        },err => {
            reject(err)
        })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.post(url,data)
        .then(response => {
            resolve(response.data);
        },err => {
            reject(err)
        })
    })
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/

export function put(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.put(url,data)
        .then(response => {
            resolve(response.data);
        },err => {
            reject(err)
        })
    })
}

/**
* 封装delete请求
* @param url
* @param data
* @returns {Promise}
*/

export function del(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.delete(url,data)
        .then(response => {
            resolve(response.data);
        },err => {
            reject(err)
        })
    })
}


// main.js入口文件
//引入axios
import axios from 'axios'
import {post,get,del,put} from '@/common/js/http'
//定义全局变量
Vue.prototype.post=post;

// 使用
let url = "https://www.baidu.com";
let params = {
	json_form:"",
	company_id:"",
	user_id: "",
}
this.post(url,params).then(res=>{})