import "./content.scss";
import CardList from "../../../ui/CardList/CardList";
import MainShow from "./MainShow";

const Content = () => {
  return (
    <div className="content">
      {/* background-image */}
      <MainShow />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      {/* special row with rating */}
      {/* row-3 */}
    </div>
  );
};

export default Content;
