import './Card.scss';
import CardImage from '@/assets/images/card-image.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Card = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  console.log(movieId);
  useEffect(() => {
    const getMovie = async () => {
      const result = await axios.get(`http://localhost:8080/api/movies/${movieId}`, {
        headers: {
          token:
            'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzk1YmJhYzIxMGVjMTFkZTJlNDFlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDE0MDkyNSwiZXhwIjoxNjc0NTcyOTI1fQ.CMYXfS5J_eeKABM0n3bDoOuZ5Sbh00Guk1HhETiUbJI',
        },
      });
      console.log(result);
      setMovie(result.data);
    };
    getMovie();
  }, [7]);

  return (
    <Link to={{ pathname: '/watch', movir: movie }}>
      <div className="card">
        <img src={movie?.img} alt="card" className="card_image" />
      </div>
    </Link>
  );
};

export default Card;
