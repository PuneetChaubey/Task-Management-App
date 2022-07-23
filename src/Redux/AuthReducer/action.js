import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionType";
import axios from "axios";

const loginRequest = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};
const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
const loginFailure = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
};
const signupRequest = (payload) => {
  return {
    type: SIGNUP_REQUEST,
    payload,
  };
};
const signupSuccess = (payload) => {
  return {
    type: SIGNUP_SUCCESS,
    payload,
  };
};

const signupFailure = (payload) => {
  return {
    type: SIGNUP_FAILURE,
    payload,
  };
};

const login = (payload) => dispatch => {
  dispatch(loginRequest());
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/login", payload)
    .then((res) => {
      dispatch(loginSuccess(res.data));
    return LOGIN_SUCCESS})
    .catch((err) => {
      dispatch(loginFailure(err));
    return LOGIN_FAILURE});
};

const singup = (payload) => (dispatch) => {
  console.log("pya:", payload)
  dispatch(signupRequest());
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/register", payload)
    .then((res) => {
      dispatch(signupSuccess(res.data));
    return SIGNUP_SUCCESS})

    .catch((err) => {
      dispatch(signupFailure(err));
      return SIGNUP_FAILURE
    });
};


export {login, singup}