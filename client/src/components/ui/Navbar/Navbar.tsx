import './Navbar.scss';
import NetflixLogo from '@/assets/images/netflix-logo.svg';
import ProfileIcon from '@/assets/images/profile-icon.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ProfileSettings } from '@/components/pages/home/profile-settings/ProfileSettings';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NavBar = () => {
  const [hidden, setHidden] = useState(true);
  const [searchStr, setSearchStr] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  if (searchStr && location.pathname !== '/search') {
    navigate('/search');
  }

  useEffect(() => {
    const getFilmsBySearch = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/movies?search=${searchStr}'`,
          {
            headers: {
              token: `JWT ${localStorage.getItem('token')}`,
            },
          },
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getFilmsBySearch();
  }, [searchStr]);

  return (
    <div className="navbar">
      <div className="navbar-menu">
        <Link to="/">
          <img src={NetflixLogo} alt="netflix" />
        </Link>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/series">Tv Shows</Link>
          </li>
          <li className="navbar-item">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="navbar-item">
            <Link to="/my-list">My List</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-buttons__container">
        <div className="search">
          <input
            type="text"
            className="input"
            placeholder="Search..."
            onChange={(event) => {
              console.log(event.target.value);
              setSearchStr(event.target.value);
            }}
          />
          <button
            className="btn"
            onClick={() => {
              const search = document.querySelector('.search');
              const input = document.querySelector('.input');
              search?.classList.toggle('active');
              input?.focus();
            }}>
            <SearchIcon color={'inherit'} />
          </button>
        </div>
        <div className="navbar_button">
          <NotificationsNoneIcon color={'inherit'} />
        </div>
        <div className="navbar_button" onMouseEnter={() => setHidden(false)}>
          <img src={ProfileIcon} alt="netflix" />
        </div>
      </div>

      <ProfileSettings hidden={hidden} setHidden={setHidden} />
    </div>
  );
};

export default NavBar;
