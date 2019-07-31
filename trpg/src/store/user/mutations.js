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
    state.user = user;
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
    state.user = {
      _id: '',
      name: '',
      characters: [],
      dice: '',
    };
  },
  ADD_CHARACTER: (state, { character }) => {
    state.user.characters.push(character);
  },
  UPDATE_CHARACTERS: (state, { characters }) => {
    state.user.characters = characters;
  },
};
