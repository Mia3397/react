import axios from "../axios";

const api = {
    getUsers: (params) => axios.get('/', {params})
};

export default api;