import { DDECREMENT, DINCREMENET } from "./actionTypes";

const initialState = {
    value: 0,
};

const dynaminCounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DINCREMENET:
            return {
                ...state,
                value: state.value + action.payload.value,
            };

        case DDECREMENT:
            return {
                ...state,
                value: state.value - action.payload.value,
                
            };

        default:
            return state;
    }
};

export default dynaminCounterReducer;
