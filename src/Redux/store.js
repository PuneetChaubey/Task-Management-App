import { applyMiddleware, compose,legacy_createStore } from "redux";
import thunk from "redux-thunk"
import { reducer } from "./AuthReducer/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export { store };