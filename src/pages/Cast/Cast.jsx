// Cast.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../components/Api/Api'; // Importă funcția corectă
import MoviesList from 'components/MoviesList/MoviesList';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        if (!movieId) return;

        const castData = await fetchMovieCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error('Error fetching cast details:', error);
      }
    };

    fetchCastData();
  }, [movieId]);

  return (
    <div>
      <h1>Cast Page</h1>
      <MoviesList movies={cast} />
    </div>
  );
};

export default Cast;
