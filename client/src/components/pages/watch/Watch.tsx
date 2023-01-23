import React from 'react';
import { useLocation } from 'react-router-dom';

const Watch = () => {
  const location = useLocation();
  const movie = location.movir;
    console.log(location);
  return (
    <div className="watch">
      <div className="back">GO BACK</div>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
};

export default Watch;
