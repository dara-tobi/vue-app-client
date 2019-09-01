import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/users'
import transaction from './modules/transactions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    transaction
  }
})
