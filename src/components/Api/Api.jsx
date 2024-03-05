// Api.js

import axios from 'axios';
const API_KEY = '051a3d8a53317eb2948f5da4b81e4296';
const API_BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = API_BASE_URL;

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`trending/movie/day`, params);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const handleSearch = async movieName => {
  try {
    const response = await axios.get(
      `/search/movie?query=${movieName}`,
      params
    );
    return response.data.results;
  } catch (error) {
    console.error(`Error searching for "${movieName}":`, error);
    throw error;
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}`, params);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/credits?`, params);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error;
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/reviews?`, params);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};
