import api from '../../api/api';

export async function loadCharacter({ commit }, id) {
  return api.getCharacter(id)
    .then((c) => {
      commit('UPDATE_CHARACTER', c);
    }).catch((err) => {
      console.error(err);
    });
}

export async function editCharacter({ commit, state }, change) {
  // eslint-disable-next-line no-underscore-dangle
  return api.patchCharacter(state.current._id, change)
    .then((c) => {
      commit('UPDATE_CHARACTER', c);
    }).catch((err) => {
      console.error(err);
    });
}
