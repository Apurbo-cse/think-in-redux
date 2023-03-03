import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynaminCounterReducer from "./dynamicCounter/dynamicCounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynaminCounterReducer,
});

export default rootReducer;
