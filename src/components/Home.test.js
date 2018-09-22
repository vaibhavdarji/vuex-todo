import { shallow } from 'vue-test-utils';
import Home from './Home';
import TodoForm from './TodoForm';
import Todos from './Todos';
import store from '../store';

describe('Home.vue', () => {
  it('renders', () => {
    store.dispatch = jest.fn();
    const wrapper = shallow(Home);
    expect(wrapper.find(TodoForm).vm).toBeDefined();
    expect(wrapper.find(Todos).vm).toBeDefined();
  });
});
