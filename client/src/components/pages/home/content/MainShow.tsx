import Button from '@/components/ui/Button/Button';
import axios from 'axios';
import { cpuUsage } from 'process';
import { useEffect, useState } from 'react';
import ShowLogoSvg from './images/show-logo.svg';
import './MainShow.scss';

const CURRENT_MAIN_SHOW_ID = '63e8b52a0ad1339da87926f0/'

const MainShow = () => {
  const [ movie, setMovie ] = useState(null);
  
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
      <div className="main-show__content">
        <img src={movie?.titleImg} alt="show-logo" />
        <p className="main-show__description">
          {movie?.desc}
        </p>
        <div className="buttons-container">
          <Button
            buttonType="play"
            buttonText="Watch"
            onClick={() => {
              console.log('play');
            }}
          />
          <Button
            buttonType="info"
            buttonText="More Info"
            onClick={() => {
              console.log('info');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainShow;
