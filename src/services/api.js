import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tindev-gumb.herokuapp.com'
});

export default api;