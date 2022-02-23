<template>
    <div class="news-item">
      <router-link :to="'/news/' + index">
      <div class="news-item__overlay">
        <img
          :src="data.urlToImage"
          :alt="data.title"
          @error="replaceByDefault"
        >
      </div>
      <div class="news-item__title">
        <span class="font-size-small">{{ formatDate(data.publishedAt) }}</span>
        <p>{{ data.title }}</p>
      </div>
      <div class="news-item__author">
        <span>{{ data.author }}</span>
      </div>
      <div class="news-item__hover d-flex flex-column justify-content-between">
        <span class="d-flex justify-content-end">→</span>
        <p class="d-flex">{{ data.description }}</p>
      </div>
      </router-link>
    </div>
</template>

<script>
import defaultImage from '../../../../assets/default.jpeg';

export default {
  name: 'NewsItem',
  props: ['data', 'index'],
  methods: {
    formatDate(date) {
      return new Date(date).toDateString();
    },
    replaceByDefault(e) {
      e.target.src = defaultImage;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "NewsItem.scss";
</style>
