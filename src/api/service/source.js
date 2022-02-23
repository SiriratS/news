export default class Source {
  constructor($axios, API_KEY) {
    this.$axios = $axios;
    this.API_KEY = API_KEY;
  }

  get() {
    return this.$axios.get(`sources?apiKey=${this.API_KEY}`);
  }
}
