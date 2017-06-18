import * as types from '../mutation-types'

const state = {
  name: 'YoBitch',
  count: 0
}

const getters = {}

const actions = {
  [types.ADD_COUNT_ASYNC] ({ commit, state }) {
    setTimeout(() => {
      commit(types.ADD_COUNT)
    }, 1000)
  }
}

const mutations = {
  [types.ADD_COUNT] (state) {
    state.count += 1
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
