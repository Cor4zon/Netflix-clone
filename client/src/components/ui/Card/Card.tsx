import './Card.scss';
import CardImage from '@/assets/images/card-image.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Card = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const result = await axios.get(`http://localhost:8080/api/movies/${movieId}`);
      setMovie(result);
    };
    getMovie();
  }, []);

  return (
    <div className="card">
      <img src={movie?.img} alt="card" className="card_image" />
    </div>
  );
};

export default Card;
