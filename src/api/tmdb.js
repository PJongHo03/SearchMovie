import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const baseUrl = "https://api.themoviedb.org/3/";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
    language: ko - KR,
  },
});

export default axiosInstance;