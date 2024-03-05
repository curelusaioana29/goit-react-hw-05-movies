// Movies.jsx
import React, { useEffect, useState } from 'react';
import { handleSearch } from '../../components/Api/Api';
import MoviesList from '../../components/MoviesList/MoviesList';
import SearchBar from 'components/Searchbar/SearchBar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (!query) return;
        const searchResults = await handleSearch(query);
        setMovies(searchResults);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSearchSubmit = value => {
    setQuery(value.query);
  };

  return (
    <div>
      <h1>Movies Page</h1>
      <SearchBar onSubmit={handleSearchSubmit} />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
