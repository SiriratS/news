import axios from 'axios';
import Headline from './service/headline';
import Source from './service/source';

const $axios = axios.create({
  baseURL: 'https://newsapi.org/v2',
});

const API_KEY = '099148be22804e849a0c6fe022b7cf5e';

const $api = {
  headline: new Headline($axios, API_KEY),
  source: new Source($axios, API_KEY),
};

export default $api;
