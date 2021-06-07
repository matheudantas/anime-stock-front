import axios from "axios";

const api = axios.create({
  baseURL: "https://anime-stock.herokuapp.com/api",
});

export default api;
