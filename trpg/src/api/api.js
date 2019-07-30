import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000';
const AUTH_URL = `${API_URL}/auth/`;
const DICE_URL = `${API_URL}/api/dice/`;
const CHARACTER_URL = `${API_URL}/api/characters/`;

const encodeForm = data => Object.keys(data)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  .join('&');

export default class APIService {
  static async postLogin(credentials) {
    return axios.post(`${AUTH_URL}login`,
      encodeForm(credentials),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(res => res.data);
  }

  // Thoses functions have to be tested again
  static async getDice() {
    return axios.get(DICE_URL)
      .then(res => res.data)
      .catch(err => console.log(err));
  }

  static async putDie(id) {
    return axios.put(`${DICE_URL}${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  }

  static async getCharacter(id) {
    return axios.get(`${CHARACTER_URL}${id}`, {
      params: {
        withDetails: '1',
      },
    })
      .then(res => res.data)
      .catch(err => console.log(err));
  }

  static async patchCharacter(id, chara) {
    return axios.patch(`${CHARACTER_URL}${id}`, chara)
      .then(res => res.data)
      .catch(err => console.log(err));
  }

  // static async postDie() {}
}
