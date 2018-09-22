export const SET_LOADING = (state, flag) => {
  state.loading = flag;
};

export const SET_TODOS = (state, todos) => {
  state.todos = todos;
};

export const ADD_TODO_MUTATION = (state, todo) => {
  // state.todos.push({ ...todo, id: state.todos.length + 1 });
  state.todos.push(todo);
};

export const COMPLETE_TODO_MUTATION = (state, todo) => {
  state.todos.find(x => x.todo === todo).completed = true;
};

export const REMOVE_TODO_MUTATION = (state, todo) => {
  state.todos.splice(state.todos.indexOf(todo), 1);
};

export const GET_TODOS_MUTATION = (state, todos) => {
  return { ...state, todos };
};

export const UPDATE_TODO_MUTATION = (state, updatedTodo) => {
  Object.assign(
    state.todos,
    state.todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo))
  );
};
