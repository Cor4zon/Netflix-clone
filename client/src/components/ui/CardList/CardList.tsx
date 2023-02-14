import Card from '@/components/ui/Card/Card';
import './CardList.scss';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const CardList = ({ list }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h3 className="card-list__title">
        {list.title} <KeyboardArrowRightIcon />{' '}
      </h3>
      <Slider {...settings}>
        {list?.content?.map((movie) => {
          return <Card movieId={movie} />;
        })}
      </Slider>
    </div>
  );
};

export default CardList;
