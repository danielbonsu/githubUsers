import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootreducer from "./redux/reducers/index";
import ReduxLogger from "redux-logger";

const middleWares = [thunk, ReduxLogger];

const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);

export default store;
