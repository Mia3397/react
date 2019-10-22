import Axios from 'axios';

const axios = {
  axiosForMusic: Axios.create({
    baseURL: 'https://itunes.apple.com/search?',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    responseType: 'json'
  })
};

export default axios;
