import api from '../../api/api';

export async function fetchToken({ commit }, credentials) {
  return api.postLogin(credentials)
    .then(
      (res) => {
        commit('AUTH_SUCCESS', res);
      },
    ).catch(() => {
      commit('AUTH_ERROR');
    });
}
