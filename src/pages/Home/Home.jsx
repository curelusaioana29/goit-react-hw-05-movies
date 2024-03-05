import React, { Suspense, useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../components/Api/Api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    console.log('Fetching trending movies...');
    const fetchMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies Today</h1>
      <MoviesList movies={trendingMovies} />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Home;
