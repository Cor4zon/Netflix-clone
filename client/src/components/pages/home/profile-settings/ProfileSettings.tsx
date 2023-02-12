import "./ProfileSettings.scss";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import MoveDownIcon from '@mui/icons-material/MoveDown';
import ProfileIcon from '@/assets/images/profile-icon.png';

export const ProfileSettings = () => {
  return (
    <div className='profile-settings'>
      <ul className="profile-setting-list">
        <li className="profile-settings-item">
            <img src={ProfileIcon} alt="netflix" />
            <p className="settings-item__text">
                Profile Name
            </p>
        </li>
        <li className="profile-settings-item">
            <EditIcon />
             <p className="settings-item__text">
                Manage Profiles
            </p>
        </li>
        <li className="profile-settings-item">
            <MoveDownIcon />
            <p className="settings-item__text">
                Transfer Profile
            </p>
        </li>
        <li className="profile-settings-item">
            <PersonIcon />
            <p className="settings-item__text">
                Account
            </p>
            </li>
        <li className="profile-settings-item">
            <HelpOutlineIcon /> 
            <p className="settings-item__text">
                Help Center
            </p>
        </li>
        <li className="profile-settings-item profile-signOut">
            Sign out of Netflix
        </li>
      </ul>
    </div>
  );
};
