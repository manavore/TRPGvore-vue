export default {
  UPDATE_CHARACTER: (state, c) => {
    state.current = c;
  },
  UPDATE_NAME: (state, n) => {
    state.current.name = n;
  },
};
