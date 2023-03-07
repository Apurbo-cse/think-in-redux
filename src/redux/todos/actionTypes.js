import { ADDED, COLORSSLECTED, TOGGLED } from "./actions";

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
