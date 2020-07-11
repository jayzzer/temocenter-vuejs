import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: !!localStorage.getItem('isAuth'),
    authError: '',
  },
  actions: {
    auth({ commit }, { username, password }) {
      if (username !== 'demo' || password !== 'demo') {
        throw new Error('Неверный логин или пароль');
      }

      localStorage.setItem('isAuth', 'true');
      commit('setAuth', true);
    },
    logout({ commit }) {
      localStorage.removeItem('isAuth');

      commit('setAuth', false);
    },
  },
  mutations: {
    setAuth(state, value) {
      state.isAuth = value;
    },
  },
});
