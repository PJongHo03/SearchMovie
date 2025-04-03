import "./style.css";

function MovieSearch() {
  return (
    <main>
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="영화 제목, 배우, 감독 검색..."
          />
          <button className="search-button">검색</button>
        </div>
      </div>

      <div className="filter-section">
        <button className="filter-button active">전체</button>
        <button className="filter-button">액션</button>
        <button className="filter-button">코미디</button>
        <button className="filter-button">로맨스</button>
        <button className="filter-button">SF</button>
        <button className="filter-button">호러</button>
      </div>
    </main>
  );
}

export default MovieSearch;
