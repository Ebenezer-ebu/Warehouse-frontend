import { showLoading, hideLoading } from "react-redux-loading";
import { login } from "../utils/api";

export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(info) {
  return {
    type: SET_AUTHED_USER,
    info,
  };
}

function setCookie(token) {
  document.cookie = `user=${token}`;
}

export function handleLogin(info) {
  return (dispatch) => {
    dispatch(showLoading());
    return login(info)
      .then((data) => {
        dispatch(setAuthedUser(data));
        setCookie(data.accessToken);
        dispatch(hideLoading());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
