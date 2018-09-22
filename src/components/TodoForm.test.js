import { mount, shallow, shallowMount } from 'vue-test-utils';
import store from '../store';
import TodoFrom from './TodoForm';
import { ADD_TODO } from '../actions';
import axios from 'axios';

describe('TodoForm.vue', () => {
  it('renders an input field', () => {
    const wrapper = shallow(TodoFrom);
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.find('input')).toBeDefined();
  });

  // describe('add Todo', () => {
  //   it('adds todo from value of input field, if enter key is pressed', done => {
  //     const spy = jest.spyOn(store, 'dispatch');
  //     const givenValue = 'Eat Subway ';
  //     const wrapper = mount(TodoFrom, { store });
  //     const input = wrapper.find('.todo-input');
  //     input.element.value = givenValue;
  //     input.trigger('input');
  //     input.trigger('keyup.enter');

  //     wrapper.vm.$nextTick(() => {
  //       expect(spy).toHaveBeenCalledWith({
  //         title: givenValue.trim()
  //       });
  //       done();
  //     });
  //   });
  // });
});
