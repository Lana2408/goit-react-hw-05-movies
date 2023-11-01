import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1506bdd52815c2ce0e68da89eca8a5c9';
axios.defaults.params = {
  api_key: API_KEY,
};


export const getMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/all/day`);
  return data
};

export const getMoviesById = async (moviesId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${moviesId}`)
  return data 
};

export const getMoviesCast = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const getMoviesReviews = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews`
  );
  return data;
};
