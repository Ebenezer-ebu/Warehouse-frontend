import { SET_AUTHED_USER, WHICH_USER } from "../actions/user";

export default function authUser(state = {}, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.info;
    default:
      return state;
  }
}
