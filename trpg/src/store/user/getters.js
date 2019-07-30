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
  return state.user.name;
}

export function getCharactersNames(state) {
  const c = state.user.characters;
  return c.map(a => a.name);
}

export function getStatus(state) {
  return state.status;
}

export function isAuthenticated(state) {
  return !!state.token;
}
