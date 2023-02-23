import Button from '@/components/ui/Button/Button';
import Modal from '@/components/ui/Modal/Modal';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MainShow.scss';

const CURRENT_MAIN_SHOW_ID = '63e8b52a0ad1339da87926f0/'

const MainShow = () => {
  const [ movie, setMovie ] = useState(null);
  const [ isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    const getMovie = async () => {
      const result = await axios.get(`http://localhost:8080/api/movies/${CURRENT_MAIN_SHOW_ID}`, {
        headers: {
          token:
          `JWT ${localStorage.getItem('token')}`,
        },
      });
      console.log(result.data.img);
      setMovie(result.data);
    };
    getMovie();
  }, []);

  return (
    <div className="main-show__container" style={{backgroundImage: 'url(' + movie?.img + ')'}}>
      { isModalOpen && <Modal movie={movie} setIsModalOpen={setIsModalOpen} />}
      <div className="main-show__content">
        <img src={movie?.titleImg} alt="show-logo" className="titleImg" />
        <p className="main-show__description">
          {movie?.desc}
        </p>
        <div className="buttons-container">
        <Link to={{ pathname: '/watch'}} state={{movir: movie}}>
          <Button
              buttonType="play"
              buttonText="Watch"
              onClick={() => {
                console.log('play');
              }}
            />
        </Link>
          
          <Button
            buttonType="info"
            buttonText="More Info"
            onClick={() => {
              setIsModalOpen(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainShow;
