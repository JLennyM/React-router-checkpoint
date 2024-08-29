import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetail.css'; // Importing the CSS file

const MovieDetail = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  // Extract the YouTube video ID from the URL
  const videoId = movie.trailerURL.split('v=')[1]?.split('&')[0] || movie.trailerURL.split('/').pop().split('?')[0];

  // Construct the embed URL
  const embedURL = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={embedURL}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
