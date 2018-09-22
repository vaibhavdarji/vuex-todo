import axios from 'axios';
import {
  GET_TODOS_MUTATION,
  ADD_TODO_MUTATION,
  COMPLETE_TODO_MUTATION,
  REMOVE_TODO_MUTATION
} from '../constants';

const URL = 'http://localhost:5000/todos';
const config = { headers: { 'Content-Type': 'application/json' } };

const randomId = () =>
  Math.random()
    .toString()
    .substr(2, 10);

export const ADD_TODO = ({ commit }, todo) => {
  const newTodo = {
    value: todo,
    completed: false,
    editable: false,
    id: randomId()
  };
  axios.post(URL, newTodo).then(_ => commit('ADD_TODO_MUTATION', newTodo));
};

export const UPDATE_TODO = (context, todo) => {
  axios.put(`${URL}/${todo.id}`, todo, config).then(() => {
    context.commit('UPDATE_TODO_MUTATION', todo);
  });
};

export const COMPLETE_TODO = (context, todo) => {
  context.commit('COMPLETE_TODO_MUTATION', todo);
};

export const REMOVE_TODO = (context, todo) => {
  axios.delete(`${URL}/${todo.id}`).then(_ => {
    context.commit('REMOVE_TODO_MUTATION', todo);
  });
  // context.commit('REMOVE_TODO_MUTATION', todo);
};

export const GET_TODO = context => {
  context.commit('SET_LOADING', true);
  axios
    .get(URL)
    .then(response => response.data)
    .then(todos => {
      context.commit('SET_TODOS', todos);
      context.commit('SET_LOADING', false);
    });
};
