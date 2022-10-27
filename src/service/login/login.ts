import dwtRequest from '../index'

import { IAccount, IDataType, ILoginRequest } from './types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/' //用法： role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return dwtRequest.post<IDataType<ILoginRequest>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return dwtRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenuInfoById(id: number) {
  return dwtRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
