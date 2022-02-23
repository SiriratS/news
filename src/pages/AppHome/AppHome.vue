<template>
  <div class="container-fluid" v-if="dataReady">
    <div class="row">
      <div class="col-sm-12 col-lg-4 col-md-6" v-for="(item, index) in newsItems" :key="item.title">
        <NewsItem
          v-bind:data="item"
          v-bind:index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NewsItem from './components/NewsItem/NewsItem.vue';
import $api from '../../api/api';

export default {
  name: 'AppHome',
  components: {
    NewsItem,
  },

  data() {
    return {
      dataReady: false,
      newsItems: [],
      sources: [],
    };
  },

  async mounted() {
    this.newsItems = await $api.headline.find();
    this.sources = await $api.source.get();
    this.dataReady = true;
  },
};
</script>
