import './Card.scss';
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
  }, []);

  const showCardInfoHanlder = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        
  };

  return (
    <Link to={{ pathname: '/watch'}} state={{movir: movie}}>
      <div className="card" id={movie?.id} onMouseEnter={(event) => showCardInfoHanlder(event)} style={{backgroundImage: 'url(' + movie?.img + ')'}}>
      </div>
    </Link>
  );
};

export default Card;
