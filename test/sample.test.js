import {mount} from '@vue/test-utils';

import App from '../src/App.vue';
import HelloWorld from '../src/components/HelloWorld.vue';

describe('test', () => {
  test('App snapshot', () => {
    const wrapper = mount(App);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('HelloWorld snapshot', () => {
    const wrapper = mount(HelloWorld, {
      propsData: {
        msg: 'test',
        val: 123,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
