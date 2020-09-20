import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID NpoxN8zUHplvulTkSed3uWxAv-XCmXX92AU8s8vmEMk',
  },
});
