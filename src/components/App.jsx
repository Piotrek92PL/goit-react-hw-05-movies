import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from 'react-router-dom';


const Cast = React.lazy(() => import('./Cast/Cast'));
const Home = React.lazy(() => import('./Home/Home'));
const Movies = React.lazy(() => import('./Movies/Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails/MovieDetails'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));

export function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Search Movies</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

