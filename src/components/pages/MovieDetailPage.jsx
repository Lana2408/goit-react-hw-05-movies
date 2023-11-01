import React, { useEffect, useRef, useState } from 'react';
import { useParams, NavLink, Route, Routes, Link } from 'react-router-dom';

import Cast from './CastPage';
import Reviews from './ReviewPage';
import { getMoviesById } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage';
import noImage from 'images/No-Image.svg.png';

import { StyledContainerMovie } from './CastPage.styled';

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  const fetchMovieById = async () => {
    try {
      setIsLoading(true);
      const movieById = await getMoviesById(movieId);

      setMovie(movieById);
      console.log(movieById);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieById();
  }, [movieId]);

  const { title, genres, poster_path, vote_average, overview } = movie;
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      <section>
        <div>
          {/* <GoBack backlinkhref={backlinkhref.current} /> */}
          {error && (
            <ErrorMessage
              message={`Sorry, but the searched movie was not found. Please try again later!`}
            />
          )}
          {isLoading && <Loader />}
          <StyledContainerMovie>
            <img
              src={poster_path ? IMAGE_BASE_URL + poster_path : noImage}
              alt={title}
              width="300px"
              loading="lazy"
            />
            <div>
              <h1>{title}</h1>
              <p>
                <b>User score:</b> {Math.round(vote_average * 10)}%
              </p>
              <h2>Overview:</h2>
              <p>{overview}</p>

              <h3>Genres:</h3>
              <p>
                {genres &&
                  genres.map(({ id, name }) => {
                    return <span key={id}>{name} </span>;
                  })}
              </p>
            </div>
          </StyledContainerMovie>
        </div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </section>
    </>
  );
};

export default MovieDetail;
