import React, { useState, useEffect } from 'react';
import { getMovies } from 'services/movie-api';

import MoviesList from 'components/MoviesList/MoviesList';
import { Watch } from 'react-loader-spinner';
import ErrorMessage from 'components/ErrorMessage';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesTrend = async () => {
    try {
      setIsLoading(true);
      const response = await getMovies();
      const moviesTrend = response.results;
      // console.log(moviesTrend);
      setTrendMovies(moviesTrend);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMoviesTrend();
  }, []);



  return (
    <>
      <h1 className="title">Trending Today</h1>
      {isLoading && (
        <div>
          <Watch />
        </div>
      )}
      {error && <ErrorMessage message={error} />}
      <MoviesList trendMovies={trendMovies} />
    </>
  );
};

export default HomePage;
