import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuInfoById
} from '@/service/login/login'
import { IAccount } from '@/service/login/types'
import LocalCache from '@/utils/cache'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      // console.log(token)

      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      // console.log(userInfo)
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      //登录实现
      const loginRequest = await accountLoginRequest(payload)
      // console.log(loginRequest)
      const { id, token } = loginRequest.data
      commit('changeToken', token)
      LocalCache.setCache('token', token)

      //请求用户信息
      const userInfoRequest = await requestUserInfoById(id)
      const userInfo = userInfoRequest.data
      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      //请求用户菜单
      const userMenuRequest = await requestUserMenuInfoById(userInfo.role.id)
      const userMenus = userMenuRequest.data
      commit('changeUserMenu', userMenus)
      LocalCache.setCache('userMenus', userMenus)

      //跳转首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = LocalCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = LocalCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenu', userMenus)
      }
    }
  }
}
export default loginModule
