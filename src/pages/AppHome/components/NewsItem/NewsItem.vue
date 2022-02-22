<template>
    <div class="news-item">
      <router-link to="/news/0">
      <div class="news-item__overlay">
    <img
      src="https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/02/Tesla-Gigafactory-Berlin-Model-y.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1%22"
      alt="Apple working with a South Korean firm to add autopilot tech to Apple Car"
    >
      </div>
      <div class="news-item__title">
        <span class="font-size-small">2022 Feb 22</span>
        <p>Apple working with a South Korean firm to add autopilot tech to Apple Car</p>
      </div>
      <div class="news-item__author">
        <span>Oliver Haslam</span>
      </div>
      <div class="news-item__hover d-flex flex-column justify-content-between">
        <span class="d-flex justify-content-end">→</span>
        <p class="d-flex">
          The home improvement retailer is gearing up for spring
          and trying to prove to investors it can keep momentum going.
        </p>
      </div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'NewsItem',
};
</script>

<style lang="scss" scoped>
@import "NewsItem.scss";
</style>
