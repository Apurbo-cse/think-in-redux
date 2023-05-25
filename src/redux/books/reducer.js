import { ADDED } from "./actionType";
import initialState from "./initialState";

const nextBookId = (books) => {
    const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
    return maxId + 1;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextBookId(state),
                    text:action.payload,
                    feature: false,
                },
            ];
        
        default:
            return state;    
    }
}

export default reducer;