import './Card.scss';
import CardImage from '@/assets/images/card-image.png';
import { useEffect } from 'react';
import axios from 'axios';

const Card = ({ movie }) => {
  console.log(movie.img);

  useEffect(() => {
    const getMovie = async () => {
      await axios.get('');
    };
    getMovie();
  }, []);

  return (
    <div className="card">
      <img src={movie.img} alt="card" className="card_image" />
    </div>
  );
};

export default Card;
