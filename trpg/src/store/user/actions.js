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

export async function newCharacter({ commit, state }, characterName) {
  const res = await api.postCharacter(characterName)
    .catch((err) => {
      console.error(err);
    });

  // eslint-disable-next-line no-underscore-dangle
  await api.patchUser(state.user._id, res._id)
    .catch((err) => {
      console.error(err);
    });

  commit('ADD_CHARACTER', { character: res });
}

export async function fetchCharacters({ commit, state }) {
  // eslint-disable-next-line no-underscore-dangle
  return api.getUser(state.user._id, true, false)
    .then((res) => {
      commit('UPDATE_CHARACTERS', { characters: res });
    }).catch(err => console.error(err));
}
