import Home from './pages/Home/Home';

import './App.scss';
import SingIn from './pages/SignIn/SignIn';
import { Outlet } from 'react-router-dom';
import NavBar from './components/ui/Navbar/Navbar';

function App() {
  const token = localStorage.getItem("token");
  
  if (!token) {
    return <SingIn />
  }

  return (
    <div className="page-container">
      <NavBar />
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
