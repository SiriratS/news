import { shallowMount } from '@vue/test-utils';
import AppHeader from './AppHeader.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'news';
    const wrapper = shallowMount(AppHeader, {
      props: { name },
    });
    expect(wrapper.text()).toMatch(name);
  });
});
