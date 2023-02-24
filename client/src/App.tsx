import Home from './pages/Home/Home';

import './App.scss';
import SingIn from './pages/SignIn/SignIn';

function App() {
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
