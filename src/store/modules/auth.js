import { login } from '@/api/auth'
import { PcCookie, Key } from '@/utils/cookie'

const state = {
  userInfo: PcCookie.get(Key.userInfoKey) ? JSON.parse(PcCookie.get(Key.userInfoKey)) : null, // 用户信息对象
  accessToken: PcCookie.get(Key.accessTokenKey),                                              // 访问令牌字符串
  refreshToken: PcCookie.get(Key.refreshTokenKey),                                            // 刷新令牌字符串
}

// 改变状态值
const mutations = {

  // 赋值用户状态
  SET_USER_STATE (state, data) {
    console.log('SET_USER_STATE', data)
    // 状态赋值
    const { userInfo, access_token, refresh_token } = data
    state.userInfo = userInfo
    state.accessToken = access_token
    state.refreshToken = refresh_token

    // 保存至 cookie 中
    PcCookie.set(Key.userInfoKey, userInfo)
    PcCookie.set(Key.accessTokenKey, access_token)
    PcCookie.set(Key.refreshTokenKey, refresh_token)
  },

  // 重置用户状态
  RESET_USER_STATE(state) {
    // 状态置空
    state.userInfo = null
    state.accessToken = null
    state.refreshToken = null
    // 移除cookie
    PcCookie.remove(Key.userInfoKey)
    PcCookie.remove(Key.accessTokenKey)
    PcCookie.remove(Key.refreshTokenKey)
  }

}

// 定义行为
const actions = {

  // 登录操作
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise(( resolve, reject ) => {
      login({ username: username.trim(), password: password }).then(res => {
        const { code, data } = res
        if(code === 200) {
          // 赋值
          commit('SET_USER_STATE', data)
        }
        resolve(res)
      }).catch(error => {
        // 重置状态
        commit('REST_USER_STATE')
        reject(error)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}

