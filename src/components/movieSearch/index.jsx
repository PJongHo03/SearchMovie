import "./style.css";
import { useState } from "react";
import axiosInstance from "../../api/tmdb";

function MovieSearch({ searchMovieApi, setMovies }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    searchMovieApi(query, setMovies);
    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <main>
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="영화 제목, 배우, 감독 검색..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search-button" onClick={handleSearch}>
            검색
          </button>
        </div>
      </div>

      {/* <div className='filter-section'>
        <button className='filter-button active'>전체</button>
        <button className='filter-button'>액션</button>
        <button className='filter-button'>코미디</button>
        <button className='filter-button'>로맨스</button>
        <button className='filter-button'>SF</button>
        <button className='filter-button'>호러</button>
      </div> */}
    </main>
  );
}

export default MovieSearch;
