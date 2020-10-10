import { combineReducers } from "redux";
import UsersReducers from "../reducers/UsersReducer";
import UIReducer from "./uiReducers";

export default combineReducers({
  allUsers: UsersReducers,
  uiActions: UIReducer,
});
