import api from '~/api'

const state = () => ({
  data: null
})

const mutations = {
  SET_DATA (store, data) {
    store.data = data
  }
}

const actions = {
  fetchData ({ commit }) {
    return api.contentful.homepage.fetchData()
      .then((response) => {
        commit('SET_DATA', response.data)
        return response.data
      })
      .catch()
  }
}

const getters = {
  getData (state) {
    return state.data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
