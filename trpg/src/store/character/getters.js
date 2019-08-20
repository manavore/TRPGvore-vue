export function getCharacter(state) {
  return state.current;
}

export function getCharacterId(state) {
  // eslint-disable-next-line no-underscore-dangle
  return state.current._id;
}

export function getCharacterName(state) {
  return state.current.name;
}

export function isCharacterSelected(state) {
  // eslint-disable-next-line no-underscore-dangle
  return !!state.current._id;
}
