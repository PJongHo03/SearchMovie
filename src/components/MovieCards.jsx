import MovieCard from "./movieCard";

function MovieCards() {
  return (
    <div className="movie-grid">
      <MovieCard
        title="매트릭스"
        year="1999"
        rating="8.7"
        posterUrl="/placeholder-image.jpg"
      />
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
