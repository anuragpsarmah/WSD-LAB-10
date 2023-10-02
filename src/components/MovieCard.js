import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Rated: {movie.Rated}</p>
      <p>Plot: {movie.Plot}</p>
    </div>
  );
};

export default MovieCard;
