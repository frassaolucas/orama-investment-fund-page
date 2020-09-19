import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full',
});

export default api;
