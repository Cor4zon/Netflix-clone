import './MainShow.scss';
import Button from '@/components/ui/Button/Button';

const MainShow = () => {
  // todo: разобраться с затемнением
  return (
    <div className="main-show__container">
      {/* n-show or n-series icon */}
      {/* show name */}
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
      {/* <img src={BackgroundSvg} alt="background" className="main-show" /> */}
    </div>
  );
};

export default MainShow;
