import axiosInstance from "../api/tmdb";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import MovieSearch from "./movieSearch";
import Header from "./header";
import { getApi, searchMovieApi } from "../api/moviesApi.js";

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

  useEffect(() => {
    getApi(page, appendMovie);
  }, [page]);

  return (
    <>
      <Header
        page={() => {
          setMovies([]);
          setPage(1);
          getApi(page, appendMovie);
        }}
      ></Header>
      <MovieSearch searchMovieApi={searchMovieApi} setMovies={setMovies} />
      <MovieList movies={movieList}>
        <div className="load-more-wrapper">
          <button
            className="load-more-button"
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
