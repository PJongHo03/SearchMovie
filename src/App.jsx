import Footer from "./components/footer";
import Header from "./components/header";
import MovieSearch from "./components/movieSearch";
import MovieCards from "./components/MovieCards.jsx";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <MovieSearch></MovieSearch>
      <MovieCards></MovieCards>

      <Footer></Footer>
    </div>
  );
}

export default App;
