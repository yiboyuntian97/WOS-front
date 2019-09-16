/*
包含n个接口请求函数的模块
函数的返回值：promise对象
*/
import ajax from './ajax'
const BASE_URL = 'http://localhost:8083'
//1.根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// export const reqAddress = (geohash) => ajax(BASE_URL+'/sell/buyer/product/list')
//2.获取食品分类列表
// export const reqFoodCategorys = () => ajax('/index_category')
export const reqFoodCategorys = (geohash) => ajax(BASE_URL+'/sell/buyer/product/list')
//3.根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax(BASE_URL + '/shops',{longitude,latitude})
//4.根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash,keyword) => {BASE_URL + '/search_shops',{geohash,keyword}}
//5.获取一次性验证码
// export const reqFoodCategorys = () => ajax('/index_category')
//6.用户名密码登录
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE_URL + '/login_pwd',{name,pwd,captcha},'POST')
//7.发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendCode',{phone})
// 8.手机号验证码登录
export const reqSmsLogin  = (phone,code) => ajax(BASE_URL + '/login_sms',{phone,code},'POST')
//9.根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/userInfo')
//10.用户登出
export const reqLogout = () => ajax(BASE_URL + '/logout') 
