import axios from '@/axios'

export default {
  namespaced: true,
  state: {
    post: {},
    comment: {},
    posts: [],
    error: null
  },
  actions: {
    async fetchAllPosts({ commit }) {
      try {
        const { data } = await axios.get('posts');
        commit('fetchPosts', data)
      } catch (error) {
        commit('fetchFail', error)
      }
    },
    async fetchPost({ commit }, { id }) {
      try {
        const { data } = await axios.get(`posts/${id}`);
        commit('fetchPost', data)
      } catch (error) {
        commit('fetchFail', error)
      }
    },
    async fetchComment({ commit }, { id }) {
      try {
        let postId;
        if (Math.floor((id % 5) === 0)) {
          postId = Math.floor((id / 5))
        } else {
          postId = Math.floor((id / 5) + 1);
        }
        const { data } = await axios.get(`comments?postId=${postId}`);
        const result = data.filter((el) => el.id == id)
        commit('fetchComment', result)
      } catch (error) {
        commit('fetchFail', error)
      }
    },
    async createPost({ commit }, data) {
      try {
        await axios.post(`posts`, data);
        commit('createPost', data)
      } catch (error) {
        commit('fetchFail', error)
      }
    },
  },
  mutations: {
    fetchPosts(state, posts) {
      state.posts = posts
    },
    fetchPost(state, post) {
      state.post = post
    },
    fetchComment(state, comment) {
      state.comment = comment
    },
    fetchItemsFail(state, err) {
      state.error = err
    },
    createPost(state, data) {
      state.posts.unshift(data)
    }
  },
  getters: {
    posts: ({ posts }) => { return posts },
    post: ({ post }) => { return post },
    comment: ({ comment }) => { return comment },
    error: ({ error }) => { return error }
  },
}