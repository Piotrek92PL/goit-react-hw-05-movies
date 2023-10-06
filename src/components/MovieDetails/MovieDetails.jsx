import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet, Route, Routes } from 'react-router-dom';
import {
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
} from '../../apiService';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieDetails(movieId).then(data => setMovieDetails(data));
    fetchMovieCast(movieId).then(data => setCast(data.cast));
    fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <div>
      <Link to="#" onClick={() => window.history.back()}>
        Go back
      </Link>
      <div className={css.container}>
        <img
          className={css.moviePoster}
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <div className={css.movieInfo}>
          <h2 className={css.movieTitle}>{movieDetails.title}</h2>
          <p className={css.movieRating}>Rating: {movieDetails.vote_average}</p>
          <p>{movieDetails.overview}</p>
          <p>
            Genres: {movieDetails.genres?.map(genre => genre.name).join(', ')}
          </p>
          <Link to={`/movies/${movieId}/cast`}>Obsada</Link>
          <Link to={`/movies/${movieId}/reviews`}>Recenzje</Link>
        </div>
      </div>
      <div className={css.additionalContent}>
        <Routes>
          <Route
            path="cast"
            element={
              <ul className={css.castList}>
                {cast.map(member => (
                  <li key={member.cast_id}>
                    {member.name} as {member.character}
                  </li>
                ))}
              </ul>
            }
          />
          <Route
            path="reviews"
            element={
              <ul className={css.reviewList}>
                {reviews.map(review => (
                  <li key={review.id}>
                    <p>{review.author} said:</p>
                    <p>{review.content}</p>
                  </li>
                ))}
              </ul>
            }
          />
        </Routes>
        <Outlet />{' '}
      </div>
    </div>
  );
}
