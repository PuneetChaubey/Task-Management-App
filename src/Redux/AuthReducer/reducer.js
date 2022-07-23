import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType";

const initialState = {
  token: "",
  isLoading: false,
  isError: false,
  isAuth: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload,
        isError: false,
        isAuth: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        token: "",
        isAuth: false,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading:true,
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError:false,
      }
    case SIGNUP_FAILURE:
      return { ...state, isLoading: false, isError: true }
    default:
      return state;
    
  }
};

export {reducer}
