import "./Card.scss";
import CardImage from "@/assets/images/card-image.png";

const Card = () => {
    return <div className="card">
        <img src={CardImage} alt="card image" className="card_image" />
    </div>
};

export default Card;