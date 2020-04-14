export const addTodo = value => ({
  type: "ADD_TODO",
  value
});

export const removeTodo = index => ({
  type: "REMOVE_TODO",
  index
});

export const addDone = value => ({
  type: "ADD_DONE",
  value
});

export const removeDone = index => ({
  type: "REMOVE_DONE",
  index
});

export const addDoing = value => ({
  type: "ADD_DOING",
  value
});

export const removeDoing = index => ({
  type: "REMOVE_DOING",
  index
});
