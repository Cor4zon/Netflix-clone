import Card from "../Card/Card";
import "./cardList.scss";

const CardList = () => {
  return (
    <div className="card-list_wrapper">
      <h3 className="card-list__title">See again</h3>
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