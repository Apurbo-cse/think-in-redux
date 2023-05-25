import {applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer);

export default store;
