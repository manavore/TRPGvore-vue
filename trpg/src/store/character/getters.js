export function getCharacter(state) {
  return state.current;
}

export function getCharacterDetails(state) {
  return state.current.details;
}

export function getCharacterName(state) {
  return state.current.name;
}

export function getCharacterAbilities(state) {
  return state.current.abilities;
}

export function isCharacterSelected(state) {
  // eslint-disable-next-line no-underscore-dangle
  return !!state.current._id;
}

export function getEquipements(state) {
  return state.current.inventory.equipements;
}
