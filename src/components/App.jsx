import { StyledAppContainer } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import Layout from './SharedLayout/SharedLayout';
import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetailPage';


export const App = () => {
  return (
    <>
      <StyledAppContainer>
      <Layout />
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetail />} />
        </Routes>
      </StyledAppContainer>
    </>
  );
};
