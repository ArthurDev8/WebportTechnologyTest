import axios from '@/axios'

export default {
  namespaced: true,
  state: {
    user: {},
    users: [],
    error: null
  },
  actions: {
    async fetchAllUsers({ commit }) {
      try {
        const { data } = await axios.get('users');
        commit('fetchUsers', data)
      } catch (error) {
        commit('fetchFail', error)
      }
    },
    async fetchUser({ commit }, { id }) {
      try {
        const { data } = await axios.get(`users/${id}`);
        commit('fetchUser', data)
      } catch (error) {
        commit('fetchFail', error)
      }
    },
  },
  mutations: {
    fetchUsers(state, users) {
      state.users = users
    },
    fetchUser(state, user) {
      state.user = user
    },
    fetchItemsFail(state, err) {
      state.error = err
    },
  },
  getters: {
    users: ({ users }) => { return users },
    user: ({ user }) => { return user },
    error: ({ error }) => { return error }
  },
}