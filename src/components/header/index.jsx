import "./style.css";

function Header({ page }) {
  return (
    <header>
      <div className="logo">
        <button className="logo" onClick={page}>
          MOVIEFINDER
        </button>
      </div>
      <nav>
        <button className="filter-button">로그인</button>
      </nav>
    </header>
  );
}

export default Header;
