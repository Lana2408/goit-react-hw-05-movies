import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const reviewsData = await getMoviesReviews(movieId);
        setReviews(reviewsData.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h1>Reviews Page</h1>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, id, content }) => (
            <li key={id}>
              <p>
                <b>Author:</b> {author}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
