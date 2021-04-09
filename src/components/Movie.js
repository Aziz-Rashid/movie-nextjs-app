import React from 'react';
import PropTypes from 'prop-types';

const IMAGE_API = 'https://image.tmdb.org/t/p/w780/';
const DEFAULT_PIC =
  'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80';

const Movie = ({ title, overview, poster_path, vote_average }) => {
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  };
  return (
    <div className='movie'>
      <img src={poster_path ? IMAGE_API + poster_path : DEFAULT_PIC} alt='Movie Poster' />
      <div className='movie-info'>
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
      </div>
      <div className='movie-over'>
        <h2>overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  vote_average: PropTypes.number,
};
export default Movie;
