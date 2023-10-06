const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7e0e2e2f9218fa3d19d5f8d5dd18ff00';

function fetchWithErrorHandling(url = '', config = {}) {
  return fetch(url, config).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return response.json();
  });
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
}

export function searchMovies(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
}

export function fetchMovieDetails(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
}

export function fetchMovieCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
}

export function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
}
