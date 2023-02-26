import { createStoreHook } from "react-redux";
import counterReducer from "./counter/counterReducer";


const store = createStore(counterReducer)

export default store;