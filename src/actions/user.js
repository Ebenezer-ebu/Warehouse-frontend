import { showLoading, hideLoading } from "react-redux-loading";
import { login } from "../utils/api";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
// export const WHICH_USER = WHICH_USER;

export function setAuthedUser(info) {
  return {
    type: SET_AUTHED_USER,
    info,
  };
}

export function handleLogin(info) {
  return (dispatch) => {
    dispatch(showLoading());
    return login(info)
      .then((data) => {
        dispatch(setAuthedUser(data));
        dispatch(hideLoading());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
