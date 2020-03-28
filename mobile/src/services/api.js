import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.158.10.3:3333'
});

export default api;