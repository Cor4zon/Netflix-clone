import './Navbar.scss';
import NetflixLogo from '@/assets/images/netflix-logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <img src={NetflixLogo} alt="netflix" />
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to='/'>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to='/series'>
              Tv Shows
            </Link>
          </li>
          <li className="navbar-item">
            <Link to='/movies'>
              Movies
            </Link>
          </li>
          <li className="navbar-item">
            <Link to='/my-list'>
              My List
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-buttons__container">
        <div className="navbar_button">
          <SearchIcon color={'inherit'} />
        </div>
        <div className="navbar_button">
          <NotificationsNoneIcon color={'inherit'} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
