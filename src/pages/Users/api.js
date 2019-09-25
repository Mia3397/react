import axios from "../../axios";

const api = {
    getNames(params) {
        return axios.get('/', {params})
    }
};

export default api;