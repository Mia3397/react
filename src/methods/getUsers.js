import axios from "../axios";

const getUsers = (params) => axios.get('/', {params});

export default getUsers;