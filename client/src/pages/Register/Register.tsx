import './Register.scss';

import * as React from 'react';
import { Header as RegisterHeader } from './Header';
import { RegisterContent } from './RegisterContent';

const Register = () => {
  return (
    <div className="content">
      <RegisterHeader />
      <RegisterContent />
    </div>
  );
};

export default Register;
