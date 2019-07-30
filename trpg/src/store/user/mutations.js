export default {
  AUTH_REQUEST: (state) => {
    state.status = 'pending';
  },
  AUTH_SUCCESS: (state, { token, user }) => {
    state.status = 'success';
    localStorage.setItem('user-token', token);
    localStorage.setItem('user-info', JSON.stringify(user));
    console.log(user);
    state.token = token;
    state.user = user;
  },
  AUTH_ERROR: (state) => {
    state.status = 'error';
    localStorage.removeItem('user-token');
    localStorage.removeItem('user-info');
  },
};
