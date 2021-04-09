import React from 'react';
import Movie from '../components/Movie';
import { useEffect, useState } from 'react';

const TrendingTvShowsAPI = 'https://api.themoviedb.org/3/trending/tv/day?api_key=87ac5b27a3cb22f36786626ff9eeba82';

const TrendingTvShows = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies(TrendingTvShowsAPI);
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
      <h1>Trending TV Shows</h1>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </>
  );
};

export default TrendingTvShows;
