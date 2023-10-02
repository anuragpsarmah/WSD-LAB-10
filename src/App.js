// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import MovieFilter from "./components/MovieFilter";
import MovieCard from "./components/MovieCard";

const movieCategories = ["All", "movie", "series"]; // Exclude 'episode' category

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState(""); // New state for user's search term
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "32937196"; // Replace with your actual OMDB API key
  const BASE_URL = "http://www.omdbapi.com";
  const initialPage = 1;

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const categoryParam =
        selectedCategory === "All"
          ? ""
          : `&type=${selectedCategory.toLowerCase()}`;
      const url = `${BASE_URL}/?apikey=${API_KEY}&s=${searchTerm}${categoryParam}&page=${initialPage}`;

      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          if (data.Search) {
            setMovies(data.Search);
            setLoading(false);
          }
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [selectedCategory, searchTerm]);

  return (
    <div className="App">
      <header className="navbar">
        <h1>MOVIE DETAILS</h1>
      </header><br/>
      <main>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div><br/>
        <div className="filter-bar">
          <MovieFilter
            categories={movieCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div><br/><hr/>
        <div className="movie-cards">
          {loading ? (
            <p>Loading...</p>
          ) : (
            movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
