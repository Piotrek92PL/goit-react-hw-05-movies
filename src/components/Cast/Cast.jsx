import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../apiService';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <img alt="No image available" />
            )}
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
