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

      if (c.inventory) {
        state.current.inventory = c.inventory;
      }

      if (c.health) {
        state.current.health = c.health;
      }
    }
  },
  UPDATE_NAME: (state, n) => {
    state.current.name = n;
  },
  RESET_CHARACTER: (state) => {
    state.current = {
      _id: null,
      name: '',
      details: [
        {
          field: 'Âge',
          description: '',
        },
        {
          field: 'Taille',
          description: '',
        },
        {
          field: 'Corpulence',
          description: '',
        },
        {
          field: 'Genre',
          description: '',
        },
      ],
      abilities: [
        {
          name: 'Force',
          score: 11,
        },
        {
          name: 'Endurance',
          score: 11,
        },
        {
          name: 'Agilité',
          score: 11,
        },
        {
          name: 'Habileté',
          score: 11,
        },
      ],
    };
  },
};
