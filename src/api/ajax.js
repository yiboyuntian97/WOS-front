/**
 * ajax请求函数模块
 * 返回值是promise对象(异步返回的数据是response.data)
 */
import axios from 'axios'
export default function ajax (url,data={},type='GET') {

    return new Promise(function(resolve,reject){
        // 执行异步ajax请求
        let promise
        if(type == 'GET') {
            // 准备URL query参数数据
            let dataStr = '' // 数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if(dataStr !== '') {
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                url = url + '?' +dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        }else{
            // 发送post请求
            promise = axios.post(url,data)
        }
        // 成功了调用resolve()
        promise.then(function(response){
            resolve(response.data)
        })
        .catch(function(error){
            reject(error)
        })
        // 失败了调用reject()
    })

    // return new Promise (function(resolve,reject) {

        // return promise
        // promise.then(response => {
        //     resolve(response.data)
        // }).catch(error => {
        //     reject(error)
        // })
    // })
}