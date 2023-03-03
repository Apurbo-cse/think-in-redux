import { DDECREMENT, DINCREMENET } from "./actionTypes";

const initialState = {
    value: 20,
};

const dynaminCounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DINCREMENET:
            return {
                ...state,
                value: state.value + 1,
            };

        case DDECREMENT:
            return {
                ...state,
                value: state.value - 1,
            };

        default:
            return state;
    }
};

export default dynaminCounterReducer;
