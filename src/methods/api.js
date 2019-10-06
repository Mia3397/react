import axios from '../axios';

const api = {
    getMusic: (params) => axios.axiosForMusic.get('', {params})
};

export default api;