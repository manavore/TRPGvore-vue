export default {
  AUTH_REQUEST: (state) => {
    state.status = 'pending';
  },
  AUTH_SUCCESS: (state, { token, user }) => {
    state.status = 'success';
    localStorage.setItem('user-token', token);
    // todo check if necessary to store this? Forgot why I did it ^^'
    localStorage.setItem('user-info', JSON.stringify(user));
    state.token = token;
    state.info = user;
  },
  AUTH_ERROR: (state) => {
    state.status = 'error';
    localStorage.removeItem('user-token');
    localStorage.removeItem('user-info');
  },
  AUTH_LOGOUT: (state) => {
    state.status = 'pending';
    localStorage.removeItem('user-token');
    localStorage.removeItem('user-info');
    state.token = '';
    // Clearing the user  data
    state.info = {
      _id: '',
      name: '',
      characters: [],
      dice: '',
    };
  },
  ADD_CHARACTER: (state, { character }) => {
    state.info.characters.push(character);
  },
  UPDATE_CHARACTERS: (state, { characters }) => {
    state.info.characters = characters;
  },
  UPDATE_DICE: (state, { diceid }) => {
    state.info.dice = diceid;
  },
};
