import { shallow, shallowMount } from 'vue-test-utils';
import Todos from './Todos';
import store from '../store';
// import { GET_TODO } from '../actions';

describe('Todos', () => {
  it('renders', () => {
    store.replaceState({ todos: [{}] });
    store.dispatch = jest.fn();
    const wrapper = shallow(Todos, { store });
    expect(wrapper.element).toMatchSnapshot();
  });
});
