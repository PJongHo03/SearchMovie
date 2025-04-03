import "./style.css";

function Header() {
  return (
    <header>
      <div className="logo">MOVIEFINDER</div>
      <nav>
        <button className="filter-button">로그인</button>
      </nav>
    </header>
  );
}

export default Header;
