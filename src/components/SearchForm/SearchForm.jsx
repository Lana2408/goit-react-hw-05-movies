import React from "react";

const SearchForm = (handleSearchSubmit) =>{
  return (
    <form onSubmit={handleSearchSubmit}>
    <input
      type="text"
      name="query"
      autoComplete="off"
      autoFocus
      placeholder="Search"
    />
    <button type="submit">Submit</button>
  </form>
  );
}

export default SearchForm