import './Register.scss';

import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import NetflixLogo from '@/assets/images/netflix-logo.svg';

const Register = () => {
  const [language, setLanguage] = React.useState('1');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
      <div className="content">
        <div className="registration-header">
          <img className="registraion__logo-img" src={NetflixLogo} alt="logo" />
          <div className="registraion-header__btns">
            <Select
              value={language}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              className={"language-select"}
            >
              <MenuItem value="1" className="menu-item__lang"> 
                {/* <LanguageIcon /> */}
                <em>English</em>
                <ArrowDropDownIcon />
              </MenuItem>
            </Select>
            <Button className="register-btn" variant="contained">Sign Up</Button>
          </div>
        </div>
        
      </div>
  );
};

export default Register;
