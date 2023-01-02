import Card from "@/components/ui/Card/Card";
import "./CardList.scss";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CardList = () => {
  return (
    <div className="card-list_wrapper">
      <h3 className="card-list__title">See again <KeyboardArrowRightIcon /> </h3>
      <ul className="card_list">
        <li className="list_item">
          <Card />
        </li>
        <li className="list_item">
          <Card />
        </li>
        <li className="list_item">
          <Card />
        </li>
        <li className="list_item">
          <Card />
        </li>
        <li className="list_item">
          <Card />
        </li>
      </ul>
    </div>
  );
};

export default CardList;