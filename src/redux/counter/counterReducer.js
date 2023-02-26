import { INCREMENT, DECREMENT } from "./actionType";
const intitialState = {
  value: 0,
};

const counterReducer = (state = intitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: action.value + 1,
      };

    case DECREMENT:
      return {
        ...state,
        value: action.value - 1,
      };

    default:
      return state;

  }
};

export default counterReducer;

