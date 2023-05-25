import { ADDED } from "./actionType";

export const added = (bookText) => {
    return {
        type: ADDED,
        payload: bookText,
    };
};

