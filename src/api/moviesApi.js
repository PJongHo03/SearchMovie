import axiosInstance from "./tmdb.js";

const getApi = async (page, appendMovie) => {
  try {
    const res = await axiosInstance.get("trending/movie/day", {
      params: { page },
    });
    appendMovie(res.data.results);
  } catch (error) {
    console.log(error);
  }
};

const searchMovieApi = async (page, query, setMovies) => {
  try {
    const res = await axiosInstance.get("search/movie", {
      params: {
        include_adult: false,
        query: query,
        page,
      },
    });
    setMovies(res.data.results);
    console.log;
  } catch (error) {
    console.log("오류 >>> ", error);
  }
};

export { getApi, searchMovieApi };
