export default class Headline {
  data;

  constructor($axios, API_KEY) {
    this.$axios = $axios;
    this.API_KEY = API_KEY;
  }

  async find() {
    try {
      const response = await this.$axios.get(`top-headlines?country=us&apiKey=${this.API_KEY}`);
      this.data = response.data.articles;

      return this.data;
    } catch (error) {
      return error;
    }
  }

  findByIndex(index) {
    return this.data?.find((_item, i) => i === +index);
  }
}
