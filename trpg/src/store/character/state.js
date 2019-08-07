export default {
  current: {
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
    inventory: {
      fortune: 1,
      equipements: [
        {
          name: 'Sac à dos',
          effect: '',
          bonus: '',
          quantity: 1,
        },
        {
          name: 'Cartes à jouer',
          effect: 'Idéal pour tuer le temps',
          bonus: '',
          quantity: 48,
        },
      ],
    },
  },
};
