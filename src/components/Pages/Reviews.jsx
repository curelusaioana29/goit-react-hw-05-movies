// Reviews.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../API/ApiService';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await fetchMovieReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (!reviews.length) {
    return <div>We don't have any reviews for this movie.</div>;
  }

  return (
    <div>
      {/* Map through the reviews and display them */}
      {reviews.map(review => (
        <div key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
