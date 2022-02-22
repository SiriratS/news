import { shallowMount } from '@vue/test-utils';
import AppHome from './AppHome.vue';

describe('AppHome.vue', () => {
  it('it should be renders', () => {
    const wrapper = shallowMount(AppHome);
    expect(wrapper).toBeDefined();
  });
});
