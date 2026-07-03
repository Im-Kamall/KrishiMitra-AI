import axios from "axios";

const api = axios.create({
  baseURL: "https://krishimitra-ai-backend.onrender.com",
});

export default api;