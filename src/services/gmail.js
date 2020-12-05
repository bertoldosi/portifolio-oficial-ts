import axios from "axios";


const api = axios.create({
  baseURL: 'https://portifolio-oficial-backend.herokuapp.com',
});

export default api;
