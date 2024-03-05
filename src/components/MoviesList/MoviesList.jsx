// MoviesList.jsx
import React from 'react';

const MoviesList = ({ movies }) => {
  return (
    <div>
      <h2>Movies List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
