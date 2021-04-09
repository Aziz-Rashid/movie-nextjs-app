import React from 'react';
import Movie from '../components/Movie';
import { useEffect, useState } from 'react';

const Trending_Movies_Api = 'https://api.themoviedb.org/3/trending/movie/day?api_key=87ac5b27a3cb22f36786626ff9eeba82';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies(Trending_Movies_Api);
  }, []);
  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };
  return (
    <>
      <h1>Trending Movies</h1>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </>
  );
};

export default TrendingMovies;
