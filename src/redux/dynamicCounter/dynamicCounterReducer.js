import { DECREMENT, INCREMENET } from "./actionTypes";

const initialState = {
    value: 20,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENET:
            return {
                ...state,
                value: state.value + ,
            };

        case DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            };

        default:
            return state;
    }
};

export default counterReducer;
