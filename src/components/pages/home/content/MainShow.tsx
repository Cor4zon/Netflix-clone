import Button from '@/components/ui/Button/Button';
import ShowLogoSvg from './images/show-logo.svg';
import './MainShow.scss';

const MainShow = () => {
  return (
    <div className="main-show__container">
      <div className="main-show__content">
        <img src={ShowLogoSvg} alt="show-logo" />
        <p className="main-show__description">
          Lorem ipsum is placeholder text commonly used in
          <br />
          the graphic, print, and publishing industries for
          <br />
          previewing layouts and visual mockups.
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
