import React, { useEffect, useState } from "react";

const API_KEY = "32937196";
const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.Title}</h1>
          <p>Year: {movie.Year}</p>
          <p>Rated: {movie.Rated}</p>
          <p>Plot: {movie.Plot}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetail;
