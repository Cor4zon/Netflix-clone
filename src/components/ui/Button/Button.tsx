import InfoIcon from "./images/info-icon.svg";
import PlayIcon from "./images/play-icon.svg";
import "./Button.scss";

type ButtonProps = {
  buttonText: string;
  onClick: () => void;
  disabled: boolean;
  buttonType: "play" | "info";
  children: any;
  style: any;
};

const Button = ({
  onClick,
  disabled,
  buttonType,
  style,
  buttonText,
}: ButtonProps) => {
  const getButtonIcon = () => {
    if (buttonType === "play") {
      return PlayIcon;
    } else if (buttonType === "info") {
      return InfoIcon;
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      <img src={getButtonIcon()} alt="button icon" /> {buttonText}
    </button>
  );
};

export default Button;
