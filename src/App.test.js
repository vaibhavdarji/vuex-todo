import { shallow, mount } from 'vue-test-utils';
import App from './App';
import { wrap } from 'module';
describe('App', () => {
  it('works', () => {
    const wrapper = shallow(App);
  });

  it('displays a header when component is mounted', () => {
    const wrapper = mount(App);
    expect(wrapper.find('.el-menu-demo').element.children.length).toBe(1);
  });

  it('displays a main container when component is mounted', () => {
    const wrapper = mount(App);
    expect(wrapper.find('.main-container').element.children.length).toBe(1);
  });
});
