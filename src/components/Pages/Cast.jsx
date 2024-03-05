import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../API/ApiService';
import styles from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await fetchMovieCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  if (!cast.length) {
    return <div>No cast information available.</div>;
  }

  return (
    <div className={styles.castContainer}>
      {cast.map(actor => (
        <div key={actor.cast_id} className={styles.actorCard}>
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={`${actor.name}`}
              className={styles.actorImage}
            />
          ) : (
            <div className={styles.noImageBanner}>No img available</div>
          )}
          <h3 className={styles.actorName}>{actor.name}</h3>
          <p className={styles.characterName}>Character: {actor.character}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
