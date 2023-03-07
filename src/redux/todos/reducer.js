import { ADDED, CLEAR_COMPLETED, COLORS_SLECTED, COMPLETED, DELETED, TOGGLED } from "./actionTypes";
import { initialState } from "./initialState";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId,
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case COLORS_SLECTED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case COMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};


export default reducer;