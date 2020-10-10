import { TOGGLE_MODAL } from "../actions/types";

const initialState = {
  showModal: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      };
    default:
      return state;
  }
};
