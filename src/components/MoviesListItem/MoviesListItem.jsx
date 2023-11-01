import React from 'react';
import {
  StyledMoviesListImg,
  StyledMoviesListItem,
} from './MoviesListItem.styled';
import { Link } from 'react-router-dom';

const MoviesListItem = ({ id, title, poster_path, name }) => {
  return (
    <Link to={`/movies/${id}`}>
      <StyledMoviesListItem>
        <a className="moviesListLink" href="">
          <StyledMoviesListImg
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
          <h2>{title || name}</h2>
        </a>
      </StyledMoviesListItem>
    </Link>
  );
};

export default MoviesListItem;
