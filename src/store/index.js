import Vuex from 'vuex'

export default new Vuex.Store({ 
  state: {
    updateScores: false
  },
  mutations: {
    setUpdateScores(state, payload) {
      state.updateScores = payload
    }
  }
})