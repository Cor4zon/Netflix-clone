import Button from '@/components/ui/Button/Button';
import ShowLogoSvg from './images/show-logo.svg';
import './MainShow.scss';

const MainShow = () => {
  return (
    <div className="main-show__container">
      <div className='main-show__content'>
        <img src={ShowLogoSvg} alt="show-logo" />

        <div className="buttons-container">
          <Button
            buttonType="play"
            buttonText="Watch"
            onClick={() => {
              console.log('play');
            }}
          />
          <Button
            buttonType="play"
            buttonText="Watch"
            onClick={() => {
              console.log('play');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainShow;
