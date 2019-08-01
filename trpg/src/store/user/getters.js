/*
export function someGetter( state ) {
}
*/
/*
const isAuthenticated = state => !!state.token;
const getToken = state => state.token;

export default {
  isAuthenticated,
  getToken,
};
*/
export function getToken(state) {
  return state.token;
}

export function getUserName(state) {
  return state.info.name;
}

export function getUserId(state) {
  // eslint-disable-next-line no-underscore-dangle
  return state.info._id;
}

export function getCharactersNames(state) {
  const c = state.info.characters;
  // eslint-disable-next-line no-underscore-dangle
  return c.map(a => ({ label: a.name, value: a._id }));
}

export function getStatus(state) {
  return state.status;
}

export function isAuthenticated(state) {
  return !!state.token;
}

export function getUserDiceId(state) {
  return state.info.dice;
}

export function hasUserDice(state) {
  return !!state.info.dice && state.info.dice.length > 10;
}
