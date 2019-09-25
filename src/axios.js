import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://uinames.com/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    responseType: 'json'
});

export default axios;