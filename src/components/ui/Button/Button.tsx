import InfoIcon from "./images/info-icon.svg";
import PlayIcon from "./images/play-icon.svg";
import "./button.scss";

type ButtonProps = {
  buttonType: "play" | "info";
  buttonText: string;
  onClick: () => void;
};

const Button = ({ buttonType, buttonText, onClick }: ButtonProps) => {
  const getButtonIcon = () => {
    if (buttonType === "play") {
      return PlayIcon;
    } else if (buttonType === "info") {
      return InfoIcon;
    }
  };
  return (
    <button className="button" onClick={() => onClick()}>
      <img src={getButtonIcon()} alt="button icon" /> {buttonText}
    </button>
  );
};

export default Button;
