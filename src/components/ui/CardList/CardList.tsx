import Card from '@/components/ui/Card/Card';
import './CardList.scss';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const CardList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="card-list_wrapper">
      <h3 className="card-list__title">
        See again <KeyboardArrowRightIcon />{' '}
      </h3>
      return (
      <Slider {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
      {/* <ul className="card_list">
        <li className="list_item">
          <Card />
        </li>
      </ul> */}
    </div>
  );
};

export default CardList;
