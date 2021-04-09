import React from 'react';
import Movie from '../components/Movie';
import { useEffect, useState } from 'react';
import TrendingMovies from '../components/TrendingMovies';
import UpcomingMovies from '../components/UpcomingMovies';
import TrendingTvShows from '../components/TrendingTvShows';

const Trending_Movies_Api = 'https://api.themoviedb.org/3/trending/all/day?api_key=87ac5b27a3cb22f36786626ff9eeba82';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/multi?api_key=87ac5b27a3cb22f36786626ff9eeba82&language=en-US&page=1&include_adult=false&query=';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
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
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm('');
    }
  };
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            type='search'
            className='search'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      {/* <div className='movie-container'>
        <h1>Trending Movies</h1>
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div> */}
      <div className='movie-container'>
        <UpcomingMovies />
      </div>
      <div className='movie-container'>
        <TrendingMovies />
      </div>
      <div className='movie-container'>
        <TrendingTvShows />
      </div>
    </div>
  );
}

export default App;
