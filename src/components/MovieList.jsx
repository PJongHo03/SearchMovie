import MovieCard from "./movieCard";

export default function MovieList({ children, movies }) {
  return (
    <div className='movie-grid'>
      {movies.map((movie, movieIndex) => (
        <MovieCard
          key={movieIndex}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          posterUrl={movie.posterUrl}
        />
      ))}
      {children}
    </div>
  );
}
