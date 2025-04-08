import MovieCard from "./movieCard";
import axiosInstance from "../api/tmdb";
import { useEffect, useState } from "react";

function MovieCards() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handleMovie = (movieList) => {
    const updateMovieList = movieList.map((movie) => ({
      title: movie.title,
      year: movie.release_date.slice(0, 4),
      rating: movie.vote_average.toFixed(1),
      posterUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
    }));

    setMovies((prev) => [...prev, ...updateMovieList]);
  };

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axiosInstance.get("trending/movie/day", {
          params: { page: page },
        });
        console.log(res.data.results);

        handleMovie(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, [page]);

  return (
    <div className="movie-grid">
      {movies.map((movie, movieIndex) => (
        <MovieCard
          key={movieIndex}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          posterUrl={movie.posterUrl}
        />
      ))}
      <div className="load-more-wrapper">
        <button
          className="load-more-button"
          onClick={() => setPage((prev) => prev + 1)}
        >
          더 보기
        </button>
      </div>
    </div>
  );
}

export default MovieCards;
