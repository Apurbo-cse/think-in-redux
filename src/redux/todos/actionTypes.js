import { ADDED, COLORSSLECTED, DELETED, TOGGLED } from "./actions";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLORSSLECTED,
    payload: {
      todoId,
      color,
    },
  };
};


export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId,
    }
}
