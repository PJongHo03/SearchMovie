import MovieCard from "./movieCard";
import axiosInstance from "../api/tmdb";
import { useEffect, useState } from "react";

function MovieCards() {
  const [movie, setMovie] = useState(null);

  const handleMovie = (getmovie) => {
    setMovie(getmovie);
  };

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axiosInstance.get("trending/movie/day", {
          params: {
            page: 1,
          },
        });

        const firstMovie = res.data.results[0];
        handleMovie(firstMovie);
      } catch (error) {
        console.log(error);
      }
    };

    getApi();
  }, []);

  return (
    <div className="movie-grid">
      {movie && (
        <MovieCard
          title={movie.title}
          year={movie.release_date.slice(0, 4)}
          rating={movie.vote_average.toFixed(1)}
          posterUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
