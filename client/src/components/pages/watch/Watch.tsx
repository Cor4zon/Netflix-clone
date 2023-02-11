import React from 'react';
import { useLocation } from 'react-router-dom';

const Watch = () => {
  const { state } = useLocation();

  console.log(location)
  const movie = state;

  console.log(movie)

  return (
    <div className="watch">
      <div className="back">GO BACK</div>
      <video className="video" autoPlay controls src={movie.movir.video} />
    </div>
  );
};

export default Watch;
