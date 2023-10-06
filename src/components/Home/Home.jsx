import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../apiService';
import css from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading movies...</div>;
  if (error)
    return <div>There was an error loading the movies: {error.message}</div>;

  return (
    <div>
      <h1>Popular Movies Today</h1>
      <ul className={css.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={css.movieItem}>
            <Link to={`/movies/${movie.id}`} className={css.movieLink}>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt={movie.title}
                  className={css.movieImage}
                />
              ) : (
                <div className={css.noImage}>No Image Available</div>
              )}
              <span className={css.movieTitle}>{movie.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
