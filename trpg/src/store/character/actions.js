import api from '../../api/api';

export async function loadCharacter({ commit }, id) {
  return api.getCharacter(id)
    .then((c) => {
      commit('UPDATE_CHARACTER', c);
    }).catch((err) => {
      console.error(err);
    });
}
