export function getValue(state) {
  return state.die.value;
}

export function getId(state) {
  // eslint-disable-next-line no-underscore-dangle
  return state.die._id;
}
