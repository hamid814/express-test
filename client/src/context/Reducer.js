export default (state, action) => {
  switch (action.type) {
    case 'set-added-new':
      return {
        ...state,
        addedNew: action.payload
      }
    default:
      return state;
  }
};