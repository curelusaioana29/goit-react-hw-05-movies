import { lazy } from 'react';
import Cast from 'pages/Cast/Cast';
// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Nav from 'pages/Nav/Nav';
import Reviews from 'pages/Reviews/Reviews';
import NotFound from './NotFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Home = lazy(() => import('../pages/Home/Home'));
const Nav = lazy(() => import('../pages/Nav/Nav'));

export const App = () => {
  console.log('Rendering App...');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
