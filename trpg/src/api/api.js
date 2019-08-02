import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000';
const AUTH_URL = `${API_URL}/auth/`;
const USER_URL = `${API_URL}/api/users/`;
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

  // user

  static async getUser(id, optionChara, optionDice) {
    return axios.get(`${USER_URL}${id}`, {
      params: {
        withCharacters: optionChara,
        withDice: optionDice,
      },
    })
      .then(res => res.data.characters);
  }

  static async patchUser(id, { characterid, diceid }) {
    return axios.patch(`${USER_URL}${id}`,
      {
        characterid,
        diceid,
      })
      .then(res => res.data.characters);
  }

  // dice

  // Thoses functions have to be tested again
  static async getDie(id) {
    return axios.get(`${DICE_URL}${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  }

  static async postDie(id) {
    return axios.post(DICE_URL,
      {
        owner: id,
      })
      .then(res => res.data.savedDie)
      .catch(err => console.log(err));
  }

  static async putDie(id) {
    return axios.put(`${DICE_URL}${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  }

  // character

  static async getCharacter(id) {
    return axios.get(`${CHARACTER_URL}${id}`, {
      params: {
        withDetails: '1',
        withInventory: '1',
        withAbilities: '1',
      },
    })
      .then(res => res.data)
      .catch(err => console.error(err));
  }

  static async postCharacter(name) {
    console.log(name);

    return axios.post(`${CHARACTER_URL}`, { name })
      .then(res => res.data.savedCharacter);
  }

  static async patchCharacter(id, chara) {
    return axios.patch(`${CHARACTER_URL}${id}`, chara)
      .then(res => res.data)
      .catch(err => console.log(err));
  }

  // static async postDie() {}
}
