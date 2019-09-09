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
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})
//4.根据经纬度和关键字搜索商铺列表
// export const reqAddress = () => {}
//5.获取一次性验证码
// export const reqAddress = () => {}