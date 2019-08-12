/**
 * 通过mutation间接更新state多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_Categorys
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'
export default {
  // 异步获取地址
  async getAddress({
    commit,
    state
  }) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code == 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {
        address
      })
    }
  },
  // 异步食品分类列表
  async getCategorys({
    commit,
    state
  }) {
    // 发送异步ajax请求
    const result = await reqFoodCategorys()
    // 提交一个mutation
    if (result.code == 0) {
      const categorys = result.data
      commit(RECEIVE_Categorys, {
        categorys
      })
    }
  },
  // 异步商家列表
  async getShops({commit,state}){
      const {longitude,latitude} = state
      const result = await reqShops(longitude,latitude)
      if(result.code == 0) {
          const shops = result.data
          commit(RECEIVE_SHOPS,{shops})
      }
  }
}
