import React from 'react';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const handleSearchSubmit = event => {
    event.preventDefault();
  };

  return <SearchForm handleSearchSubmit={handleSearchSubmit} />;
};

export default Movies;
