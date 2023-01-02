import "./Navbar.scss";
import NetflixLogo from "@/assets/images/netflix-logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <img src={NetflixLogo} alt="netflix" />
        <ul className="navbar-list">
          <li className="navbar-item">Start</li>
          <li className="navbar-item">Show</li>
          <li className="navbar-item">Movies</li>
          <li className="navbar-item">New</li>
          <li className="navbar-item">My List</li>
        </ul>
      </div>

      <div className="navbar-buttons__container">
        <div className="navbar_button">
          <SearchIcon color={"inherit"} />
        </div>
        <div className="navbar_button">
          <NotificationsNoneIcon color={"inherit"} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
