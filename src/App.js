import "./App.css";
import { useEffect, useState, useRef } from "react";
import { Header } from "./components/Header";
import { MovieCard } from "./components/MovieCard";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    inputRef.current.focus();
    setShowContent(false);
  }, []);

  const inputRef = useRef(null);

  const searchMovies = async (e) => {
    e.preventDefault();
    setShowContent(true);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=c65484d1bf6f0999ef34559d7f5865df&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <Header
        inputRef={inputRef}
        query={query}
        setQuery={setQuery}
        searchMovies={searchMovies}
      />
      {showContent && (
        <div className="main">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      )}
      <footer>
        <p>&copy; 2024 JohnsonCodes. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
