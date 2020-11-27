import axios from "axios";

const api_key = process.env.ACCESS_TOKEN_GITHUB
const username = 'bertoldosi'

const api = axios.create({
  baseURL: `https://api.github.com/users/${username}`,
});

export default api;
