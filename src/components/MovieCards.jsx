import MovieCard from "./movieCard";
import axiosInstance from "../api/tmdb";
import { useEffect, useState } from "react";

function MovieCards() {
  const [movies, setMovies] = useState([]);

  const handleMovie = (movieData) => {
    setMovies(() => {
      const MovieList = [
        {
          title: movieData.title,
          year: movieData.release_date,
          rating: movieData.vote_average,
          posterUrl: `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`,
        },
      ];
      return MovieList;
    });
  };

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axiosInstance.get("trending/movie/day", {
          params: {
            page: 1,
          },
        });

        handleMovie(res.data.results[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  console.log(movies);

  return (
    <div className="movie-grid">
      {movies.length > 0 && (
        <MovieCard
          title={movies[0].title}
          year={movies[0].year}
          rating={movies[0].rating}
          posterUrl={movies[0].posterUrl}
        />
      )}
      <MovieCard
        title="레옹"
        year="1994"
        rating="8.5"
        posterUrl="/placeholder-image.jpg"
      />
    </div>
  );
}

export default MovieCards;
