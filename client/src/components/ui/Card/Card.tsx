import './Card.scss';
import CardImage from '@/assets/images/card-image.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Card = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const result = await axios.get(`http://localhost:8080/api/movies/${movieId}`, {
        headers: {
          token:
          `JWT ${localStorage.getItem('token')}`,
        },
      });
      setMovie(result.data);
    };
    getMovie();
  }, [7]);

  return (
    <Link to={{ pathname: '/watch'}} state={{movir: movie}}>
      <div className="card">
        <img src={movie?.img} alt="card" className="card_image" />
      </div>
    </Link>
  );
};

export default Card;
