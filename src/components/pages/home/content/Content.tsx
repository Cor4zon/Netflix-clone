import "./content.scss";
import MainShow from "./MainShow";
import ShowRecomendations from "./ShowRecomendations";

const Content = () => {
  return (
    <div className="content">
      {/* background-image */}
      <MainShow />
      <ShowRecomendations />
      {/* special row with rating */}
      {/* row-3 */}
    </div>
  );
};

export default Content;
