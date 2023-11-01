import MoviesListItem from "components/MoviesListItem/MoviesListItem";
import React from "react";


const MoviesList = ({ trendMovies }) => {
  return (
    <ul className="moviesList">
    {trendMovies.map(movie => (
      <MoviesListItem
      id={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        name={movie.name}
        key={movie.id}
      />
    ))}
  </ul>
  );
}


export default MoviesList;