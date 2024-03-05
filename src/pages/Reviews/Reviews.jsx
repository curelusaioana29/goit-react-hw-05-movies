import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../components/Api/Api';
import MoviesList from 'components/MoviesList/MoviesList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        if (!movieId) return;
        const reviewsData = await fetchMovieReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviewsData();
  }, [movieId]);

  return (
    <div>
      <h1>Reviews Page</h1>
      <MoviesList movies={reviews} />
    </div>
  );
};

export default Reviews;
