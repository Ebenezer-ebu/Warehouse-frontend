import { combineReducers } from "redux";
import authUser from "./authUser";
import items from "./items";
import transaction from "./transactions";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authUser,
  items,
  transaction,
  loadingBar: loadingBarReducer,
});
