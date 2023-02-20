import "./ProfileSettings.scss";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import MoveDownIcon from '@mui/icons-material/MoveDown';
import ProfileIcon from '@/assets/images/profile-icon.png';
import { Link } from "react-router-dom";

type ProfileSettingsType = {
    hidden: boolean, 
    setHidden: React.Dispatch<React.SetStateAction<boolean>>,
};

export const ProfileSettings = ({hidden, setHidden}: ProfileSettingsType) => {
    if (hidden) {
        return <></>
    }

  return (
    <div className='profile-settings' onMouseEnter={() => setHidden(false)} onMouseLeave={() => {
        setHidden(true);
    }}>
      <ul className="profile-setting-list">
      <Link to="/profile/:profileId">
            <li className="profile-settings-item">
                    <img src={ProfileIcon} alt="netflix" />
                    <p className="settings-item__text">
                        Profile Name
                    </p>
            </li>
        </Link>
        <Link to="/profile/manage">
            <li className="profile-settings-item">
                    <EditIcon />
                    <p className="settings-item__text">
                        Manage Profiles
                    </p>
            </li>
        </Link>
        <Link to="/profile/transfer-profile">
            <li className="profile-settings-item">
                    <MoveDownIcon />
                    <p className="settings-item__text">
                        Transfer Profile
                    </p>    
            </li>
        </Link>
        <Link to="/profile/account">
            <li className="profile-settings-item">
                <PersonIcon />
                <p className="settings-item__text">
                    Account
                </p>    
            </li>
        </Link>
        <Link to="/profile/help-center">
            <li className="profile-settings-item">
                    <HelpOutlineIcon /> 
                    <p className="settings-item__text">
                        Help Center
                    </p>
            </li>
        </Link>
        <Link to="/signout">
            <li className="profile-settings-item profile-signOut">
                    Sign out of Netflix    
            </li>
        </Link>
      </ul>
    </div>
  );
};
