// MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchMovieDetails } from '../../components/Api/Api'; // Importă funcția corectă

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchMovieDetailsData = async () => {
      try {
        if (!movieId) return;

        // Folosește funcția corectă
        const details = await fetchMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetailsData();
  }, [movieId]);

  return (
    <div>
      <h1>Movie Details Page</h1>
      <MoviesList movies={movieDetails} />
    </div>
  );
};

export default MovieDetails;
