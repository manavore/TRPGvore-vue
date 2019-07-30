export default {
  AUTH_REQUEST: (state) => {
    state.status = 'pending';
  },
  AUTH_SUCCESS: (state, { token, user }) => {
    state.status = 'success';
    state.token = token;
    state.user = user;
  },
  AUTH_ERROR: (state) => {
    state.status = 'error';
  },
};
