import BackgroundSvg from "../../../../assets/images/temp-big-image.png";
import "./mainShow.scss";

const MainShow = () => {
    // todo: разобраться с затемнением
    return <div>
        <img src={BackgroundSvg} alt="background" className="main-show" />
    </div>
};

export default MainShow;