import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://api.coinbase.com/v2',
  timeout: 5000,
});

export default axios;
