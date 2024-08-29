import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${title}`}>
        <img src={posterURL} alt={`${title} poster`} />
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
      <span>Rating: {rating}/10</span>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posterURL: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
