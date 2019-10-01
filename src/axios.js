import Axios from 'axios';

const axios = {
    axiosForUsers: Axios.create({
        baseURL: 'https://uinames.com/api/',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        responseType: 'json'
    }),
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