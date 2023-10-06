import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from 'apiService';
import styles from './Movies.module.css';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;
    searchMovies(query).then(data => setMovies(data.results));
  }, [query]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={query} onChange={handleChange} />
      </form>
      <ul className={styles.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className={styles.movieImage}
                />
              ) : (
                <div className={styles.noImage}>No Image</div>
              )}
              <span className={styles.movieTitle}>{movie.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
