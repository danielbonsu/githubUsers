import {
  GET_USERS,
  REMOVE_USER,
  ADD_USER,
  SET_LOADING,
} from "../actions/types";

const initialState = {
  users: null,
  loading: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };

    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(
          (user) => user.id !== payload
        ),
      };

    case ADD_USER:
      return {
        ...state,
        users: state.users,
        payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
};
