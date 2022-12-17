import "./home.scss";
import NavBar from "../../components/ui/Navbar/Navbar";
import Content from "../../components/pages/content/Content";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Content />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
