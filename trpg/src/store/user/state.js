export default {
  token: localStorage.getItem('user-token') || '',
  status: 'pending',
  user: JSON.parse(localStorage.getItem('user-info')) || {
    _id: '',
    name: '',
    characters: [],
    dice: '',
  },
};
