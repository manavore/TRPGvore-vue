export default {
  token: localStorage.getItem('user-token') || '',
  status: 'pending',
  info: JSON.parse(localStorage.getItem('user-info')) || {
    _id: '',
    name: '',
    characters: [],
    dice: '',
  },
};
