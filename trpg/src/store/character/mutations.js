export default {
  UPDATE_CHARACTER: (state, c) => {
    // No previous char, or swapping char
    // eslint-disable-next-line no-underscore-dangle
    if (!state.current._id || state.current._id !== c._id) {
      state.current = c;

    // Only update necessary fields
    } else {
      state.current.name = c.name;
      state.current.alive = c.alive;

      if (c.details) {
        state.current.details = c.details;
      }

      if (c.abilities) {
        state.current.abilities = c.abilities;
      }
    }
  },
  UPDATE_NAME: (state, n) => {
    state.current.name = n;
  },
};
