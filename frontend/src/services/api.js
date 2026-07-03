import axios from "axios";

const api = axios.create({
  baseURL: "https://krishimitra-ai-wd75.onrender.com",
});

export default api;