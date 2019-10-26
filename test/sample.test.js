import {mount} from '@vue/test-utils';

import App from '../src/App.vue';

describe('test', () => {
  test('App snapshot', () => {
    const wrapper = mount(App)
    expect(wrapper.element).toMatchSnapshot()
  })
})