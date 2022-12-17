import "./navbar.scss";
import NetflixLogo from "../../assets/images/netflix-logo.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={NetflixLogo} alt="netflix" />
    </div>
  );
};

export default NavBar;
