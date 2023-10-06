import React, { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../apiService';

export default function Reviews({ movieId }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId).then((data) => setReviews(data.results));
    }, [movieId]);

    return (
        <div>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review) => (
                        <li key={review.id}>
                            <h3>Author: {review.author}</h3>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>We don't have any reviews for this movie</p>
            )}
        </div>
    );
}
