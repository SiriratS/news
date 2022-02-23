<template>
  <div class="news-detail" v-if="data">
    <div class="container-md">
      <div class="row">
        <div class="col-12">
          <div class="news-detail__panel">
            <button class="btn btn-outline-dark" @click="back()">← Go Back</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-lg-6">
          <div class="news-detail__image">
            <div class="news-detail__image__overlay">
              <img
                :src="data.urlToImage"
                :alt="data.title"
                @error="replaceByDefault"
              >
            </div>
            <div class="news-detail__image__placeholder d-flex justify-content-between">
              <div class="d-flex flex-column">
                <h6>{{ data.author }}</h6>
                <span class="font-size-small">{{ data.source.name }}</span>
              </div>
              <div class="d-flex flex-column justify-content-end">
                <span class="font-size-small">{{ formatDate(data.publishedAt) }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-6">
          <div class="news-detail__section">
            <h3 class="font-size-large">{{ data.title }}</h3>
            <p>{{ data.content }}</p>
            <div class="news-detail__more__detail">
              <a
                class="btn btn-outline-dark"
                target="_blank"
                :href="data.url"
              >
                See more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $api from '../../api/api';
import defaultImage from '../../assets/default.jpeg';

export default {
  name: 'AppNewsDetail',
  methods: {
    back() {
      this.$router.go(-1);
    },
    formatDate(date) {
      return new Date(date).toDateString();
    },
    replaceByDefault(e) {
      e.target.src = defaultImage;
    },
  },
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.data = $api.headline.findByIndex(this.$route.params.id);
    if (!this.data) {
      this.$router.push('/');
    }
  },
};
</script>

<style lang="scss" scoped>
@import "AppNewsDetail.scss";
</style>
