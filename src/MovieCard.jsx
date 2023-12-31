import React from 'react';

const MovieCard = ({ movie: { Year, Poster, Title, Type, imdbID } }) => {
 return (
  <div className='movie' key={imdbID}>
    <div>
      {Year}
    </div>
    <div>
      <img
        src={Poster !== 'N/A' ? Poster : "https://via.placeholder.com/400"}
        alt={Title}
      />
    </div>
    <div>
      <span>{Type}</span>
      <h3>{Title}</h3>
    </div>
  </div>
 );
}

export default MovieCard;