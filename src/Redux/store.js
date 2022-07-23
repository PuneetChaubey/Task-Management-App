import { applyMiddleware, combineReducers, compose,legacy_createStore } from "redux";
import thunk from "redux-thunk"
import { reducer as AuthReducer } from "./AuthReducer/reducer"
import {reducer as AppReducers} from "./AppReducers/reducer"


const rootReducer = combineReducers({AppReducers,AuthReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };