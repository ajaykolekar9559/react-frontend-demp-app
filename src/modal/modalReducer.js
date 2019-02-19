// Users Reducer
const modalReducerDefaultState = {
  testModal: false
};

export default (state = modalReducerDefaultState, action) => {
  switch (action.type) {
  case 'SITE_MODAL':
    return { ...state, ...action.modal };
  default:
    return state;
  }
};
