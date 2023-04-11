import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: {}
  },
  mutations: {
    user(state, obj) {
      state.user = obj
    }
  },
  getters: {},
  actions: {}
})

export default store
