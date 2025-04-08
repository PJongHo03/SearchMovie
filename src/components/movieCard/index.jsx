import { useEffect } from "react";
import "./style.css";

function MovieCard({
  title = "제목없음",
  year = "????",
  rating = "?",
  posterUrl = "placeholder.jpg",
}) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={`${title} 포스터`} />
      </div>
      <div className="movie-info">
        <div className="movie-title">{title}</div>
        <div className="movie-year">{year}</div>
        <div className="movie-rating">
          <span className="star">★</span>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
