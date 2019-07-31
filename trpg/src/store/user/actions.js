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

export async function disconnect({ commit }) {
  return new Promise((resolve) => {
    commit('AUTH_LOGOUT');
    resolve();
  });
}

export async function newCharacter({ commit, state }, characterName) {
  const res = await api.postCharacter(characterName)
    .catch((err) => {
      console.error(err);
    });

  // eslint-disable-next-line no-underscore-dangle
  await api.patchUser(state.info._id, { characterid: res._id })
    .catch((err) => {
      console.error(err);
    });

  commit('ADD_CHARACTER', { character: res });
}

export async function newDice({ commit, state }, diceid) {
  // eslint-disable-next-line no-underscore-dangle
  await api.patchUser(state.info._id, { diceid })
    .catch((err) => {
      console.error(err);
    });

  commit('UPDATE_DICE', { diceid });
}

export async function fetchCharacters({ commit, state }) {
  // eslint-disable-next-line no-underscore-dangle
  return api.getUser(state.info._id, true, false)
    .then((res) => {
      commit('UPDATE_CHARACTERS', { characters: res });
    }).catch(err => console.error(err));
}
