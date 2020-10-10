import {
  GET_USERS,
  REMOVE_USER,
  ADD_USER,
  SET_LOADING,
} from "./types";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  try {
    setLoading(true);
    const URL = "https://api.github.com/users";
    const config = {
      headers: {
        Authorization:
          "token c8e882ad1c999d2698e0604ba6f0a02c62918857",
      },
    };
    const response = await axios.get(URL, config);

    dispatch({
      type: GET_USERS,
      payload: response.data,
    });

    setLoading(false);
  } catch (error) {
    console.log(error.message);
  }
};

export const removeUser = (id) => async (dispatch) => {
  dispatch({
    type: REMOVE_USER,
    payload: id,
  });
};

export const addUser = (userInfo) => async (dispatch) => {
  dispatch({
    type: ADD_USER,
    payload: userInfo,
  });
};

export const setLoading = (bool) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: bool,
  });
};
