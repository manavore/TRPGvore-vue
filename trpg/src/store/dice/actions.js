import api from '../../api/api';

export async function newDice({
  commit, dispatch, getters, rootGetters,
}) {
  // In case the user has no dice yet
  if (!rootGetters['user/hasUserDice']) {
    try {
      const die = await api.postDie(rootGetters['user/getUserId']);

      // eslint-disable-next-line no-underscore-dangle
      dispatch('user/newDice', die._id, { root: true });

      commit('UPDATE_DICE', { die });

      return die;
    } catch (err) {
      console.error(err);
    }
  }

  if (!getters.getValue || getters.getValue[0] === 0) {
    return api.getDie(rootGetters['user/getUserDiceId'])
      .then((die) => {
        commit('UPDATE_DICE', { die });
      }).catch(err => console.error(err));
  }

  return getters.getValue;
}

export async function rollDie({ commit, getters }, { number, kind }) {
  try {
    const die = await api.putDie(getters.getId, number, kind);

    commit('UPDATE_DICE', { die });
  } catch (err) {
    console.error(err);
  }
}
