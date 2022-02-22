<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-lg-4 col-md-6">
        <NewsItem />
      </div>
      <div class="col-sm-12 col-lg-4 col-md-6">
        <NewsItem />
      </div>
      <div class="col-sm-12 col-lg-4 col-md-6">
        <NewsItem />
      </div>
      <div class="col-sm-12 col-lg-4 col-md-6">
        <NewsItem />
      </div>
    </div>
  </div>
</template>

<script>
import NewsItem from './components/NewsItem/NewsItem.vue';

export default {
  name: 'AppHome',
  components: {
    NewsItem,
  },
};
</script>
