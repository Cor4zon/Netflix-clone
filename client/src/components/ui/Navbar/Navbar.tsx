import './Navbar.scss';
import NetflixLogo from '@/assets/images/netflix-logo.svg';
import ProfileIcon from '@/assets/images/profile-icon.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from 'react-router-dom';
import { ProfileSettings } from '@/components/pages/home/profile-settings/ProfileSettings';
import { useState } from 'react';


const NavBar = () => {
  const [ hidden, setHidden ] = useState(true);
  
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <Link to="/">
          <img src={NetflixLogo} alt="netflix" />
        </Link>
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
        <div className="navbar_button" onMouseEnter={() => setHidden(false)} >
          <img src={ProfileIcon} alt="netflix" />
        </div>
      </div>

      <ProfileSettings hidden={hidden} setHidden={setHidden} />

    </div>
  );
};

export default NavBar;
