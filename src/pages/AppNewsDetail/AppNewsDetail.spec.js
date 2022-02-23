import { shallowMount } from '@vue/test-utils';
import AppNewsDetail from './AppNewsDetail.vue';

describe('AppNewsDetail.vue', () => {
  it('it should be renders', () => {
    const wrapper = shallowMount(AppNewsDetail);
    expect(wrapper).toBeDefined();
  });
});
