import axiosInstance from "../api/tmdb";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import MovieSearch from "./movieSearch";

function MovieCards() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const movieList = movies.map((movie) => ({
    title: movie.title,
    year: movie.release_date.slice(0, 4),
    rating: movie.vote_average.toFixed(1),
    posterUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
  }));

  const appendMovie = (list) => {
    setMovies((prev) => [...prev, ...list]);
  };

  const searchMovieApi = async (query) => {
    try {
      const res = await axiosInstance.get("search/movie", {
        params: {
          include_adult: false,
          query: query,
          page: 1,
        },
      });
      setMovies(res.data.results);
    } catch (error) {
      console.log("오류 >>> ", error);
    }
  };

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axiosInstance.get("trending/movie/day", {
          params: { page },
        });
        appendMovie(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, [page]);

  return (
    <>
      <MovieSearch searchMovieApi={searchMovieApi} />
      <MovieList movies={movieList}>
        <div className='load-more-wrapper'>
          <button
            className='load-more-button'
            onClick={() => setPage((prev) => prev + 1)}
          >
            더 보기
          </button>
        </div>
      </MovieList>
    </>
  );
}

export default MovieCards;
