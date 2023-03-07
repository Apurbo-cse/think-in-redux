import { ADDED, TOGGLED } from "./actions"

export const added = (todoText) => {
    return {
        type:ADDED,
        payload:todoText
    }
}

export const toggled = (todoId) => {
    return {
        type:TOGGLED,
        payload:todoId
    }
}

