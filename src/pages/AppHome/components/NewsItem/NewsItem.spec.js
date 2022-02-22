import { shallowMount } from '@vue/test-utils';
import NewsItem from './NewsItem.vue';

describe('NewsItem.vue', () => {
  it('it should be renders', () => {
    const wrapper = shallowMount(NewsItem);
    expect(wrapper).toBeDefined();
  });
});
