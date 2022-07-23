import { GET_TASK_FAILURE, GET_TASK_REQUEST, GET_TASK_SUCCESS } from "./actionType";

const initialState = {
    isLoading: false,
    isEror: false,
    tasks:[],
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TASK_REQUEST:
      return { ...state, isLoading: true, isEror: false };
    case GET_TASK_SUCCESS:
      return { ...state, isLoading: false, tasks: payload, isEror: false };
    case GET_TASK_FAILURE:
      return { ...state, isEror: true };
    default:
      return state;
  }
};

export {reducer}