import React from 'react';
import Movie from '../components/Movie';
import { useEffect, useState } from 'react';

const UpcomingMoviesApi =
  'https://api.themoviedb.org/3/movie/upcoming?api_key=87ac5b27a3cb22f36786626ff9eeba82&language=en-US&page=1';

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies(UpcomingMoviesApi);
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
      <h1>Upcoming Movies</h1>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </>
  );
};

export default UpcomingMovies;
