import axios from "../axios";

const api = {
    getUsers: (params) => axios.axiosForUsers.get('', {params}),
    getMusic: (params) => axios.axiosForMusic.get('', {params})
};

export default api;