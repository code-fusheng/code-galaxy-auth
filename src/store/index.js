import { createStore } from 'vuex'
import auth from './modules/auth' // auth 状态模块

export default createStore({
  modules: {
    auth
  }
})

