import './Card.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

type MovieType = {
  "_id": number,
  "title": string,
  "desc": string,
  "img": string,
  "bigImg": string,
  "titleImg": string,
  "trailer": string,
  "video": string,
  "year": number,
  "limit": string,
  "genre": string,
  "isSeries": boolean
};

const Card = ({ movieId }: { movieId: number }) => {
  const [movie, setMovie] = useState<MovieType | null>(null);

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
    // console.log(event.target.id);    
  };

  return (
    <>
      <Link to={{ pathname: '/watch'}} state={{movir: movie}}>
        <div className="card" id={String(movie?._id)} onMouseEnter={(event) => showCardInfoHanlder(event)} style={{backgroundImage: 'url(' + movie?.img + ')'}}>
        </div>
      </Link>
      <div className='bigCard'>
        <p>h</p>
      </div>
    </>
  );
};

export default Card;
