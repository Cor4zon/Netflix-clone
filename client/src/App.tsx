import Home from './pages/Home/Home';

import SignUp from './pages/Register/Register';
import './App.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  if (!token) {
    console.log('no token');
    return navigate("/signin");
  }

  return (
    <div className="page-container">
      <Home />
    </div>
  );
}

export default App;
