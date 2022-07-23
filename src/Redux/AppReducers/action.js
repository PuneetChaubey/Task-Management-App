import axios from "axios";
import {
  GET_TASK_FAILURE,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
} from "./actionType";



const getTaskRequest = (payload) => {
  return {
    type: GET_TASK_REQUEST,
    payload,
  };
};
const getTaskSucces = (payload) => {
  return {
    type: GET_TASK_SUCCESS,
    payload,
  };
};
const getTaskFailure = (payload) => {
  return {
    type: GET_TASK_FAILURE,
    payload,
  };
};

const getTasks = (payload) => (dispatch) => {
  dispatch(getTaskRequest());
  axios
    .get("http://localhost:8080/tasks")
    .then((res) => dispatch(getTaskSucces(res.data)))
    .catch((err) => dispatch(getTaskFailure(err)));
};


export {getTasks}