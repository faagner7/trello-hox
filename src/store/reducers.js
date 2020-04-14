import { combineReducers } from "redux";

const INITIAL_STATE = {
  todo: [],
  doing: [],
  done: []
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, action.value]
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todo: state.todo.filter((task, ind) => ind !== action.index)
      };
    case "ADD_DONE":
      return {
        ...state,
        done: [...state.done, action.value]
      };
    case "REMOVE_DONE":
      return {
        ...state,
        done: state.done.filter((done, ind) => ind !== action.index)
      };
    case "ADD_DOING":
      return {
        ...state,
        doing: [...state.doing, action.value]
      };
    case "REMOVE_DOING":
      return {
        ...state,
        doing: state.doing.filter((doing, ind) => ind !== action.index)
      };
    default:
      return state;
  }
};

export default combineReducers({
  task: taskReducer
});
