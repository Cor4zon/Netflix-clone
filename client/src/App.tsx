import Home from './pages/Home/Home';

import SignUp from './pages/Register/Register';
import './App.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Sign } from 'crypto';
import SingIn from './pages/SignIn/SignIn';

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  if (!token) {
    return <SingIn />
  }

  return (
    <div className="page-container">
      <Home />
    </div>
  );
}

export default App;
