// MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieDetails } from '../API/ApiService';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const { movieId } = useParams();
  const location = useLocation(); // Accesează locația curentă

  useEffect(() => {
    if (!/^\d+$/.test(movieId)) {
      setRedirectToHome(true);
      return;
    }

    const fetchDetails = async () => {
      try {
        const details = await fetchMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchDetails();
  }, [movieId]);

  if (redirectToHome) {
    return <Navigate replace to="/" />;
  }

  if (!movieDetails) {
    return <div>Loading...</div>;
  }
  const posterURL = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
  const genres = movieDetails.genres.map(genre => genre.name).join(', ');

  return (
    <div className={styles.movieDetails}>
      <Link
        to={
          location.state?.from === '/movies'
            ? `/movies${
                location.state.search ? `?query=${location.state.search}` : ''
              }`
            : '/'
        }
        className={styles.goBackLink}
      >
        &larr; Go back
      </Link>
      <div className={styles.details}>
        <img
          src={posterURL}
          alt={`Poster for ${movieDetails.title}`}
          className={styles.poster}
        />
        <div>
          <h1>
            {movieDetails.title} (
            {new Date(movieDetails.release_date).getFullYear()})
          </h1>
          <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <div className={styles.additionalInformation}>
        <h2>Additional information</h2>
        <ul>
          <li className={styles.additional}>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li className={styles.additional}>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
