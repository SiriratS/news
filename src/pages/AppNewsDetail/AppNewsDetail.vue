<template>
  <div class="news-detail">
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
                src="https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/02/Tesla-Gigafactory-Berlin-Model-y.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1%22"
                alt="Apple working with a South Korean firm to add autopilot tech to Apple Car"
              >
            </div>
            <div class="news-detail__image__placeholder d-flex justify-content-between">
              <div class="d-flex flex-column">
                <h6>Holly Ellyatt</h6>
                <span class="font-size-small">CNBC</span>
              </div>
              <div class="d-flex flex-column justify-content-end">
                <span class="font-size-small">2022 Feb 22</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-6">
          <div class="news-detail__section">
            <h3 class="font-size-large">
              Panasonic's 25-megapixel GH6 is the highest
              resolution Micro Four Thirds camera yet - Engadget
            </h3>
            <p>
              Germany on Tuesday halted the certification of the Nord Stream 2 gas
              pipeline designed to bring natural gas from Russia directly to Europe,
              after Russian President Vladimir Putin recognized breakaway… [+3411 chars]
            </p>
            <div class="news-detail__more__detail">
              <a
                class="btn btn-outline-dark"
                target="_blank"
                href="https://www.engadget.com/panasonics-25-megapixel-gh-6-is-the-highest-resolution-micro-four-thirds-camera-yet-010021527.html"
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

export default {
  name: 'AppNewsDetail',
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "AppNewsDetail.scss";
</style>
