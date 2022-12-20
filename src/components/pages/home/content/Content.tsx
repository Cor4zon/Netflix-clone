import "./content.scss";
import MainShow from "./MainShow";
import ShowRecomendations from "./ShowRecomendations";
import Button from "../../../ui/Button/Button";

const Content = () => {
  return (
    <div className="content">
      {/* background-image */}
      <MainShow />
      <ShowRecomendations />

      <Button buttonType="play" buttonText="Watch" onClick={() => {}} />
      {/* special row with rating */}
      {/* row-3 */}
    </div>
  );
};

export default Content;
