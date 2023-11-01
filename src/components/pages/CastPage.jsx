import React from 'react';
import { Loader } from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'services/movie-api';
import { CastList } from './CastList';



const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  const fetchCast = async () => {
    try {
      setIsLoading(true);
      const response = await getMoviesCast(movieId);
      const castArr = response.cast;
      console.log(castArr);
      setCast(castArr);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCast();
  }, [movieId]);

  return (
    <>
    {isLoading && (
      <div>
        <Loader />
      </div>
    )}
    {error && <ErrorMessage message={error} />}
    <CastList cast={cast} />
  </>
    )
};

export default Cast;
